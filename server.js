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
app.get('/', (req, res) => {
  res.send('Hello World!');
  res.sendFile('views/index.html' , { root : __dirname});
});

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.listen(process.env.PORT || 3000, ()=> {
  console.log('listening on port 3000');
});
