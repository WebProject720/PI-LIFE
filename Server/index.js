const express = require("express");
const config = require("./config");
const app = express();
//Connect Database
const DB_connect = require('./DBconnect');
DB_connect();
//Pages 
const ToDoFile = (`F:\\Projects\\PI LIFE\\Client\\public\\ToDo.html`);
const ProfileFile = (`F:\\Projects\\PI LIFE\\Client\\public\\profile.html`);
const NoteFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Notes.html`);
const NoteListFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Note-list.html`);
const CalendarFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Calendar.html`);
const NotFileFound = (`F:\\Projects\\PI LIFE\\Client\\public\\NotFound.html`);
app.use(express.static('F:\\Projects\\PI LIFE\\Client'));
app.get(('/todo'), (req, res) => {
    res.sendFile(ToDoFile);
});
app.get('', (req, res) => {
    res.sendFile(ProfileFile);
});
app.get('/calendar',(req,res)=>{
    res.sendFile(CalendarFile);
});
app.get('/Note',(req,res)=>{
    res.sendFile(NoteFile);
});
app.get('/NoteList',(req,res)=>{
    res.sendFile(NoteListFile);
});
app.get('*',(req,res)=>{
    res.sendFile(NotFileFound);
});
app.listen(config.port);
