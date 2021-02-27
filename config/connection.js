// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
  	port: 3306,
    host: "localhost",
    user: "root",
    password: "R00tP@ssw0rd",
    database: "burger_db"
  })
}

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;