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
        name: String,//Update
        date: Object,
        time: Object,
        style: Object,//Update
        lastUpdate: Array,//Update
        content: String,//Update
    });
    const NoteModel = mongoose.model("Notes", NoteSchema, "Notes");
    app.get("/getNotes", async (req, res) => {
        let result;
        if (req.query.q != undefined) {
            result = await NoteModel.find({ name: req.query.q });
        }
        else {
            result = await NoteModel.find();
        }
        res.send(result);
    });
    app.post("/postNote", async (req, res) => {
        const container = new NoteModel(req.body);
        const result = await container.save();
        res.send(result);
    });
    app.delete('/deleteNote',async(req,res)=>{
        let response=await NoteModel.deleteOne(req.body);
        res.send(response);
    })
    app.put("/UpdateNote",async(req,res)=>{
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
        let obj={
            date:date,
            time:time,
            lastUpdate:[[date,time]],
            style:req.body.style,
            name:req.body.name,
            content:req.body.content
        }
        if(req.body.PreName!=null){
            obj.PreName=req.body.PreName
        }else{
            obj.PreName=req.body.name
        }
        let response=await NoteModel.findOneAndUpdate({name:obj.PreName},{$set:{content:obj.content,style:obj.style,name:obj.name}});
        res.send(response);
    });
}
module.exports = API;
