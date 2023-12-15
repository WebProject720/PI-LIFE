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
async function GetData(apiUrl, req) {
    try {
        const response = await fetch(apiUrl,req);
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
const URL = "http://localhost:5000";
app.get(('/todo'), async (req, res) => {
    const data = await GetData(URL + '/getToDo');
    res.render(ToDoFile, { data });
});
app.get('', (req, res) => {
    res.render(ProfileFile);
});
app.get('/calendar', async (req, res) => {
    const d = new Date();
    let request = {
        request: {
            month: d.getMonth(),
            year: d.getFullYear(),
            date: d.getDate()
        }
    }
    request = JSON.stringify(request);
    const Data = await GetData(URL + '/getCal', {
        method: "POST",
        body: request,
        headers: {
            "Content-Type": "application/json",
        }
    });
    res.render(CalendarFile, { Data });
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