// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/add', function addPage(req, res) {
    res.sendFile(__dirname + '/views/add.html');
  });


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // all api endpoints are in the json object below

  res.json({
    appTitle: "HackerJedi!",
    appContributors: "Chike, Siri, and Heggy",
    message: "this documents all api endpoints!",
    GitHubLink: "CHANGE THIS", // CHANGE ME
    HerokuLink: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/profile", despcription: "View your user profile here" },
      {method: "GET", path: "/api/add", despcription: "Add a new opportunity here. View, edit, & delete the one's you've added" },
      {method: "POST", path: "/api/add", description: "Create new apprenticeship/opportunity"},
      {method: "PUT", path: "/api/add/:id", description: "Edit an apprenticeship and update it"},
      {method: "DELETE", path: "/api/add/:id", description: "Delete an apprenticeship that's no longer available/relevant"},
      {method: "GET", path: "/api/opportunities", despcription: "View all opportunities for breaking into tech here!"}
      //for later: search through opportunities
      //maybe we can add algolia.com's search bar plugin
      //or create our own search queries.
    ]
  })
});

app.get('/profile', (req, res) => {

    db.User.find({}, function (err, user) {
        if (err) {
          console.log("error: " + err);
        }
        res.json(user);
      });
      //want to display user info here after user logs in
})


app.get('/api/add', (req, res) => {
    db.Apprenticeship.find({}, function (err, apprenticeship) {
        if (err) {
          console.log("error: " + err);
        }
        res.json(apprenticeship);
      });
})



app.post('/api/add', (req, res) => {
    //create new selfcare item
    let newAppr = new db.Apprenticeship({
      //this gets from the form on index.html ... how to get from a form on another page?
      company: req.body.company,
      city: req.body.city,
      url: req.body.url,
      description: req.body.description,
   //userCreated?
    });
      newAppr.save(function(err, apprenticeship){
          if (err) {
            console.log("error: " + err);
          }
          console.log("created " + newAppr);
          res.json(newAppr);
        });
  })

  app.put('/api/add/:id', function(req,res){
    console.log('updated apprenticeships: ', req.params);
    db.Apprenticeship.findOneAndUpdate(
      { _id: req.params.id},
      req.body,
      {new: true},
      (err, updatedAppr) => {
      if (err) {
        console.log("the error is " + err);
      }
      res.json(updatedAppr);
    });
  });





app.delete('/api/add/:id', function (req, res) {
    console.log('deleted selfcare is ', req.params);
   db.Apprenticeship.findOneAndDelete
    ( {_id: req.params.id}, 
    (err, deletedApprenticeship) => {
      if (err) {
        console.log("the error is " + err);
      }
       res.json(deletedApprenticeship);
     });
  })
  



app.listen(process.env.PORT || 3000, ()=> {
  console.log('listening on port 3000');
});
