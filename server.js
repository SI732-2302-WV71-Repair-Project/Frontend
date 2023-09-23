const express = require('express');
const app = express();

// Configurar encabezados CORS para permitir solicitudes desde localhost:4200
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Resto de la configuración y rutas del servidor aquí

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
