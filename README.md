#ALbert Leal

Repositorio de ejemplo para el post: [parse-cloud-code]
[parse-cloud-code]:http://albertleal.com/blog/2015/06/parse-cloud-code-empezamos/
___
###Proyecto Parse
Agregar config de Parse a la carpeta parse/config
Correr dentro de la carpeta parse
```sh
$parse deploy
```
###Testeo en node
Modificar el archivo test/test.js con las credenciales
  - PARSE_APPLICATION_ID
  - PARSE_JAVASCRIPT_KEY

Correr dentro de la carpeta de test:
```sh
$ npm install
$ node test.js
```