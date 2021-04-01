const conn = require('./connectDatabase.js');
const struct = require('./structure.js');

var topheroes = struct.matrixBuilder(8,1);
var topproheroes = struct.matrixBuilder(1,1);

function updateMetaHeroData(tier) {
    const updateData =  new Promise ((resolve,reject) => {
            conn.getConnection(function(err, mclient) {
            if (err) throw err;
            console.log("Updating Meta Hero Data Tier " + tier + " - Connected to database");

            var sqlCommand = `
            SELECT heroes.name, heroes.attrb, heroes.image, herostats.pick`+tier+` as pick, herostats.winrate`+tier+` as winrate FROM herostats JOIN heroes on heroes.id = herostats.id ORDER BY winrate`+tier+` DESC LIMIT 10;
            
            SELECT SUM(pick`+tier+`) as totalPick FROM herostats;
            `;
            mclient.query(sqlCommand, function (err, result) {
                mclient.release();
                if (err) {
                    throw err;
                } else {
                    var herodata = result[0];
                    var totalPickCount = result[1];
                    herodata.forEach(element => {
                        element.pick = element.pick/totalPickCount[0].totalPick *100;
                        element.pick = element.pick.toFixed(2);
                    });
                    topheroes[tier-1] = herodata;
                    resolve();
                }
            });
        });
    });
}

function getHeroData() {
    return topheroes;
}

function updateMetaProData() {
    const updateProData =  new Promise ((resolve,reject) => {
        conn.getConnection(function(err, mclient) {
        if (err) throw err;
        console.log("Updating Meta Pro Data - Connected to database");

        var sqlCommand = `
        SELECT heroes.name, heroes.attrb, heroes.image, proherostats.pick, proherostats.win, proherostats.ban FROM proherostats JOIN heroes on heroes.id = proherostats.id;
        
        SELECT SUM(pick) as totalPick, SUM(ban) as totalBan FROM proherostats;
        `;
        mclient.query(sqlCommand, function (err, result) {
            mclient.release();
            if (err) {
                throw err;
            } else {
                var herodata = result[0];
                var total = result[1];
                var average = 0.0;
                herodata.forEach(element => {
                    element.pick = element.pick/total[0].totalPick *100;
                    element.pick = parseFloat(element.pick.toFixed(2));
                    element.win = element.win/total[0].totalPick *100;
                    element.win = parseFloat(element.win.toFixed(2));
                    element.ban = element.ban/total[0].totalBan *100;
                    element.ban = parseFloat(element.ban.toFixed(2));
                });
                herodata.sort(function(a,b) {
                    return (b.pick+b.win+b.ban) - (a.pick+a.win+a.ban); 
                });

                topproheroes = herodata.slice(0,9);
                resolve();
            }
        });
    });
});
}

function getProHeroData() {
    return topproheroes;
}

module.exports.updateMetaHeroData = updateMetaHeroData;
module.exports.updateMetaProData = updateMetaProData;
module.exports.getHeroData = getHeroData;
module.exports.getProHeroData = getProHeroData;