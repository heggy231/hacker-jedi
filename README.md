# <img src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fmentoring.png?1550795116467" width="50"> Hacker Jedi

* Goal: Hacker Jedi app helps non-traditional software engineers get their foot in the door.  User can search community run database and create, edit, delete apprenticeships.*

<!-- new heroku using Siri's  -->
[Heroku Demo](https://dry-garden-46076.herokuapp.com/)

## Technologies Used

- JavaScript(ES6)
- jQuery
- JSON
- HTML5
- CSS3
- ExpressJS
- MongoDB
- AJAX
- Node.js
- Flexbox
- RESTFUL API
- Heroku
- Responsive Design
- Authentication: Google OAuth
- ERDs (Referenced Data)
- Wireframing
- Agile Development/Srum/Sprints

## Existing Features

- Documented API Endpoints (`/api` describes all the available endpoints)
<img src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-02-21%20at%205.17.26%20PM.png?1550798288530" width="70%">
- User can securely login via Google OAuth
<img src="https://media.giphy.com/media/2Y8IM2jz218v1IkqN3/giphy.gif" alt="search" width="70%">
- User can create a new apprenticeship
- User can edit a new apprenticeship
- User can view only the apprenticeship that they added to Hacker-Jedi site
- User can securely logout via Google OAuth
- User can search for apprenticeship
- User can add only after login
<img src="https://media.giphy.com/media/YUUk7GzJb3Yf0tzPzA/giphy.gif" alt="secure add page" width="70%">

## Planned Features

- Put reminder to apply on ADD to google calendar|iCal button
- Add apprenticeship durations
- Search using MongoDB $regex 
<img src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-02-22%20at%2012.10.16%20PM.png?1550866430398" alt="regex" width="70%">
- Create a restful api routes and examples like giphy documentation:[Giphy search documentation](https://developers.giphy.com/docs/)
- [Hacker Jedi Endpoint](https://dry-garden-46076.herokuapp.com/api/add)  
<details><summary>click for all hacker jedi data you could use</summary>

```js
// 20190307103907
// https://dry-garden-46076.herokuapp.com/api/add

[
  {
    "_id": "5c704ee7793ead000c74e2bb",
    "company": "DevMynd",
    "url": "https://www.devmynd.com/culture/careers/",
    "city": "Chicago, IL,San Francisco, CA",
    "description": "DevMynd is a software development and user experience consultancy with a passion for crafting quality solutions.",
    "user_created": "5c704ee7793ead000c74e2ad",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2bc",
    "company": "IFTTT",
    "url": "https://ifttt.com/apprenticeship",
    "city": "San Francisco, CA",
    "description": "If This Then That, also known as IFTTT, is a free web-based service to connect all your apps and devices into one \"applet\".",
    "user_created": "5c704ee7793ead000c74e2ac",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2bd",
    "company": "Dropbox IGNITE",
    "url": "https://www.dropbox.com/jobs/all-jobs",
    "city": "San Francisco, CA",
    "description": "Dropbox IGNITE is an apprenticeship program geared towards professionals with non-traditional software engineering backgrounds who are looking to start or re-start their professional career.",
    "user_created": "5c704ee7793ead000c74e2ae",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2ba",
    "company": "Pinterest",
    "url": "https://careers.pinterest.com/careers/",
    "city": "San Francisco, CA",
    "description": "Pinterest's apprentice program focuses on hiring engineers from non-traditional backgrounds who are comfortable with basic programming principles.",
    "user_created": "5c704ee7793ead000c74e2ab",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c2",
    "company": "Apprenti",
    "url": "https://apprenticareers.org/",
    "city": "Seattle, WA,Detroit, MI,Bend, OR,Eugene, OR,Columbus, OH,Herndon, VA",
    "description": "Apprenti provides a proven, reliable pipeline for underrepresented groups such as minorities, women, and veterans to gain training, certification, and placement within the talent-hungry tech industry.",
    "user_created": "5c704ee7793ead000c74e2b3",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c1",
    "company": "Twilio Hatch",
    "url": "https://www.twilio.com/company/jobs",
    "city": "San Francisco, CA",
    "description": "The apprenticeship, known as Hatch, is a six-month program which aims to equip individuals having non-traditional technical backgrounds with industry experience in designing, developing, and delivering production-ready software systems.",
    "user_created": "5c704ee7793ead000c74e2b1",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2bf",
    "company": "Adobe Digital Academy",
    "url": "http://www.adobe.com/corporate-responsibility/education/digital-academy.html",
    "city": "San Francisco, CA,Salt Lake City, UT",
    "description": "Adobe Digital Academy offers nontraditional candidates the education and, contingent upon technical performance, the experience they need to launch successful careers in web development.",
    "user_created": "5c704ee7793ead000c74e2af",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c0",
    "company": "LaunchCode",
    "url": "https://www.launchcode.org/",
    "city": "St. Louis, MO",
    "description": "LaunchCode is a non-profit organization that works with hundreds of companies to set up paid apprenticeships in technology for talented people who lack traditional credentials.",
    "user_created": "5c704ee7793ead000c74e2b4",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2be",
    "company": "Techtonica",
    "url": "https://techtonica.org/",
    "city": "San Francisco, CA",
    "description": "Techtonica offers six-month tech apprenticeships with living stipends and laptops to women and non-binary adults with low incomes, then place graduates with sponsor companies for at least three months of full-time work.",
    "user_created": "5c704ee7793ead000c74e2b0",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c3",
    "company": "Ada Developers Academy",
    "url": "https://www.adadevelopersacademy.org/",
    "city": "Seattle, WA",
    "description": "Ada Developers Academy is a training program for women and gender diverse people who want to become software developers.",
    "user_created": "5c704ee7793ead000c74e2b2",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c4",
    "company": "IQ Foundry",
    "url": "http://www.iqfoundry.com/careers",
    "city": "Madison, WI",
    "description": "IQ Foundry is a marketing agency that designs and develops digital media including custom apps and feature-rich websites.",
    "user_created": "5c704ee7793ead000c74e2b5",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c5",
    "company": "Stack Overflow",
    "url": "https://boards.greenhouse.io/stackapprentice",
    "city": "New York, NY",
    "description": "Stack Overflow's Web Developer Apprentice is an 11-week apprenticeship program where you'll work directly alongside a developer mentor on a real product team. Rather than doing independent 'intern' projects that may not ever ship, as an apprentice you'll work with your mentor to learn, review, debug, and ship features to real users. You'll also work collaboratively with other members of the team, including other developers, designers, and product managers.",
    "user_created": "5c704ee7793ead000c74e2b6",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c6",
    "company": "Intrepid Pursuits",
    "url": "http://info.intrepid.io/apprentice",
    "city": "Cambridge, MA,New York, NY",
    "description": "Intrepid’s Apprentice Program is an immersive, full-time 12-week training program that spans several disciplines: Project Management, Experience Design, iOS, Android and Web development.",
    "user_created": "5c704ee7793ead000c74e2b8",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c7",
    "company": "Social Tables",
    "url": "https://socialtables.com",
    "city": "Washington, DC",
    "description": "Social Tables is a global SaaS company offering a 3-month paid program targeting new developers without on the job work experience with the potential of a full-time offer to join the engineering team.",
    "user_created": "5c704ee7793ead000c74e2b9",
    "__v": 0
  },
  {
    "_id": "5c704ee7793ead000c74e2c8",
    "company": "Spotify",
    "url": "https://ttp.nyc/spotifyfellowship/",
    "city": "New York, NY",
    "description": "The Spotify NYC Technology Fellowship is aimed at helping engineers just starting their careers in tech and provides an opportunity to work within a team and build upon current skills.",
    "user_created": "5c704ee7793ead000c74e2b7",
    "__v": 0
  }
]
```
</details>
- UI: show card like box for each apprenticeships
- Move logic JavaScript to Script folder
---





