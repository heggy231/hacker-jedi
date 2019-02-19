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

const handleSuccess = function(json) {
    apprList = json;
    console.log(json);
    for(i=0; i<apprList.length; i++) {
        apprTarget.append(`
        <div>
        <div class= "displayed-input"> 
        <li class = "company"> Company: ${apprList[i].company}, </li>
        <li class = "city"> City: ${apprList[i].city}, </li>
        <li class = "url"> URL: ${apprList[i].url}, </li>
        <li class = "description"> Description: ${apprList[i].description} </li>
        <button class="delete" type="button" data-id=${apprList[i]._id}> Delete </button>  
        <button class="edit" type="button" data-id=${apprList[i]._id}> Edit </button> 
        </div>
        <span class="edit-input" style="display: none">
              <input type="text" class = "companyInput" value="${apprList[i].company}" />
              <input type="text" class = "cityInput" value="${apprList[i].city}" />
              <input type="text" class = "urlInput" value="${apprList[i].url}" />
              <input type="text" class = "descriptionInput" value="${apprList[i].description}" />
              <button class="save" data-id="${apprList[i]._id}">Save</button>
        </span>
        </div>
        `
        )}
    console.log(apprTarget);
}



    $.ajax({
        method: 'GET',
        url: '/api/add',
        success: handleSuccess,
        error: handleError
      });



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


  apprTarget.on('click', '.edit', function() {
    console.log('clicked edit button to ' + $(this).attr('data-id'));
    $(this).parent().parent().find(".edit-input").css("display", "block");
    $(this).parent().parent().find(".displayed-input").hide();
  });


  
  apprTarget.on('click', '.save', function() {
    //$(this).parent().parent().find(".displayed-input").hide();
    let newCompany = $(this).parent().find(".companyInput").val();
    let newCity = $(this).parent().find(".cityInput").val();
    let newUrl = $(this).parent().find(".urlInput").val();
    let newDesc = $(this).parent().find(".descriptionInput").val();

    console.log('clicked save button to ' + $(this).attr('data-id'))
    console.log($(this).parent().find(".descriptionInput").val());

    $(this).parent().parent().find(".edit-input").css("display", "none");
    //this is showing the old input...
    //how to get it to show the new input?
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
          //what?
          //uh what's happening here?
          //seems like it is getting all company fields and setting them to 
          //$(this).parent().parent().find(".company").html(appr.company);
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
    apprTarget.append(`<li>  Company: ${json.company}, City: ${json.city}, URL: ${json.url},
    Description: ${json.description} 
    <button class="delete" type="button" data-id=${json._id}> Delete </button>  
    <button class="edit" type="button"> Edit </button>
    </li>`)
    console.log(apprTarget);
  }
