function showAddNote() {
    let div = document.getElementById('absolute-box');
    if (div.classList.contains("displayNone")) {
        (div.classList.remove('displayNone'));
    } else {
        (div.classList.add('displayNone'));
    }
}