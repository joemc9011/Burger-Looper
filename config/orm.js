var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = ("select * from ", tableInput, + ";");
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    
    },
    insertOne: function(){},
    updateOne: function(){},
    deleteOne: function(){}

};

module.exports = orm;