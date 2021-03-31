const conn = require('./connectDatabase.js');
const fetch = require('node-fetch');

var sqlCommand = `
CREATE TABLE IF NOT EXISTS heroes (
  id varchar(3) PRIMARY KEY,
  name varchar(20) NOT NULL,
  attrb varchar(4) NOT NULL,
  image varchar(70) NOT NULL
);

CREATE TABLE IF NOT EXISTS herostats (
    id varchar(3) PRIMARY KEY,
    pick1 mediumint NOT NULL,
    winrate1 mediumint NOT NULL,
    pick2 mediumint NOT NULL,
    winrate2 mediumint NOT NULL,
    pick3 mediumint NOT NULL,
    winrate3 mediumint NOT NULL,
    pick4 mediumint NOT NULL,
    winrate4 mediumint NOT NULL,
    pick5 mediumint NOT NULL,
    winrate5 mediumint NOT NULL,
    pick6 mediumint NOT NULL,
    winrate6 mediumint NOT NULL,
    pick7 mediumint NOT NULL,
    winrate7 mediumint NOT NULL,
    pick8 mediumint NOT NULL,
    winrate8 mediumint NOT NULL,
    FOREIGN KEY (id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS proherostats (
    id varchar(3) PRIMARY KEY,
    pick mediumint NOT NULL,
    winrate mediumint NOT NULL,
    ban mediumint NOT NULL,
    FOREIGN KEY (id) REFERENCES heroes(id)
);
`;

async function getDotaData() {
    const response = await fetch('https://api.opendota.com/api/herostats');
    const data = await response.json();
    return data;
}

conn.getConnection(function(err, mclient) {
    if (err) throw err;
    console.log("Database Initiation Phase - Connected to database");
    mclient.query(sqlCommand, async function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log("Database Initiation Phase - Tables Created");
        }
    });
});

