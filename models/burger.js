//require ORM
var orm = require("../config/orm.js");

//burger variable and callback function
var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  //insert function
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", "burger_name", cols, vals, function(res) {
      callback(res);
    });
  },
  //update function
  updateOne: function(colVal, id, cb) {
    orm.updateOne(colVal, id, function(res) {
      cb(res);
    });
  },
  //delete function
  deleteOne: function(id, callback) {
    orm.deleteOne(id, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
