const conn = require('./connectDatabase.js');
const fetch = require('node-fetch');

async function getDotaData() {
    const response = await fetch('https://api.opendota.com/api/herostats');
    const data = await response.json();
    return data;
}

async function updateData() {
    let value = await getDotaData();
    conn.getConnection(function(err, mclient) {
    console.log("Updating Data Phase - Connected to Database");
    value.forEach(element => {
        // conn.getConnection(function(err, mclient) {
            if (err) throw err;
            if (!(element.pro_pick)) {
                element.pro_pick = 0;
            }
            
            if (!(element.pro_win)) {
                element.pro_win = 0;
            }
            
            if (!(element.pro_ban)) {
                element.pro_ban = 0;
            }

            var iText1, iText2;
            for (let i = 1; i <= 8; i++) {
                iText1 = "" + i + "_win";
                iText2 = "" + i + "_pick"
                element[iText1] = (element[iText1]/element[iText2] * 100).toFixed(2);
            } 

            var sqlCommand = `
            INSERT INTO heroes
            (id, name, attrb, image)
            VALUES
            (`+ element.id + `, "`+ element.localized_name + `", "`+ element.primary_attr + `", "`+ element.img + `")
            ON DUPLICATE KEY UPDATE
            id = VALUES(id),
            name = VALUES(name),
            attrb = VALUES(attrb),
            image = VALUES(image);

            INSERT INTO herostats
            (id, pick1, winrate1, pick2, winrate2, pick3, winrate3, pick4, winrate4, pick5, winrate5, pick6, winrate6, pick7, winrate7, pick8, winrate8)
            VALUES
            (`+ element.id + `, `+ element['1_pick'] + `, `+ element['1_win'] + `, `+ element['2_pick'] + `, `+ element['2_win'] + `, `+ element['3_pick'] + `, `+ element['3_win'] + `, `+ element['4_pick'] + `, `+ element['4_win'] + `, `+ element['5_pick'] + `, `+ element['5_win'] + `, `+ element['6_pick'] + `, `+ element['6_win'] + `, `+ element['7_pick'] + `, `+ element['7_win'] + `, `+ element['8_pick'] + `, `+ element['8_win'] + `)
            ON DUPLICATE KEY UPDATE
            id = VALUES(id),
            pick1 = VALUES(pick1),
            winrate1 = VALUES(winrate1),
            pick2 = VALUES(pick2),
            winrate2 = VALUES(winrate2),
            pick3 = VALUES(pick3),
            winrate3 = VALUES(winrate3),
            pick4 = VALUES(pick4),
            winrate4 = VALUES(winrate4),
            pick5 = VALUES(pick5),
            winrate5 = VALUES(winrate5),
            pick6 = VALUES(pick6),
            winrate6 = VALUES(winrate6),
            pick7 = VALUES(pick7),
            winrate7 = VALUES(winrate7),
            pick8 = VALUES(pick8),
            winrate8 = VALUES(winrate8);

            INSERT INTO proherostats
            (id, pick, win, ban)
            VALUES
            (`+ element.id + `, `+ element.pro_pick + `, `+ element.pro_win + `, `+ element.pro_ban + `)
            ON DUPLICATE KEY UPDATE
            id = VALUES(id),
            pick = VALUES(pick),
            win = VALUES(win),
            ban = VALUES(ban);
            `    
            ;
            
            // console.log("Inserting Hero " + element.localized_name + " with ID " + element.id + " to database");
            mclient.query(sqlCommand, function (err, result) {
                if (err) throw err;
                
            });
        });
        console.log("Updating Data Phase - Hero Data Inserted"); 
        mclient.release();
    });   
}

module.exports.updateData = updateData;

