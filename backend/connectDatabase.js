const mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 20,
    host: "localhost",
    user: "holyhawk",
    password: "dotadashboard112",
    database: "dotadb",
    multipleStatements: true
  });

exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
        if(err) {
            return callback(err);
        }
        callback(err, conn);
    });
};