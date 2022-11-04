const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})
const renameColumn = (column = "total") => {
    db.run(`ALTER TABLE FACTURA RENAME COLUMN ${column} TO total_factura;`)   
}


db.serialize(() => {
    renameColumn()
})


db.close()