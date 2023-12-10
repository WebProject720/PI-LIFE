function fun(e) {
    if (e.checked) {
        e.parentElement.parentElement.nextElementSibling.children[0].classList.add(
            "checked"
        );
    } else {
        e.parentElement.parentElement.nextElementSibling.children[0].classList.remove(
            "checked"
        );
    }
}

function addMoreTask(e) {
    // Create the outermost div with class 'td-data'
    var tdDataDiv = document.createElement("div");
    tdDataDiv.classList.add("td-data");

    // Create the div with class 'td-checkbox'
    var tdCheckboxDiv = document.createElement("div");
    tdCheckboxDiv.classList.add("td-checkbox");

    // Create the div with class 'checkbox-wrapper-13'
    var checkboxWrapperDiv = document.createElement("div");
    checkboxWrapperDiv.classList.add("checkbox-wrapper-13");

    // Create the input element with specified attributes
    var checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("onchange", "fun(this)");
    checkboxInput.setAttribute("id", "c1-13");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("disabled", "");

    // Append the input element to the div with class 'checkbox-wrapper-13'
    checkboxWrapperDiv.appendChild(checkboxInput);

    // Append the 'checkbox-wrapper-13' div to the 'td-checkbox' div
    tdCheckboxDiv.appendChild(checkboxWrapperDiv);

    // Create the div with class 'td-task'
    var tdTaskDiv = document.createElement("div");
    tdTaskDiv.classList.add("td-task");

    // Create the div with class 'form'
    var formDiv = document.createElement("div");
    formDiv.classList.add("form");

    // Create the input element with class 'task-input' and specified attributes
    var taskInput = document.createElement("input");
    taskInput.classList.add("task-input");
    taskInput.classList.add("task-input-area");
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("name", "task");
    taskInput.setAttribute("placeholder", "Enter Task");

    var taskInput2 = document.createElement("input");
    taskInput2.classList.add("task-input");
    taskInput2.setAttribute("type", "submit");
    taskInput2.setAttribute("value", "Save");

    // Append the input element to the 'form' div
    formDiv.appendChild(taskInput);
    formDiv.appendChild(taskInput2);

    // Append the 'form' div to the 'td-task' div
    tdTaskDiv.appendChild(formDiv);

    // Append the 'td-checkbox' and 'td-task' divs to the outermost 'td-data' div
    tdDataDiv.appendChild(tdCheckboxDiv);
    tdDataDiv.appendChild(tdTaskDiv);

    e.parentElement.parentElement.previousElementSibling.appendChild(tdDataDiv);
}
function addMoreTaskNew() {
    // Create the outermost div with class 'td-data'
    var tdDataDiv = document.createElement("div");
    tdDataDiv.classList.add("td-data");

    // Create the div with class 'td-checkbox'
    var tdCheckboxDiv = document.createElement("div");
    tdCheckboxDiv.classList.add("td-checkbox");

    // Create the div with class 'checkbox-wrapper-13'
    var checkboxWrapperDiv = document.createElement("div");
    checkboxWrapperDiv.classList.add("checkbox-wrapper-13");

    // Create the input element with specified attributes
    var checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("onchange", "fun(this)");
    checkboxInput.setAttribute("id", "c1-13");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("disabled", "");

    // Append the input element to the div with class 'checkbox-wrapper-13'
    checkboxWrapperDiv.appendChild(checkboxInput);

    // Append the 'checkbox-wrapper-13' div to the 'td-checkbox' div
    tdCheckboxDiv.appendChild(checkboxWrapperDiv);

    // Create the div with class 'td-task'
    var tdTaskDiv = document.createElement("div");
    tdTaskDiv.classList.add("td-task");

    // Create the div with class 'form'
    var formDiv = document.createElement("div");
    formDiv.classList.add("form");

    // Create the input element with class 'task-input' and specified attributes
    var taskInput = document.createElement("input");
    taskInput.classList.add("task-input");
    taskInput.setAttribute("type", "text");
    taskInput.setAttribute("name", "task");
    taskInput.setAttribute("placeholder", "Enter Task");

    var taskInput2 = document.createElement("input");
    taskInput2.classList.add("task-input");
    taskInput2.setAttribute("type", "submit");
    taskInput2.setAttribute("value", "Save");

    // Append the input element to the 'form' div
    formDiv.appendChild(taskInput);

    // Append the 'form' div to the 'td-task' div
    tdTaskDiv.appendChild(formDiv);

    // Append the 'td-checkbox' and 'td-task' divs to the outermost 'td-data' div
    tdDataDiv.appendChild(tdCheckboxDiv);
    tdDataDiv.appendChild(tdTaskDiv);

    document.getElementById("New-tasks-temp").appendChild(tdDataDiv);
}
function showAddToDo() {
    let div = document.getElementById("absolute-box");
    if (div.classList.contains("displayNone")) {
        div.classList.remove("displayNone");
    } else {
        div.classList.add("displayNone");
    }
}


//Submit NEW todo .then
let href = window.location.href;
document.getElementById("NEW-TODO").addEventListener("submit", async function (e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let data = form.getAll("task");
    data = { task: data };
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
    const response = await fetch("http://localhost:5000/PostToDo", {
        method: "post",
        body: jsonData,
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!response.ok) {
        console.log("Data Not POST ");
    } else {
        window.location.reload();
    }
});
