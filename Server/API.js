//API for send DATA to MongoDB Server
//Send To-Do data to Database
//prototype: date, time, [{status,task,date,time}], 
//To Do  Schema
const schema = new mongoose.Schema({
    date: Object,
    time: Object,
    tasks: Array
});
const Usermodel = mongoose.model("tasks", schema);
const data = {
    date: { month: 6, year: 2021, day: 31 },
    time: { mm: 23, hh: 5 },
    tasks: [
        {
            status: false,
            task: "Study",
            date: { month: 6, year: 2021, day: 31 },
            time: { mm: 23, hh: 5 },
        },
        {
            status: false,
            task: "Learn",
            date: { month: 6, year: 2021, day: 31 },
            time: { mm: 23, hh: 5 },
        },
    ],
};
//API for post Data into Database
const container = new Usermodel(data);
app.post('/putToDo', async (req, res) => {
    const result = await container.save();
    res.send(result);
});