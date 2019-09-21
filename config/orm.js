var connection = require("./connection.js.js");
//Select All ORM
var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, res) {
      if (err) throw err;
      callback(res);
    });
  },
  //Insert
  insertOne: function(tableName, column, value, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [tableName, column, value], function(
      err,
      result
    ) {
      if (err) throw err;
      callback(result);
    });
  },
  //Update
  updateOne: function(colVal, id, callback) {
    var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;

      callback(result);
    });
  },
  //Delete
  deleteOne: function(id, callback) {
    var queryString = "DELETE FROM burgers WHERE " + id + ";";
    connection.query(queryString, [id], function(err, res) {
      if (err) throw err;
      callback(res);
    });
  }
};
//Exports ORM
module.exports = orm;
