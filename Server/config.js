require('dotenv').config();
const config = {
    path: process.env.MONGODB_URL,
    database: process.env.DATABASE_NAME,
    port: process.env.PORT
}
module.exports = config;