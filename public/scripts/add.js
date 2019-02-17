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
        apprTarget.append(`<li> Company: ${apprList[i].company}, City: ${apprList[i].city}, URL: ${apprList[i].url},
        Description: ${apprList[i].description} 
        <button class="delete" type="button" data-id=${json[i]._id}> Delete </button>  
        <button class="edit" type="button"> Edit </button> </li>`
        )
    }
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
