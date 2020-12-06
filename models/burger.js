var orm = require("./config/orm.js");

const burg = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(cols, vals, cs){
        orm.insertOne("burgers", col, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
      }
    

    orm.updateOne

    orm.deleteOne
}



module.exports = burger.js

// dont think export is right