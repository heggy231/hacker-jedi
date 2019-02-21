import { userInfo } from "os";

console.log("up and running index.html");

var apprList = [];
var apprTarget;

//JQUERY
$(document).ready(function(){
    console.log("jquery is working index.html");
    
    apprTarget = $('#apprList'); 

const handleError = function(err) {
    console.log('error: ' + err);
};



//MOVED THIS TO APP.JS

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
        </div>
        </div>
        <br>
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

});

let profile;
function onSignIn(googleUser) {
  //debugger;
  console.log('googleUser?: ' + googleUser);
  profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
   // This is null if the 'email' scope is not present.
   // access specific variables through local storage.
  //  localStorage.user = profile.U3
   console.log(profile.U3)
  //put ajax request here
  // get request for userInfo
  // if success save db user to local storage
  // if fail then post a new user
  // on success save db user to local storage
  
  //  user = localStorage.user
  //  user._id
  //return profile;
}

console.log(profile);
if(profile !== undefined){
  console.log(profile);
}


$(document).ready(function() {
  $("#gmailUserSubmit").click(function(e) {
  // debugger;
  console.log("hello");
  let email = profile.getEmail();
  console.log(email);
  let name = profile.getName();
    $.ajax({
      method: 'GET',
      url: '/profile',
      data: {
        name: name,
        email: email,
      },
      success: handleSuccess,
      error: handleError,
      beforeSend: function () {
      },
      complete: function () {
      },
    });
  });
});

const handleError = (xhr, status, errorThrown) => {
  console.log(`uh oh!! Error: ${errorThrown}`);
  // also display on index.html
  $(".text-center").text("album didn't load correctly!  Server down")
}


// moved success handling function definition outside the ajax call
const handleSuccess = function (response) {
  // debugger;
  console.log(response);
  $(".text-center").append(response.body);
  // $(".text-center").append(json); // this doesn't display
}  

// $(document).ready(function() {
//   $("#gmailUserSubmit").click(function() {

//   });
// });


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.removeItem('user')
    console.log('User signed out.');
  });
}

