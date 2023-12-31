let url = "http://localhost:5000";
async function Counts(){
    let response=(await fetch(url+'/count'));
    if(response.ok){
        response=await response.json();
        document.getElementById("ToDoCount").innerText=response.todo;
        document.getElementById("NoteCount").innerText=response.notes;
        document.getElementById("RemainderCount").innerText=response.remainder;
    }
}
Counts();