const mongoose = require("mongoose");
//required config Data for jeneralise API
//collection name
//schema of Collection
//Get : (1) if GET one then need OBJECT as identifier (2) No need for GET all
//POST : DATA for post
//DELETE : Object identifier for Delete DATA
//UPDATE :
//SEARCH :
function API(app) {
    //API for send DATA to MongoDB Server
    //Send To-Do data to Database
    //prototype: date, time, [{status,task,date,time}],
    //To Do  Schema :
    const ToDoschema = new mongoose.Schema({
        date: Object,
        time: Object,
        tasks: Array,
    });
    const Usermodel = mongoose.model("tasks", ToDoschema, "tasks");
    //API for post Data into Database
    app.post("/PostToDo", async (req, res) => {
        const data = {};
        let date = new Date();
        const d = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        };
        const t = {
            hh: date.getHours(),
            mm: date.getMinutes(),
        };
        data.date = d;
        data.time = t;
        const task = req.body.task;
        const arr = [];
        task.forEach((element) => {
            // let ID = new mongoose.Types.ObjectId();
            let ID = Math.floor(Math.random() * 100);
            const obj = {
                date: d,
                time: t,
                status: false,
                task: element,
                __id: ID,
            };
            arr.push(obj);
        });
        data.tasks = arr;
        //request
        //respose
        try {
            const container = new Usermodel(data);
            const result = await container.save();
            res.send(result);
        } catch {
            res.send(new Error("Something Went wrong"));
        }
    });

    app.get("/getToDo", async (req, res) => {
        const result = await Usermodel.find();
        res.send(result);
    });
    app.delete("/delToDo", async (req, res) => {
        let data = req.body;
        const result = await Usermodel.deleteOne(data);
        res.send(result);
    });
    app.put("/UpdateStatus", async (req, res) => {
        let result = await Usermodel.updateOne(
            { tasks: { $elemMatch: { __id: Number(req.body.__id) } } },
            {
                $set: {
                    "tasks.$.status": req.body.status
                }
            }
        );
        res.send(result);
    });
    app.put("/Update", async (req, res) => {
        const dataObj = new Date;
        const date = {
            "month": dataObj.getMonth(),
            "year": dataObj.getFullYear(),
            "day": dataObj.getDate()
        }
        const time = {
            "hh": dataObj.getHours(),
            "mm": dataObj.getMinutes()
        }
        const Obj = {
            "date": date,
            "time": time,
            "status": false,
            "task": req.body.data,
            "__id": Math.floor(Math.random() * 100) + 1
        }
        let result = await Usermodel.findOneAndUpdate({ "_id": req.body.id }, { $push: { "tasks": Obj } }, { new: true });
        res.send(result);
    });
    //Send and Get Notes Data
    //prototype
    const NoteSchema = new mongoose.Schema({
        name: String,
        date: Object,
        time: Object,
        style: Object,
        lastUpdate: Array,
        content: Array,
    });
    data = {
        name: "My Second Document",
        date: { month: 12, year: 2022, day: 26 },
        time: { hour: 23, minute: 56 },
        style: { "font-family": "cursive" },
        lastUpdate: [],
        content: [{ text: "Hello I am second Document" }],
    };
    app.get("/getNotes", async (req, res) => {
        const NoteModel = mongoose.model("Notes", NoteSchema, "Notes");
        const result = await NoteModel.find({}, "name date time ");
        res.send(result);
    });
    app.post("/postNote", async (req, res) => {
        const NoteModel = mongoose.model("Notes", NoteSchema, "Notes");
        const container = new NoteModel(data);
        const result = await container.save();
        res.send(result);
    });

}
module.exports = API;
