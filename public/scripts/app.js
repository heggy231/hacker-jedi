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
