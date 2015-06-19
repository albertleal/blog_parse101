Autor: ALbert Leal

Repositorio de ejemplo para el post
http://albertleal.com/blog/2015/06/parse-cloud-code-empezamos/

Proyecto Parse
_____________________________________________________
Agregar config de Parse a la carpeta parse/config
Correr dentro de la carpeta parse
$parse deploy


Testeo en node
_____________________________________________________
Modificar el archivo test/test.js con las credenciales
	PARSE_APPLICATION_ID
	PARSE_JAVASCRIPT_KEY
Correr dentro de la carpeta de test:
$ npm install
$ node test.js