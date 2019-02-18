console.log("Sanity Check: JS is working!");

$( document ).ready(function() {
  $("#search").change(function(){
    // alert("The text has been changed.");
    // call my api
    $.ajax({
      dataType: "json",
      url: "./api/apprenticeships",
    }).then(function(apprenData) {
      console.log(apprenData);

      for(var i = 0; i < apprenData.length; i++){
        $("#appren-data").append(`${apprenData[i].company} ${apprenData[i].city} ${apprenData[i].description}`);
      }
    });
  });

  $('#newApprenForm').on('submit', function(e) {
    e.preventDefault();
    // serialized which creates a string
    console.log('new apprenticeship serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/',
      data: $(this).serializeArray(),
      success: newApprenticeshipSuccess,
      error: newApprenticeshipError,
    });
  });
});

function newApprenticeshipSuccess(json) {
  // clear the form
  $('#newApprenForm input').val('');
  alert(json);
} 

function newApprenticeshipError() {
  console.log("newApprenticeship error!");
}
