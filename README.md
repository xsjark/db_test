Llenar baso de datos con 100 facturas (nombres y ciudades generados de arrays de length 20 y 5, respectivamente)
```bash

node populate.js

```
Ver contenido de baso de datos
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
