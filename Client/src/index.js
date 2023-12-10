const express = require('express');
const app = express();
const path = require('path');
const script = express();
script.use(express.static('F:\\Projects\\PI LIFE\\Client\\src\\Main'))
//Pages 
const ToDoFile = (`F:\\Projects\\PI LIFE\\Client\\view\\todo.ejs`);
const ProfileFile = (`F:\\Projects\\PI LIFE\\Client\\public\\profile.html`);
const NoteFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Notes.html`);
const NoteListFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Note-list.html`);
const CalendarFile = (`F:\\Projects\\PI LIFE\\Client\\public\\Calendar.html`);
const NotFileFound = (`F:\\Projects\\PI LIFE\\Client\\public\\NotFound.html`);
app.use(express.static('F:\\Projects\\PI LIFE\\Client'));
async function GetData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return false;
    }
}
app.get(('/todo'), async (req, res) => {
    const apiUrl = "http://localhost:5000/getToDo";
    const data = await GetData(apiUrl);
    if (data != false) {
        res.render(ToDoFile, { data });
    } else {
        res.sendFile(NotFileFound);
    }
});
app.get('', (req, res) => {
    res.sendFile(ProfileFile);
});
app.get('/calendar', (req, res) => {
    res.sendFile(CalendarFile);
});
app.get('/Note', (req, res) => {
    res.sendFile(NoteFile);
});
app.get('/NoteList', (req, res) => {
    res.sendFile(NoteListFile);
});
app.get('*', (req, res) => {
    res.sendFile(NotFileFound);
});
app.listen(5500);