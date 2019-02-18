// server.js
// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

// require express in our app
const express = require('express');
const bodyParser = require('body-parser');

// generate a new express app and call it 'app'
let app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));


/************
 * DATABASE *
 ************/
// connect to db models
let db = require('./models');

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/**********
 * ROUTES *
 **********/
// define a root route: localhost:3000/
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile('views/index.html' , { root : __dirname});
});

// REST is in JSON format: JSON API EndPoints
app.get('/api', (req, res) => {
  res.json({
    message: "This is Hacker-Jedi api! More info in following readME file.",
    documentationUrl: "https://github.com/heggy231/hacker-jedi/blob/master/README.md",
    baseUrl: "https://evening-forest-40933.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Here is list all the api endpoints for hacker-jedi app"},
      {method: "GET", path: "/api/apprenticeships", description: "This lists all the apprenticeships."},
      // create new endpoint for post
      {method: "POST", path: "/api/apprenticeships", description: "This add a new apprenticeship."},
    ],
  });
});

// get all the list of apprenticeships
app.get('/api/apprenticeships', (req, res) => {
  console.log(db);
  
  db.Apprenticeship.find((err, foundApprenticeship) => {
    if (err) {console.log(err)}
    res.json(foundApprenticeship)
  });
  // testing 
  // res.json({
  //   test: "hello world",
  // });
})

// Creat new apprenticeship
app.post('/api/apprenticeships', (req, res) => {
  // create new apprenticeship with form data ('req.body')
  console.log("body is ", req.body);
  let newApprenticeship = new db.Apprenticeship({
    company: req.body.company,
    location: req.body.appLocation,
    link: req.body.appLink,
    description: req.body.description,
    user_created: null,
  });
  // find the user from req.body
  db.User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      return console.log(err);
    }
    // if that user doesn't exist yet, create a new one
    if (user === null) {
      db.User.create({name: req.body.user, email: req.body.email}, (err, newUser) => {
        if (err) {
          return console.log(err);
        }
        createApprenticeshipWithUser(newApprenticeship, newUser, res);
      });
    } else {
      createApprenticeshipWithUser(newApprenticeship, user, res);
    }
  }); 
  // save new Apprentice
}); 

// create Apprenticeship With new User function
function createApprenticeshipWithUser(apprenticeship, user, res) {
  // add this user to the apprenticeship
  apprenticeship.user_created = user;
  // save new apprenticeship to database
  apprenticeship.save(function(err, book) {
    if (err) { 
      return console.log("save error: " + err)
    }
    console.log("saved ", apprenticeship.company);
    // send back the apprenticeship
    res.json(apprenticeship);
  });
}

// edit Apprenticeship
app.put('/api/apprenticeships/:id', (req, res) => {
  // get apprenticeships id from url params (`req.params`)
  console.log("apprenticeships edit", req.params);
  console.log("body is ", req.body);
  let apprenticeshipId = req.params.id;
  // find the index of the apprenticeships we want to edit
  db.Apprenticeship.findOneAndUpdate({ _id: apprenticeshipId }, req.body, {new: true})
  .populate('user_created')
  .exec((err, updatedApprenticeship) => {
    if (err) {
      return console.log("update error: " + err);
    }
    res.json(updatedApprenticeship);
  });
});

// res.sendFile('views/index.html', { });

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.listen(process.env.PORT || 3000, ()=> {
  console.log('listening on port 3000');
});
