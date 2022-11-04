const sqlite = require("sqlite3").verbose();
const { names, cities, getRandomInt, getRandomFromArray, getRandomDate } = require("./utils.js")
let factura_array = new Array(100)

// connect to facturas db
const db = new sqlite.Database("./facturas.db", sqlite.OPEN_READWRITE, err => {
    if (err) {
        console.error(err)
    }
})

// create "FACTURA" and  "FACTURA_ITEMS"
const createFacturaTable = `CREATE TABLE IF NOT EXISTS FACTURA(ID INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, fecha TEXT, total INTEGER, nombre_cliente TEXT, ciudad TEXT)`
const createFacturaItemsTable = `CREATE TABLE IF NOT EXISTS FACTURA_ITEMS(ID INTEGER PRIMARY KEY, idFactura TEXT, producto TEXT, cantidad INTEGER)`


const dropTable = (table) => {
    db.run(`DROP TABLE IF EXISTS ${table}`)
}

// insert dummy data into create "FACTURA" and  "FACTURA_ITEMS"
const populateTable = () => {
    for (let i = 0; i < 100; i++) {
        let randomName = getRandomFromArray(names);
        let randomUserName = randomName.substring(0, randomName.indexOf(' ')) + getRandomInt(1,1000);
        let randomDate = getRandomDate();
        let randomQuantity = getRandomInt(1, 10);
        let randomCity = getRandomFromArray(cities)
        db.run(`
            INSERT INTO FACTURA(username, fecha, total, nombre_cliente, ciudad) 
            VALUES ('${randomUserName}','${randomDate}', ${randomQuantity}, '${randomName}', '${randomCity}')
        `)
    }
}

db.serialize(() => {
    dropTable("FACTURA")

    db.run(createFacturaTable)
    db.run(createFacturaItemsTable)


    populateTable()

    db.all("SELECT * FROM FACTURA;", function (err, rows) {
        console.log(err);
        console.log(rows);
    });
})


db.close()