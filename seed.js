
const db = require('./models');
const User = require('./models/user');
const Apprenticeship = require('./models/apprenticeship');


const apprenticeship1 =  {company: 'Atomic', city: 'SF', description: 'xyz'};

const apprenticeship2 =  {company: 'Clique', city: 'Boston', description: 'xyz'};

const apprenticeship3 =  {company: 'Detroit Labs', city: 'NYC', description: 'xyz'};

const apprenticeships =  [ apprenticeship1, apprenticeship2, apprenticeship3 ];

// for(let i = 0; i <  apprenticeships.length; i++) {
//     let apprenticeship = apprenticeships[i];
//     let newUser = {name: 'chike' + i, 
//                    company: 'GA', 
//                    url:'', 
//                    description: '',
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

