const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

db.serialize(() => {
    db.all("SELECT * FROM FACTURA;",  (err, rows) => {
        console.log(err);
        console.log(rows);
    });
})

db.close()