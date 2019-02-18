
const db = require('./models');
const User = require('./models/user');

let apprenticeship_list = [
  {
    company: "Pinterest",
    link: "https://careers.pinterest.com/careers/",
    location: "San Francisco, CA",
    description: "Pinterest's apprentice program focuses on hiring engineers from non-traditional backgrounds who are comfortable with basic programming principles.",
    user_created: "siri.alay1@gmail.com",
  },
  {
    company: "IFTTT",
    link: "https://ifttt.com/apprenticeship",
    location: "San Francisco, CA",
    description: 'If This Then That, also known as IFTTT, is a free web-based service to connect all your apps and devices into one "applet".',
    user_created: "siri.alay1@gmail.com",
  },
  {
    company: "DevMynd",
    link: "https://www.devmynd.com/culture/careers/",
    location: ["Chicago, IL", "San Francisco, CA"],
    description: "DevMynd is a software development and user experience consultancy with a passion for crafting quality solutions.",
    user_created: "siri.alay1@gmail.com",
  },
  {
    company: "Dropbox IGNITE",
    link: "https://www.dropbox.com/jobs/all-jobs",
    location: "San Francisco, CA",
    description: "Dropbox IGNITE is an apprenticeship program geared towards professionals with non-traditional software engineering backgrounds who are looking to start or re-start their professional career.",
    user_created: "heggyy@gmail.com",
  },
  {
    company: "Adobe Digital Academy",
    link: "http://www.adobe.com/corporate-responsibility/education/digital-academy.html",
    location: ["San Francisco, CA", "Salt Lake City, UT"],
    description: "Adobe Digital Academy offers nontraditional candidates the education and, contingent upon technical performance, the experience they need to launch successful careers in web development.",
    user_created: "heggyy@gmail.com",
  },
  {
    company: "Techtonica",
    link: "https://techtonica.org/",
    location: "San Francisco, CA",
    description: "Techtonica offers six-month tech apprenticeships with living stipends and laptops to women and non-binary adults with low incomes, then place graduates with sponsor companies for at least three months of full-time work.",
    user_created: "heggyy@gmail.com",
  },
  {
    company: "Twilio Hatch",
    link: "https://www.twilio.com/company/jobs",
    location: "San Francisco, CA",
    description: "The apprenticeship, known as Hatch, is a six-month program which aims to equip individuals having non-traditional technical backgrounds with industry experience in designing, developing, and delivering production-ready software systems.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "Ada Developers Academy",
    link: "https://www.adadevelopersacademy.org/",
    location: "Seattle, WA",
    description: "Ada Developers Academy is a training program for women and gender diverse people who want to become software developers.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "Apprenti",
    link: "https://apprenticareers.org/",
    location: ["Seattle, WA", "Detroit, MI", "Bend, OR", "Eugene, OR", "Columbus, OH", "Herndon, VA"],
    description: "Apprenti provides a proven, reliable pipeline for underrepresented groups such as minorities, women, and veterans to gain training, certification, and placement within the talent-hungry tech industry.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "LaunchCode",
    link: "https://www.launchcode.org/",
    location: "St. Louis, MO",
    description: "LaunchCode is a non-profit organization that works with hundreds of companies to set up paid apprenticeships in technology for talented people who lack traditional credentials.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "IQ Foundry",
    link: "http://www.iqfoundry.com/careers",
    location: "Madison, WI",
    description: "IQ Foundry is a marketing agency that designs and develops digital media including custom apps and feature-rich websites.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "Stack Overflow",
    link: "https://boards.greenhouse.io/stackapprentice",
    location: "New York, NY",
    description: "Stack Overflow's Web Developer Apprentice is an 11-week apprenticeship program where you'll work directly alongside a developer mentor on a real product team. Rather than doing independent 'intern' projects that may not ever ship, as an apprentice you'll work with your mentor to learn, review, debug, and ship features to real users. You'll also work collaboratively with other members of the team, including other developers, designers, and product managers.",
    user_created: "siri.alay1@gmail.com",
  },
  {
    company: "Spotify",
    link: "https://ttp.nyc/spotifyfellowship/",
    location: "New York, NY",
    description: "The Spotify NYC Technology Fellowship is aimed at helping engineers just starting their careers in tech and provides an opportunity to work within a team and build upon current skills.",
    user_created: "siri.alay1@gmail.com",
  },
  {
    company: "Intrepid Pursuits",
    link: "http://info.intrepid.io/apprentice",
    location: ["Cambridge, MA", "New York, NY"],
    description: "Intrepid’s Apprentice Program is an immersive, full-time 12-week training program that spans several disciplines: Project Management, Experience Design, iOS, Android and Web development.",
    user_created: "chike.onuorah@gmail.com",
  },
  {
    company: "Social Tables",
    link: "https://socialtables.com",
    location: "Washington, DC",
    description: "Social Tables is a global SaaS company offering a 3-month paid program targeting new developers without on the job work experience with the potential of a full-time offer to join the engineering team.",
    user_created: "chike.onuorah@gmail.com",
  },
];

let users_list = [
  {
    name: "Siri Alay",
    email: "siri.alay1@gmail.com",
  },
  {
    name: "Heggy Castaneda",
    email: "heggyy@gmail.com",
  },
  {
    name: "Chike Onuorah",
    email: "chike.onuorah@gmail.com",
  },
];

const Apprenticeship = require('./models/apprenticeship');

for(let i = 0; i <  apprenticeship_list.length; i++) {
    let apprenticeship = apprenticeship_list[i];
    // how to connect existing user to existing apprent?
    let user = {};
    for (let j = 0; j < users_list.length; j++) {
      // if user email on apprenticship is equal to user_list email
      if (apprenticeship.user_created === users_list[j].email) {
        user = users_list[j];
        // connect them 
      }
    }
    // check if user db entry already exist
    if (user.hasOwnProperty("id")){
      apprenticeship['user_created'] = user.id;
      Apprenticeship.create(apprenticeship, (err, newAppr) => {
        if (err) {
          return console.log(err);
        }
        newAppr.save((err)=>{
            if (err) {
                return console.log(err);
            }
        });
      });
    } else {
      // creating db entry for user
      User.create(user, (err, userCreated)=> {
        if (err) {
          return console.log(err);
        }
        // set ref id (remote key) for apprenticeship link to user
        apprenticeship['user_created'] = userCreated._id;
        // add the db id to the user obj
        user["id"] = userCreated._id;
        // save into db (anytime you make changes you have to save)
        userCreated.save((err, newUser)=> {
          if (err){
              return console.log(err);
          }
          // once User db is created Appreship db gets created
          Apprenticeship.create(apprenticeship, (err, newAppr) => {
            if (err) {
              return console.log(err);
            }
            newAppr.save((err)=>{
                if (err) {
                    return console.log(err);
                }
            });
          });
        });
      });
    }
}

