
const db = require('./models');
const User = require('./models/user');
const Apprenticeship = require('./models/apprenticeship');


let description = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
let contact = 'contact@contact.com';
let url = 'www.apprenticeship.com';

const apprenticeship1 =  {company: 'Atomic', city: 'san francisco', description: description, url: url};

const apprenticeship2 =  {company: 'Clique', city: 'boston', description: description, url: url};

const apprenticeship3 =  {company: 'Detroit Labs', city: 'miami', description: description, url: url};

const apprenticeships =  [ apprenticeship1, apprenticeship2, apprenticeship3 ];

// **** only run for loop when want to insert data

// for(let i = 0; i <  apprenticeships.length; i++) {
//     let apprenticeship = apprenticeships[i];
//     let newUser = {name: 'chike' + i, 
//                    email: 'contact@contact.com',
//                    user_created: ''};

//     User.create(newUser, (err, userCreated)=> {
//          if (err) {
//            return console.log(err);
//          }

//         apprenticeship['user_created'] = userCreated._id;

//         userCreated.save((err, newUser)=>{

//             if (err){

//                 return console.log(err);
//             }
//             Apprenticeship.create(apprenticeship, (err, newAppr) => { 
                            
//                 newAppr.save((err)=>{

//                     if (err) {

//                         return console.log(err);

//                     }
//                 });
//             });
//         });
//     });
// }


Apprenticeship.find({}, (err, apprenticeships) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(apprenticeships, 'Apprenticeships Saved!!!!!!');
});

console.log('*');

// [] Heggy todo: add data inside here:

