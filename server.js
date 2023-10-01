// Setup empty JS object to act as endpoint for all routes
projectData={};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/*Dependencies*/
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3001;
/* Spin up the server*/
const server = app.listen(port, listening);

//Callback to debug
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

//post route
app.post('/add', addShaima);

function addShaima(req,res){
 projectData['date']= req.body.date;
 projectData['temp']= req.body.temp;
 projectData['content']= req.body.content;
  
  res.send(projectData);
  console.log(projectData);
}

// respond with projectData when a GET request is made to the homepage
//create a GET route that uses the url /all and returns the JavaScript object named projectData.

app.get('/all', getShaima)//replace this text with route, addData);
function getShaima(req,res){
  res.send(projectData);
  console.log(projectData);
}







