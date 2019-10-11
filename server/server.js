const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.json({
      'mensaje' : 'Bienvenido al API de NODEJS + MONGODB + ROBO 3T'
    })
});

app.get('/productos', function (req, res) {
    res.json({
        'data' : 'Aquí van los productos'
    })
});

app.get('/producto/:id', function (req, res) {
    res.json({
        'data' : `Aquí recibí el ID para mostrar un producto. ID: ${req.params.id}`
    })
});

app.post('/producto', function (req, res) {
    res.json({
        'data' : 'Aquí voy a esperar la información para guardar un producto'
    })
});

 
app.listen(3000, () => {
    console.log("Servidor ONLINE");
});