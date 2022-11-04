## Setup
Clonear el repo
```bash

git clone https://github.com/xsjark/db_test
cd db_test

```

Instalar dependencias
```bash

npm install

```

## Cómo usar los scripts
Llenar baso de datos con 100 facturas (nombres y ciudades generados de arrays de length 20 y 5, respectivamente)
```bash

node populate.js

```
Ver el contenido actual de baso de datos
```bash

node server.js

```

Calcular total de cada factura
```bash

node sum.js

```
Obtener la factura más alta
```bash

node oldest.js

```
Ordenar de mayor a menor (args incluidos para que puede eligir la columna)

```bash

node orderBy.js <arg1> <-- default total
node orderBy.js fecha

```
Cambiar el nombre de la columna `total` por `total_factura`. Ademas, puede incluir argumentos para cambia diferents columnas.
```bash

node renameColumn.js <arg1> <arrg2> <-- default total y total_factura
node renameColumn.js fecha date

```
## Task
Crea una tabla en sqlite en el navegador.
Crea la tabla `FACTURA`.
	id string (primary key)
	fecha string (formato yyyy-mm-dd)
	total number (entero sin decimales)
	nombre_cliente string
	ciudad string

Crea la tabla `FACTURA_ITEMS`
	id int (primary key, asignarse automaticamente)
	idFactura string (clave foranea con `FACTURA.id`)
	producto string
	cantidad number (entero sin decimales)

Popula tu base de datos con 100 facturas. Solo puedes tener hasta 20 nombres de clientes diferentes. Solo puedes tener hasta 5 nombres de ciudades diferentes.

Crea los siguientes scripts:
Crea un script que obtenga el valor total de cada factura, y el total de todos los items vendidos.
Crea un script que obtenga la factura más alta.
Crea un script que obtenga la factura más antigua.

Haz un script que obtenga, de mayor a menor, el nombre del cliente, total facturado y numero de items vendidos. Optimiza ese script.
Haz un script que obtenga, de mayor a menor, el nombre de la ciudad, total facturado y numero de items vendidos. Optimiza ese script.

Cambia el nombre de la columna `total` por `total_factura`.