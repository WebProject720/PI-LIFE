const express = require("express");
const cors = require('cors');
const path = require('path');
let app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace * with your specific domain if needed
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const config = require("./config");
//Connect Database
const DB_connect = require('./DBconnect');
DB_connect();
//ToDo  APIs
const ToDo = require(path.join(__dirname, '/API/todo.js'));
ToDo(app);

//Calendar APIs
// const Calendar = require(path.join(__dirname, '/API/calendar.js'));
// Calendar(app);
//Server Running at port 5000
app.listen(config.port,(e)=>{
    console.log("Server is running on : ",`http://localhost:${config.port}`)
});
