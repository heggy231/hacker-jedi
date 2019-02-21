console.log("up and running");

var apprList = [];
var apprTarget;

//JQUERY
$(document).ready(function(){
    console.log("jquery is working");
    
    apprTarget = $('#apprList'); 

const handleError = function(err) {
    console.log('error: ' + err);
};

if(localStorage.userEmail === undefined) {
    $("#signIn").css("display", "block");
    $("#wrapper").css("display", "none");
}


$("input[type='email']").val(localStorage.userEmail);
//$("input[type='email']").attr("placeholder", localStorage.userEmail);

//MOVED THIS TO APP.JS

const handleSuccess = function(json) {
    apprList = json;
    //console.log(User._id),
    console.log(json);
    for(i=0; i<apprList.length; i++) {
        if(localStorage.userEmail === `${apprList[i].email}`) {
        //if user_created (for specific appr) === current_userID, then display the appr
        apprTarget.append(
       `<div>
        <div class= "displayed-input"> 
        <li class = "company"> Company: ${apprList[i].company}, </li>
        <li class = "city"> City: ${apprList[i].city}, </li>
        <li class = "url"> URL: ${apprList[i].url}, </li>
        <li class = "description"> Description: ${apprList[i].description} </li>
        <button class="delete" type="button" data-id=${apprList[i]._id}> Delete </button>  
        <button class="edit" type="button" data-id=${apprList[i]._id}> Edit </button> 
        </div>
        <span class="edit-input" style="display: none">
             <li> <input type="text" class="companyInput" value="${apprList[i].company}" /> </li> 
             <li> <input type="text" class="cityInput" value="${apprList[i].city}" /> </li> 
             <li> <input type="text" class="urlInput" value="${apprList[i].url}" /> </li> 
             <li> <input type="text" class="descriptionInput" value="${apprList[i].description}" /> </li> 
              <button class="save" data-id="${apprList[i]._id}">Save</button>
        </span>
        </div> `
        )
        }
    }
    console.log(apprTarget);
}




    $.ajax({
        method: 'GET',
        url: '/api/add',
        success: handleSuccess,
        error: handleError
      });



const getUserID = function(json) {
    console.log(json._id);
    console.log(localStorage.userEmail)
}

    $.ajax({
        method:'GET',
        url: '/user',
        success: getUserID,
        error: handleError
    })



  $('#apprForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/add',
      data: $(this).serialize(),
      success: addSuccess,
      error: handleError
  });
});


  
 apprTarget.on('click', '.delete', function() {
  $(this).parent().remove();
    console.log('clicked delete button to', '/api/add/'+ $(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/add/' + $(this).attr('data-id'),
      success: console.log('deleted this: ' + $(this).attr('data-id')),
      error:  handleError
    });
  });


  //edit

  apprTarget.on('click', '.edit', function() {
    console.log('clicked edit button to ' + $(this).attr('data-id'));
    $(this).parent().parent().find(".edit-input").css("display", "block");
    $(this).parent().parent().find(".displayed-input").hide();
  });





  //save edited

  apprTarget.on('click', '.save', function() {
    //$(this).parent().parent().find(".displayed-input").hide();
    let newCompany = $(this).parent().find(".companyInput").val();
    let newCity = $(this).parent().find(".cityInput").val();
    let newUrl = $(this).parent().find(".urlInput").val();
    let newDesc = $(this).parent().find(".descriptionInput").val();

    console.log('clicked save button to ' + $(this).attr('data-id'))
    console.log($(this).parent().find(".descriptionInput").val());

    $(this).parent().parent().find(".edit-input").css("display", "none");
    
    $(this).parent().parent().find(".company").html('Company: ' + newCompany );
    $(this).parent().parent().find(".city").html('City ' + newCity );
    $(this).parent().parent().find(".url").html('URL: ' + newUrl );
    $(this).parent().parent().find(".description").html('Description: ' + newDesc );

    $(this).parent().parent().find(".displayed-input").show();

    $.ajax({
      method: "PUT",
      url: `/api/add/${$(this).attr('data-id')}`,
      data: { 
        company: newCompany,
        city: newCity,
        url: newUrl,
        description: newDesc
        },
      success: (appr) => {
          console.log(appr);
          //what?
          //uh what's happening here?
          //seems like it is getting all company fields and setting them to $(this).parent().parent().find(".company").html(appr.company);
        //hmmm, seems like nothing happens when i get rid of it all....
        console.log("eh? is this successful? did ya edit?")
      }
    })

  })



});  // end of Jquery




function addSuccess(json) {
    $('#apprForm input').val('');
    apprList.push(json);
   
    console.log(apprList);
    console.log(json);
    apprTarget.append(`
        <div>
        <div class= "displayed-input"> 
        <li class = "company"> Company: ${json.company}, </li>
        <li class = "city"> City: ${json.city}, </li>
        <li class = "url"> URL: ${json.url}, </li>
        <li class = "description"> Description: ${json.description} </li>
        <button class="delete" type="button" data-id=${json._id}> Delete </button>  
        <button class="edit" type="button" data-id=${json._id}> Edit </button> 
        </div>
        <span class="edit-input" style="display: none">
              <li><input type="text" class = "companyInput" value="${json.company}" /></li>
              <li><input type="text" class = "cityInput" value="${json.city}" /></li>
              <li><input type="text" class = "urlInput" value="${json.url}" /></li>
              <li><input type="text" class = "descriptionInput" value="${json.description}" /></li>
              <button class="save" data-id="${json._id}">Save</button>
        </span>
        </div>
        `   
    )
    console.log(apprTarget);
  }


  
