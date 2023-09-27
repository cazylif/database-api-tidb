const mysql = require("mysql2");
require('dotenv').config()
// const dbConfig = require("../config/db.config");



/////databaseform local////
// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB

// });

////batabaseform Tidb///

var connection = mysql.createConnection({
  host: 'gateway01.us-west-2.prod.aws.tidbcloud.com',
  port: 4000,
  user: 'jW8SFCkQg5jLwGu.root',
  password: 'wiEFqF0ngtcoS4gx',
  database: 'test',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});



connection.connect((error)=>{
  if(error) console.log("MYSQL connection: " + error);
  else console.log("Successfully connected to the database");

});
module.exports = connection;