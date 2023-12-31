let url = "http://localhost:5000";
async function Delete(e) {
    let response = await fetch(url + '/deleteNote', {
        method: 'DELETE', 
        body: JSON.stringify({ name: e.name }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(response.ok){
        location.reload();
    }else{
        console.log(response);
    }
}