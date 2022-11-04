const myArgs = process.argv.slice(2);
const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

const sortBy = (column = "total") => {
    db.all(`SELECT * FROM FACTURA ORDER BY ${column} DESC`, function (err, rows) {
        console.log(err);
        console.log(rows)
    })   
}

db.serialize(() => {
    sortBy(myArgs[0])
})

db.close()