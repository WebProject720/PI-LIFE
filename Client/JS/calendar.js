function showAddNote(e) {
    let div = document.getElementById('absolute-box');
    if (div.classList.contains("displayNone")) {
        let date = e.getAttribute('data-date');
        let month = e.getAttribute('data-month');
        let year = e.getAttribute('data-year');
        document.getElementById('date-new-note').innerText = date;
        document.getElementById("newNoteForm").setAttribute('data-date', date);
        document.getElementById("newNoteForm").setAttribute('data-month', month);
        document.getElementById("newNoteForm").setAttribute('data-year', year);
        document.getElementById("newNoteForm").onsubmit = PostNote;
        (div.classList.remove('displayNone'));
    } else {
        (div.classList.add('displayNone'));
    }
}