// Node Modules
const express = require("express");
const cron = require("node-cron");
const fetch = require("node-fetch");

// File Modules
const initDB = require("./initDatabase.js");
const updateDB = require("./updateDBData.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

cron.schedule('*/5 * * * * *', function() {
  console.log('running a task every five seconds');
  updateDB.updateData();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});  

