var mysql = require("mysql");
var connection;

//creating connection
// var connection = mysql.createConnection({ // Set connection parameters
//   host: "localhost",
//   user: "root",
//   password: "MonashBootCamp2019",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    // Set local connection parameters
    host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "h0sxor1vdz8xs5qb",
    password: "jfelb6959jbn20ih",
    Port: 3306,
    database: "b6s1jrqnj56mwul3"
  });
}

//creating connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting for ORM
module.exports = connection;
