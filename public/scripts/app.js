console.log("Sanity Check: JS is working!");

$( document ).ready(function() {
  $("input").change(function(){
    // alert("The text has been changed.");
    // call my api
    $.ajax({
      url: "./api/apprenticeships"
    }).then(function(apprenData) {
      console.log(apprenData);
    });
  });
});
