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

app.get('/profile', function addPage(req, res) {
  res.sendFile(__dirname + '/views/profile.html');
});

// when user clicks submit button redict to profile page
app.get('/profile', function addPage(req, res) {
  res.redirect(__dirname + '/views/profile.html');
});

// get request finding a one user
app.get('/api/get')

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

app.get('/user', (req, res) => {
    db.User.find({}, function (err, user) {
        if (err) {
          console.log("error: " + err);
        }
        res.json(user);
      });
      //want to display user info here after user logs in
})


app.delete('/user/:id', function (req, res) {
    console.log('deleted user ID is ', req.params);
   db.User.findOneAndDelete
    ( {_id: req.params.id},
    (err, deletedUser) => {
      if (err) {
        console.log("the error is " + err);
      }
       res.json(deletedUser);
     });
  })





app.get('/api/add', (req, res) => {
    db.Apprenticeship.find({}, function (err, apprenticeship) {
        if (err) {
          console.log("error: " + err);
        }
        res.json(apprenticeship);
      });
})


// app.post('/api/add', (req, res) => {
//     db.Apprenticeship(req.body).save(function(err, apprenticeship){
//           if (err) {
//             console.log("error: " + err);
//           }
//           console.log("created " + apprenticeship);
//           res.json(apprenticeship);
//         });
//   })


//   app.post('/profile/add', (req, res) => {
//     //create new selfcare item
//     let user = new db.User({
//       //this gets from the form on index.html ... how to get from a form on another page?
//       firstName: req.body.firstName,
//       city: req.body.city,
//       url: req.body.url,
//       description: req.body.description,
//    //userCreated?
//     });
//       newAppr.save(function(err, apprenticeship){
//           if (err) {
//             console.log("error: " + err);
//           }
//           console.log("created " + newAppr);
//           res.json(newAppr);
//         });
//   })



//     let  = {
//       name: req.body.name,
//       email: req.body.email,
//       user_created: ''
//     }




//Chike's

// app.post('/api/add', (req, res ) => {

//      let newUser = new db.User({
//           //this gets from the form on index.html ... how to get from a form on another page?
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//            email: req.body.email,
//           company: req.body.company,
//        //userCreated?
//         });

//     User.create(newUser, (err, userCreated)=> {
//       if (err) {
//         return console.log(err);
//       }

//      userCreated.save((err, newUser)=>{

//         if (err){

//           return console.log(err);

//          }

//         let apprenticeship = {
//           company: req.body.company,
//           url: req.body.url,
//           description: req.body.description,
//           city: req.body.city
//          }

//         apprenticeship['user_created'] = userCreated._id;

//         Apprenticeship.create(apprenticeship, (err, newAppr) => {

//           newAppr.save((err)=>{

//             if (err) {

//                return console.log(err);

//             } else {
//               res.json(newAppr);
//             }
//           });
//         });
//      });
//     });
//   });


//Heggy's
// Creat new apprenticeship
app.post('/api/add', (req, res) => {
    // create new apprenticeship with form data ('req.body')
    console.log("body is ", req.body);
    let newApprenticeship = new db.Apprenticeship({
      company: req.body.company,
      city: req.body.city,
      url: req.body.url,
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





app.put('/api/add/:id', function(req,res){
    // ^^^ get the id of the apprenticeship
    //need to also get the user id from the frontend (login)
    console.log('updated apprenticeships: ', req.params);
    db.Apprenticeship.findOneAndUpdate({ _id: req.params.id},req.body,{new: true})
      .populate('user_created')
      .exec( (err, apprenticeship) => {
      if (err) {
        console.log("the error is " + err);
      }
    //    apprenticeship.user_created.email = req.body.email;
    //    apprenticeship.company = requ.body.company;
    //    apprenticeship.url = requ.body.url;
    //    apprenticeship.city = req.body.city;
    //    apprenticeship.description = req.body.description;
      res.json(apprenticeship);
    });
  });




//   app.put('/api/add/:id', function(req,res){
//     console.log('updated apprenticeships: ', req.params);

//     db.Apprenticeship.findOneAndUpdate({ _id: req.params.id})

//     .populate('user_created')

//     .exec(err, apprenticeship) => {
//         if (err) {
//             console.log("the error is " + err);
//           }
//        apprenticeship.user_created.email = req.body.email;
//        apprenticeship.company = requ.body.company;
//        apprenticeship.url = requ.body.url;
//        apprenticeship.city = req.body.city;
//        apprenticeship.description = req.body.description;

//        res.json(apprenticeship);
//     }
//   });



app.delete('/api/add/:id', function (req, res) {
    console.log('deleted apprenticeship is ', req.params);
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
