
const db = require('./models');
const User = require('./models/user');

let apprenticeship_list = [
  {
    company: "Pinterest",
    link: "https://careers.pinterest.com/careers/",
    location: "San Francisco, CA",
    description: "Pinterest's apprentice program focuses on hiring engineers from non-traditional backgrounds who are comfortable with basic programming principles.",
  },
  {
    company: "IFTTT",
    link: "https://ifttt.com/apprenticeship",
    location: "San Francisco, CA",
    description: 'If This Then That, also known as IFTTT, is a free web-based service to connect all your apps and devices into one "applet".',
  },
  {
    company: "DevMynd",
    link: "https://www.devmynd.com/culture/careers/",
    location: ["Chicago, IL", "San Francisco, CA"],
    description: "DevMynd is a software development and user experience consultancy with a passion for crafting quality solutions.",
  },
  {
    company: "Dropbox IGNITE",
    link: "https://www.dropbox.com/jobs/all-jobs",
    location: "San Francisco, CA",
    description: "Dropbox IGNITE is an apprenticeship program geared towards professionals with non-traditional software engineering backgrounds who are looking to start or re-start their professional career.",
  },
  {
    company: "Adobe Digital Academy",
    link: "http://www.adobe.com/corporate-responsibility/education/digital-academy.html",
    location: ["San Francisco, CA", "Salt Lake City, UT"],
    description: "Adobe Digital Academy offers nontraditional candidates the education and, contingent upon technical performance, the experience they need to launch successful careers in web development.",
  },
  {
    company: "Techtonica",
    link: "https://techtonica.org/",
    location: "San Francisco, CA",
    description: "Techtonica offers six-month tech apprenticeships with living stipends and laptops to women and non-binary adults with low incomes, then place graduates with sponsor companies for at least three months of full-time work.",
  },
  {
    company: "Twilio Hatch",
    link: "https://www.twilio.com/company/jobs",
    location: "San Francisco, CA",
    description: "The apprenticeship, known as Hatch, is a six-month program which aims to equip individuals having non-traditional technical backgrounds with industry experience in designing, developing, and delivering production-ready software systems.",
  },
  {
    company: "Ada Developers Academy",
    link: "https://www.adadevelopersacademy.org/",
    location: "Seattle, WA",
    description: "Ada Developers Academy is a training program for women and gender diverse people who want to become software developers.",
  },
  {
    company: "Apprenti",
    link: "https://apprenticareers.org/",
    location: ["Seattle, WA", "Detroit, MI", "Bend, OR", "Eugene, OR", "Columbus, OH", "Herndon, VA"],
    description: "Apprenti provides a proven, reliable pipeline for underrepresented groups such as minorities, women, and veterans to gain training, certification, and placement within the talent-hungry tech industry.",
  },
  {
    company: "LaunchCode",
    link: "https://www.launchcode.org/",
    location: "St. Louis, MO",
    description: "LaunchCode is a non-profit organization that works with hundreds of companies to set up paid apprenticeships in technology for talented people who lack traditional credentials.",
  },
  {
    company: "IQ Foundry",
    link: "http://www.iqfoundry.com/careers",
    location: "Madison, WI",
    description: "IQ Foundry is a marketing agency that designs and develops digital media including custom apps and feature-rich websites.",
  },
  {
    company: "Stack Overflow",
    link: "https://boards.greenhouse.io/stackapprentice",
    location: "New York, NY",
    description: "Stack Overflow's Web Developer Apprentice is an 11-week apprenticeship program where you'll work directly alongside a developer mentor on a real product team. Rather than doing independent 'intern' projects that may not ever ship, as an apprentice you'll work with your mentor to learn, review, debug, and ship features to real users. You'll also work collaboratively with other members of the team, including other developers, designers, and product managers.",
  },
  {
    company: "Spotify",
    link: "https://ttp.nyc/spotifyfellowship/",
    location: "New York, NY",
    description: "The Spotify NYC Technology Fellowship is aimed at helping engineers just starting their careers in tech and provides an opportunity to work within a team and build upon current skills.",
  },
  {
    company: "Intrepid Pursuits",
    link: "http://info.intrepid.io/apprentice",
    location: ["Cambridge, MA", "New York, NY"],
    description: "Intrepid’s Apprentice Program is an immersive, full-time 12-week training program that spans several disciplines: Project Management, Experience Design, iOS, Android and Web development.",
  },
  {
    company: "Social Tables",
    link: "https://socialtables.com",
    location: "Washington, DC",
    description: "Social Tables is a global SaaS company offering a 3-month paid program targeting new developers without on the job work experience with the potential of a full-time offer to join the engineering team.",
  },
];



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

