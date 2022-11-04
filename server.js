const sqlite = require("sqlite3").verbose();
const { names, cities, getRandomInt, getRandomFromArray, getRandomDate } = require("./utils.js")
let factura_array = new Array(100)

// connect to facturas db
const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

db.serialize(() => {
    db.all("SELECT * FROM FACTURA;", function (err, rows) {
        console.log(err);
        console.log(rows);
    });
})


db.close()