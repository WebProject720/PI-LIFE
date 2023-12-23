function showAddNote(e) {
    let div = document.getElementById('absolute-box');
    let form = document.getElementById("newNoteForm");
    if (div.classList.contains("displayNone")) {
        let date = e.getAttribute('data-date');
        let month = e.getAttribute('data-month');
        let year = e.getAttribute('data-year');
        let content=e.getAttribute('data-content');
        document.getElementById('date-new-note').innerText = date;
        form.setAttribute('data-date', date);
        form.setAttribute('data-month', month);
        form.setAttribute('data-year', year);
        form.onsubmit = PostNote;
        if (e.firstElementChild.innerText != '*') {
            form.firstElementChild.innerHTML = content;
        }
        (div.classList.remove('displayNone'));
    } else {
        (div.classList.add('displayNone'));
    }
    if (e == null) {
        form.firstElementChild.innerHTML = null;
    }
}