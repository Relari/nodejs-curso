const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea uno', function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Archivo creado');
});

console.log('Ultima linea de codigo');

fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});