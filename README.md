```bash

thecodebuzz@DESKTOP-NUEMRRD:~$ sudo service redis-server restart
Stopping redis-server: redis-server.
Starting redis-server: redis-server.

```







# 1. Crea una tabla en sqlite en el navegador.
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

2. Popula tu base de datos con 100 facturas. Solo puedes tener hasta 20 nombres de clientes diferentes. Solo puedes tener hasta 5 nombres de ciudades diferentes.

3. Crea los siguientes scripts:
Crea un script que obtenga el valor total de cada factura, y el total de todos los items vendidos.
Crea un script que obtenga la factura más alta.
Crea un script que obtenga la factura más antigua.

Haz un script que obtenga, de mayor a menor, el nombre del cliente, total facturado y numero de items vendidos. Optimiza ese script.
Haz un script que obtenga, de mayor a menor, el nombre de la ciudad, total facturado y numero de items vendidos. Optimiza ese script.

4. Cambia el nombre de la columna `total` por `total_factura`.