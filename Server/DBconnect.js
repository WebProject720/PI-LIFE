const config = require('./config');
const mongoose = require('mongoose');
const start = async () => {
    try {
        await mongoose.connect(`${config.path}/${config.database}`);
    } catch (error) {
        console.error("ERROR : ", error);
        process.exit(1);
    }
};
module.exports = start;