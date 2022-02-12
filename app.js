const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// DEMO BASICA
const server = http.createServer((req, res) => {
    const plainText = 'Hello World Albañiles !';
    res.statusCode = 200; // use statusCode to set the status code but it really depends on the situation
    // res.write('also we can use end')
    // res.end() // and this really helps to finish the response
    // a resolver la Ñ no se ve en el navegador correctemente
    res.setHeader('Content-Type', 'text/plain')
    res.end(plainText);
});

server.listen(port, hostname, () => {
    console.log(`Text Server running at http://${hostname}:${port}/`);
});


// DEMO HTML RENDER PURO
// const htmlDemo = '<h1 style="color:red; font-size:120px; text-align: center;">Hello World</h1>'

// VAMOS CON ALGO MAS AVANZADO
// const htmlDemo = require('./web-demo')

// PERO ME PETA EL CODIGO DE ABAJO Y NO SE CARGA LA WEB
// console.log('Website',htmlDemo);

/*
const server2 = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlDemo);
});

server2.listen(port, hostname, () => {
    console.log(`HTML Server running at http://${hostname}:${port}/`);
});*/


// Posibles ejercicios o retos para la clase
// 1. Crear un servidor que muestre un html mas complejo desde otro archivo js, algo mas avanzado
// 2. Es posible cambiar el texto y el color del html renderizado en el servidor al hacer una recarga de la pagina
// 3. Usar nodemon para que el servidor se reinicie automaticamente al modificar el codigo o plantear el reto de hacerlo 
//    desde el terminal de la consola con configuraciones o de forma nativa viendo otros módulos.