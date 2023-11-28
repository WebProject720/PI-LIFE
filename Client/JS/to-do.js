function fun(e) {
    if (e.checked) {
        e.parentElement.parentElement.nextElementSibling.children[0].classList.add('checked')
    } else {
        e.parentElement.parentElement.nextElementSibling.children[0].classList.remove('checked')
    }
}
function addMoreTask(e) {
    let div = (e.parentElement.parentElement.previousElementSibling.lastElementChild.innerHTML);
    // e.parentElement.parentElement.previousElementSibling.insertHTML += e.parentElement.parentElement.previousElementSibling.lastElementChild;
    // e.parentElement.parentElement.previousElementSibling.lastElementChild.classList.remove("displayNone");
    e.parentElement.parentElement.previousElementSibling.appendChild(div);
}
function showAddToDo() {
    let div = document.getElementById('absolute-box');
    if (div.classList.contains("displayNone")) {
        (div.classList.remove('displayNone'));
    } else {
        (div.classList.add('displayNone'));
    }
}
