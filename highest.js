const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

const highestFactura = () => {
    db.all("SELECT *, MAX(total) FROM FACTURA", function (err, rows) {
        console.log(err);
        console.log(rows)
    })
}

db.serialize(() => {
    highestFactura()
})

db.close()