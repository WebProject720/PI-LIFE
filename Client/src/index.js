const express = require('express');
const app = express();
const script = express();
script.use(express.static('F:\\Projects\\PI LIFE\\Client\\src\\Main'));
//Pages 
const ToDoFile = (`F:\\Projects\\PI LIFE\\Client\\view\\todo.ejs`);
const ProfileFile = (`F:\\Projects\\PI LIFE\\Client\\view\\profile.ejs`);
const NoteFile = (`F:\\Projects\\PI LIFE\\Client\\view\\Notes.ejs`);
const NoteListFile = (`F:\\Projects\\PI LIFE\\Client\\view\\Note-list.ejs`);
const CalendarFile = (`F:\\Projects\\PI LIFE\\Client\\view\\Calendar.ejs`);
const NotFileFound = (`F:\\Projects\\PI LIFE\\Client\\view\\NotFound.ejs`);
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
    res.render(ToDoFile, { data });
});
app.get('', (req, res) => {
    res.render(ProfileFile);
});
app.get('/calendar', (req, res) => {
    res.render(CalendarFile);
});
app.get('/Note', (req, res) => {
    res.render(NoteFile);
});
app.get('/NoteList', (req, res) => {
    res.render(NoteListFile);
});
app.get('*', (req, res) => {
    res.render(NotFileFound);
});
app.listen(5500);