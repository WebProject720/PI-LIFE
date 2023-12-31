let TextAreaID = 'pageTextarea';
let TextArea = document.getElementById('pageTextarea').style;
document.getElementById('color-button').addEventListener('input', (e) => {
    TextArea.backgroundColor = e.target.value;
});
document.getElementById('FontColor').addEventListener('input', (e) => {
    TextArea.color = e.target.value;
});
document.getElementById('fontsize').addEventListener('change', (e) => {
    TextArea.fontSize = e.target.value + 'px';
});
document.getElementById('FontFamily').addEventListener('change', (e) => {
    TextArea.fontFamily = e.target.value;
});
document.getElementById('fontWeight').addEventListener('change', (e) => {
    TextArea.fontWeight = e.target.value;
});
document.getElementById('TextareaWidth').addEventListener('input', (e) => {
    if (Number(document.getElementById('TextareaWidth').min) < e.target.value)
        TextArea.width = e.target.value + 'px';
});
document.getElementById('TextareaHeight').addEventListener('input', (e) => {
    if (Number(document.getElementById('TextareaHeight').min) < e.target.value)
        TextArea.height = e.target.value + 'px';
});

//Set font family in options
const fontFamilies = [
    'Arial',
    'Helvetica',
    'Courier',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Bookman',
    'Comic Sans MS',
    'Impact',
    'Trebuchet MS',
    'Arial Black',
    'Tahoma',
    'Geneva',
];
fontFamilies.forEach((e) => {
    document.getElementById('FontFamily').innerHTML += `<option class="fontFamilyOption" value="${e}">${e}</option>`
})
//
function Back() {
    window.location.href = "http://localhost:5500/NoteList";
}
//Get Data of Notes From TextArea
let url = "http://localhost:5000";
let query = new URLSearchParams(location.search).get('note');
document.getElementById('SubmitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let FileName = (document.getElementById('FileName').value);
    let date = new Date();
    if (FileName == '') {
        FileName = `YourDoc-${date.getMonth()}-${date.getFullYear()}`
    }
    let Data = {
        name: FileName,
        date: { month: date.getMonth(), year: date.getFullYear(), date: date.getDate(), day: date.getDay() },
        time: { hh: date.getHours(), mm: date.getMinutes() },
        style: {
            backgroundColor: TextArea.backgroundColor,
            color: TextArea.color,
            fontFamily: TextArea.fontFamily,
            fontSize: TextArea.fontSize,
            width:TextArea.width,
            height:TextArea.height
        },
        lastUpdate: [],
        content: document.getElementById(TextAreaID).value,
    };
    if (Data.content != '' && query == null) {
        PostNote(Data);
    }
    if (query != null) {
        Update(Data);
    }
});
//Update Data
async function Update(obj) {
    delete obj['date'];
    delete obj['time'];
    delete obj['lastUpdate'];
    if (obj.name != document.getElementById(TextAreaID).name) {
        obj.PreName = document.getElementById(TextAreaID).name;
    }
    let response = await fetch(url + '/UpdateNote', {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok)
        console.log(response);
    else
        Back();
    return response;
}
//GET and Post Data
async function PostNote(obj) {
    let response = await fetch(url + '/postNote', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok)
        console.log(response);
    else
        Back()
    return response;
}

//GET
async function ShowData() {
    let data = (await (await fetch(url + `/getNotes?q=${query}`)).json());
    if (data.length <= 0) {
        return 0;
    }
    data = data[0];
    document.getElementById('FileName').value = data.name;
    document.getElementById('pageTextarea').value = data.content;
    document.getElementById(TextAreaID).setAttribute('name', data.name);
    let style = data.style;
    for (let key in style) {
        if (style[key] != '') {
            document.getElementById(TextAreaID).style[key] = style[key];
        }
    }
    PutElementValue(style);
}
function PutElementValue(style) {
    style.fontSize = (style.fontSize).slice(0, style.fontSize.length - 2);
    document.getElementById('color-button').value = RGBConvert(style.backgroundColor);
    document.getElementById('FontColor').value = RGBConvert(style.color);
    document.getElementById('fontsize').value = (style.fontSize);
    document.getElementById('FontFamily').value = style.fontFamily;
    document.getElementById('fontWeight').value = style.fontWeight;
    document.getElementById('TextareaWidth').value = (style.width).slice(0, style.width.length - 2);
    document.getElementById('TextareaHeight').value = (style.height).slice(0, style.height.length - 2);
    console.log(style);
}
function RGBConvert(str) {
    const inputColor = str;
    const hexColor = "#" + inputColor.match(/\d+/g).map(function (x) { return parseInt(x).toString(16).padStart(2, '0'); }).join('');
    return hexColor;
}
if (query != null)
    ShowData();