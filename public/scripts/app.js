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
        $("#appren-data").append(
          `<tr><form id="${apprenData[i]._id}_apprenticeshipEditForm">
             <td>
              <div id="${apprenData[i]._id}_company">${apprenData[i].company}</div>
             </td>
             <td>
              <div id="${apprenData[i]._id}_location">${apprenData[i].location}</div>
             </td> 
             <td>
              <div id="${apprenData[i]._id}_link">${apprenData[i].link}</div>
             </td> 
             <td>
              <div id="${apprenData[i]._id}_description">${apprenData[i].description}</div>
             </td>
             <td>
              <button id="${apprenData[i]._id}" type="submit" class="btn btn-default editApprenticeship">Edit</button>
             </td>
          </form></tr>`);
      }        
      $(".editApprenticeship").click(function(e){
        e.preventDefault();
        let button = $("#" + e.target.id);
        if (button.text() === "Save") {
          button.submit();
        // button is edit button 
        } else {
          button.html(`Save`);  // so that I can save it once I am done editing
          
          let company = $("#" + e.target.id + "_company");
          company.html(`<input type="text" name="company" value="${company.text()}"/>`);

          let location = $("#" + e.target.id + "_location");
          location.html(`<input type="text" name="location" value="${location.text()}"/>`);

          let link = $("#" + e.target.id + "_link");
          link.html(`<input type="text" name="link" value="${link.text()}"/>`);

          let description = $("#" + e.target.id + "_description");
          description.html(`<input type="text" name="description" value="${description.text()}"/>`);
        
          let form = $("#" + e.target.id + "_apprenticeshipEditForm");
          form.on('submit', function(e) {
            e.preventDefault();
            // toggle button back to edit for next time around
            button.html(`Edit`);
            console.log('new apprenticeship serialized', $(this).serializeArray());
            $.ajax({ // use PUT for editing
              method: 'PUT',
              // tell db exactly which one I am updating e-target of its id
              url: '/api/apprenticeships/'+ e.target.id,
              // this points to form
              data: $(this).serializeArray(),
              success: function() {
                company.html($(this).company);
                location.html($(this).location);
                link.html($(this).link);
                description.html($(this).description);
                newApprenticeshipSuccess();
              },
              error: newApprenticeshipError,
            });
          });
        }
      });
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
