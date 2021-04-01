// Node Modules
const express = require("express");
const cron = require("node-cron");
const fetch = require("node-fetch");

// File Modules
const initDB = require("./initDatabase.js");
const updateDB = require("./updateDBData.js");
const updateMeta = require("./updateMetaData.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/hero", (req, res) => {
  var topHeroes = updateMeta.getHeroData();
  // res.json({ message: "Meta from Hero data will be delivered from here!" });
  res.json({ message: topHeroes[7] });
});

app.get("/pros", (req, res) => {
  var topProHeroes = updateMeta.getProHeroData();
  // res.json({ message: "Meta from Pro Player stats will be delivered from here!"});
  res.json({ message: topProHeroes })
});

cron.schedule('*/5 * * * * *', function() {
  console.log('CRON Job running - 5 seconds interval');
  
  console.log('CRON JOB - Updating Database');
  updateDB.updateData();

  console.log('CRON Job - Updating Hero Data');
  for (let i = 1; i <= 8; i++) {
    updateMeta.updateMetaHeroData(i);
  }

  console.log('CRON Job - Updating Pro Hero Data');
  updateMeta.updateMetaProData();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});  

