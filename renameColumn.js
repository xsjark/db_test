const myArgs = process.argv.slice(2);
const sqlite = require("sqlite3").verbose();

const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

const renameColumn = (column = "total", new_name = "total_factura") => {
    db.run(`ALTER TABLE FACTURA RENAME COLUMN ${column} TO ${new_name};`)   
}

db.serialize(() => {
    renameColumn(myArgs[0], myArgs[1])
})

db.close()