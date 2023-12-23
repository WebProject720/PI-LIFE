const mongoose = require("mongoose");
function MonthDays(month, year) {
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    } else if (month == 1) {
        if (year % 4 == 0 || year % 100 == 0) {
            return 29;
        }
        else {
            return 28;
        }
    } else {
        return 30;
    }
}
function Month(obj, data) {
    const array = [];
    for (let i = 1; i <= MonthDays(obj.month, obj.year); i++) {
        let date = new Date(obj.year, obj.month, i);
        let object = {
            "date": { "month": date.getMonth(), "year": date.getFullYear(), "date": date.getDate(), "day": (date.getDay()) },
            "time": {},
            "content": "*",
            "lastUpdate": []
        }
        array.push(object);
    }
    data.forEach(element => {
        array.forEach(e => {
            if ((e.date.date) == (element.date.date)) {
                e.content = element.content;
            }
        });
    });
    return array;
}
function API(app) {
    const schema = new mongoose.Schema({
        "date": Object,
        "time": Object,
        "content": String,
        "lastUpdate": Array
    });
    data = {
        date: { month: 12, year: 2022, date: 26 },
        time: { hour: 23, minute: 56 },
        content: "Hello World",
        lastUpdate: []
    };
    const Model = mongoose.model("calendar", schema, "calendar");
    app.post("/getCal", async (req, res) => {
        const data = await Model.find({ 'date.month': Number(req.body.request.month), 'date.year': Number(req.body.request.year) }).select('date content');
        result = [{ "month": Month({ month: req.body.request.month, year: req.body.request.year }, data), "name": req.body.request.month }]
        res.send(result);
    });
    app.post("/postCal", async (req, res) => {
        const container = new Model(req.body);
        const result = await container.save();
        res.send(result);
    });

}
module.exports = API;