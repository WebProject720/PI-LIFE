let URL = "http://localhost:5000";
async function PostNote(e) {
    e.preventDefault();
    const data = new FormData(e.target).get('textarea');
    let date = e.target.getAttribute('data-date');
    let month = e.target.getAttribute('data-month');
    let year = e.target.getAttribute('data-year');
    const obj = {
        date: Number(date),
        month: Number(month),
        year: Number(year)
    }
    let d = new Date();
    const request = {
        date: obj,
        time: { hh: d.getHours(), mm: d.getMinutes() },
        content: data,
        lastUpdate: []
    }
    const response = await fetch(URL + '/postCal', {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-Type": "application/JSON"
        }
    });
    if (response.ok) {
        showAddNote(null);
    } else {
        console.log(response);
    }
    return false;
};
function NewMonth(e, num) {
    let year = Number(e.getAttribute('data-year'));
    let month = Number(e.getAttribute('name-month'));
    if (month == 11 && num == 1) {
        month = 0;
        year++;
    }
    else if (month == 0 && num == -1) {
        month = 11;
        year--;
    } else {
        month = month + num;
    }
    location.href = `/calendar?month=${month}&year=${year}`;
    return month;
}