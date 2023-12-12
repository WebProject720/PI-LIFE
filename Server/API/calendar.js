const mongoose = require("mongoose");
function data(text) {
    const date = new Date;
    const Obj = {
        "date": { "month": date.getMonth(), "year": date.getFullYear(), "date": date.getDate() },
        "time": { "hh": date.getHours(), "mm": date.getMinutes() },
        "content": text,
        "lastUpdate": []
    }
    return Obj;
}
function API(app) {
    const schema = new mongoose.Schema({
        "date": Object,
        "time": Object,
        "content": String,
        "lastUpdate": Array
    });
    data = {
        date: { month: 12, year: 2022, day: 26 },
        time: { hour: 23, minute: 56 },
        content: "Hello World",
        lastUpdate: []
    };
    const Model = mongoose.model("calendar", schema, "calendar");
    app.get("/getCal", async (req, res) => {
        const result = await Model.find();
        res.send(result);
    });
    app.post("/postCal", async (req, res) => {
        const container = new Model(data);
        const result = await container.save();
        res.send(result);
    })
}
module.exports = API;