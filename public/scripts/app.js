let client_id = '462656938782-hsf9hb9jmqha8p88d335dp0vetuoph1i.apps.googleusercontent.com';
let client_secret = 'AXmqYzeGC5Fv5c1AzYl2tyb-';

let log = document.getElementsByClassName('login');

if (log[0].innerText === "Logout") {
    let user = document.getElementsByClassName('user-status');
    user[0].style.display = "block";
}

// let description = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
// let contact = 'contact@contact.com';
// let url = 'www.apprenticeship.com';

// const apprenticeship1 =  {company: 'Atomic', city: 'san francisco', description: description, email: contact, url: url};

// const apprenticeship2 =  {company: 'Clique', city: 'boston', description: description, email: contact, url: url};

// const apprenticeship3 =  {company: 'Detroit Labs', city: 'miami', description: description, email: contact, url: url};

// const apprenticeships =  [ apprenticeship1, apprenticeship2, apprenticeship3 ];

// let apprenticeship = document.getElementsByClassName("apprenticeship")[0].outerHTML;

let submit = document.getElementsByClassName("submit-button")[0];


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('nbhjfbjfgnjnf');

    let data = ``;
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/api/apprenticeships",
            success: (data) => {

                let entries = ``;
                data.items.forEach((app, index) =>{
                    let entry = `<div class="apprenticeship">
                                <div class="first-row">
                                    <div class="apprenticeship-name"> ${app.company} <br> 
                                    
                                </div>

                                </div>

                                <div class="second-row">
                                    <div class="app_email"> ${app.url}</div>
                                    <div class="city-contact">
                                    <p class="city"> ${app.city} </p> | <p class="contact"> ${app.email} </p> 
                                </div>

                                </div>

                                <div class="third-row">
                                    <p> 
                                    ${app.description}
                                    </p>
                                </div>
                            </div>`
                entries += entry;

                $('.apprenticeship-container').append(entries);
        
                })
            },
            error: () =>{

            }
          })
    
}) 





// let form = document.getElementsByClassName("form-container")[0];


// if (window.location.href.includes("editadd")) {
//     console.log(window.location.search, "yyyyyyyyy");
// }

// if (window.location.href.includes("addapp")) {
    
//     let companyAndUrl = document.getElementsByClassName("apprenticeship-name")[0].innerText;
//     let url = document.getElementsByClassName("app_email")[0].innerText;
//     let email = document.getElementsByClassName("contact")[0].innerText;
//     let place = document.getElementsByClassName("city")[0].innerText;
//     let description = document.getElementsByClassName("paragraph")[0].innerText;

//     console.log(companyAndUrl, email, place, description);

//     $(".edit").click ((e) => {
//         e.preventDefault();
//     //    location.href = `./editadd.html?companyAndUrl=${companyAndUrl}&email=${email}&place=${place}&description=${description}`;
//        location.href = "./editadd.html?companyAndUrl" + companyAndUrl + "&email=" + email + "&place=" + place + "&description=" + description;
//     });

// }





