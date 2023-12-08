const express = require("express");
let app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); 
const config = require("./config");
//pages at localhost
require('./pages');
//Connect Database
const DB_connect = require('./DBconnect');
DB_connect();
//APIs
const API=require('./API');
API(app);
//Server Running at port 5000
app.listen(config.port);
