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
        $("#appren-data").append(`<tr><form><td>${apprenData[i].company}</td> <td>${apprenData[i].location}</td> <td>${apprenData[i].link}</td> <td>${apprenData[i].description}</td></form><button type="submit" class="btn btn-default">Edit</button></tr>`);
      }
    });
  });

  $('#newApprenForm').on('submit', function(e) {
    e.preventDefault();
    // serialized which creates a string
    console.log('new apprenticeship serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/apprenticeships',
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
