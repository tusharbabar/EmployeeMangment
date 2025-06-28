let mysql = require("mysql2");
require("dotenv").config();

let conn = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME
});


//  DB_HOST=localhost
// DB_USERNAME=root
// DB_PASSWORD=root
// DB_DBNAME=augminiapp
// SERVER_PORT=8080

conn.connect((err) => {
    if (err) {
        console.log(err);
        console.log("Database connection failed:");
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = conn;
