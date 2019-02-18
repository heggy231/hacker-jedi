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
const User = require('./models/user');
const Apprenticeship = require('./models/apprenticeship');



/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.get('/', (req, res ) => {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/apprenticeships', (req, res ) => {
  Apprenticeship.find({}, (err, apprenticeships) => {
    if (err) {
        return console.log(err);
    }
    res.json(apprenticeships);
  });
});

app.get('/api/apprenticeships/:id', (req, res ) => {
  let id = req.params.id;
  Apprenticeship.findById(id, function (err, apprenticeship) {
    res.json(apprenticeship); 
  });
});

app.post('/api/apprenticeships/', (req, res ) => {
  res.status = 200;

  let newUser = {
    name: req.body.name,
    email: req.body.email,
    user_created: ''
  }

  User.create(newUser, (err, userCreated)=> {
    if (err) {
      return console.log(err);
    }

   userCreated.save((err, newUser)=>{

      if (err){

        return console.log(err);

       }

      let apprenticeship = {
        company: req.body.company,
        url: req.body.url,
        description: req.body.description
       }
  
      apprenticeship['user_created'] = userCreated._id;

      Apprenticeship.create(apprenticeship, (err, newAppr) => { 
                       
        newAppr.save((err)=>{

          if (err) {

             return console.log(err);

          } else {
            res.json(newAppr);
          }
        });
      });
   });
  });
});

 



app.put('/api/apprenticeships/:id', (req, res ) => {
   
  Apprenticeship.findOneAndUpdate({_id: req.params.id})

  .populate('user_created')

  .exec((err, apprenticeship)=>{
     apprenticeship.user_created.email = req.body.email;
     apprenticeship.city = req.body.city;
     apprenticeship.description = req.body.description;
     res.json(apprenticeship);
  })
});


app.delete('/api/apprenticeships/:id', (req, res ) => {
  Apprenticeship.findOneAndDelete({_id: req.params.id},(err, deletedApprenticeship)=>{
    res.json(deletedApprenticeship);
  })
});



app.listen(process.env.PORT || 3000, ()=> {
  console.log('listening on port 3000');
})
