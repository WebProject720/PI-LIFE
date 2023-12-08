function fun(e) {
  if (e.checked) {
    e.parentElement.parentElement.nextElementSibling.children[0].classList.add('checked')
  } else {
    e.parentElement.parentElement.nextElementSibling.children[0].classList.remove('checked')
  }
}
function addMoreTask(e) {
  const div = `<div class="td-data"><div class="td-checkbox">
    <div class="checkbox-wrapper-13">
      <input onchange="fun(this)" id="c1-13" type="checkbox" disabled="">
    </div>
  </div>
  <div class="td-task">
    <div class="form">
      <form action="" class="add-td-form">
        <input class="task-input" type="text" name="" id="" placeholder="Enter Task">
        <input class="task-input" type="submit" value="Save">
      </form>
    </div>
  </div></div>`
  e.parentElement.parentElement.previousElementSibling.innerHTML += (div);
}
function addMoreTaskNew() {
  const div = `<div class="td-data"><div class="td-checkbox">
    <div class="checkbox-wrapper-13">
      <input onchange="fun(this)" id="c1-13" type="checkbox" disabled="">
    </div>
  </div>
  <div class="td-task">
    <div class="form">
        <input class="task-input" type="text" name="task" id="" placeholder="Enter Task">
    </div>
  </div></div>`;
  document.getElementById("New-tasks-temp").innerHTML += div;
}
function showAddToDo() {
  let div = document.getElementById('absolute-box');
  if (div.classList.contains("displayNone")) {
    div.classList.remove('displayNone');
  } else {
    div.classList.add('displayNone');
  }
}
