
const db = require('./models');
const User = require('./models/user');
const Apprenticeship = require('./models/apprenticeship');


const apprenticeship1 =  {company: 'Atomic', city: 'SF', description: 'xyz'};

const apprenticeship2 =  {company: 'Clique', city: 'Boston', description: 'xyz'};

const apprenticeship3 =  {company: 'Detroit Labs', city: 'NYC', description: 'xyz'};

let apprenticeships =  [ apprenticeship1, apprenticeship2, apprenticeship3 ];
// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
/*
Need to add data from here: https://github.com/heggy231/apprenticeships

let db = require('./models');

let books_list = [
  {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  releaseDate: "July 11, 1960"
  },
  {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
  releaseDate: "April 10, 1925"
  },
  {
  title: "Les Miserables",
  author: "Victor Hugo",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
  releaseDate: "Unknown 1862"
  },
  {
  title: "Around the World in 80 Days",
  author: "Jules Verne",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
  releaseDate: "January 30, 1873"
  },
  {
  title: "Lean In",
  author: "Sheryl Sandberg",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
  releaseDate: "March 11, 2013"
  },
  {
  title: "The Four Hour Workweek",
  author: "Tim Ferriss",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
  releaseDate: "April 1, 2007"
  },
  {
  title: "Of Mice and Men",
  author: "John Steinbeck",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
  releaseDate: "Unknown 1937"
  },
  {
  title: "Romeo and Juliet",
  author: "William Shakespeare",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
  releaseDate: "Unknown 1597"
  }
];

let authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];

*/

for(let i = 0; i <  apprenticeships.length; i++) {
    let apprenticeship = apprenticeships[i];
    let newUser = {name: 'chike' + i, 
                   company: 'GA', 
                   url:'', 
                   description: '',
                   user_created: ''};

    User.create(newUser, (err, userCreated)=> {
         if (err) {
           return console.log(err);
         }

        apprenticeship['user_created'] = userCreated._id;

        userCreated.save((err, newUser)=>{

            if (err){

                return console.log(err);
            }
            Apprenticeship.create(apprenticeship, (err, newAppr) => { 
                            
                newAppr.save((err)=>{

                    if (err) {

                        return console.log(err);

                    }
                });
            });
        });
    });
}


Apprenticeship.find({}, (err, apprenticeships) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(apprenticeships, 'Apprenticeships Saved!!!!!!');
});

console.log('*');

// [] Heggy todo: add data inside here:

