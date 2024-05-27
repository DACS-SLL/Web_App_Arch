const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Rutas
app.use('/api', itemRoutes);

// Sirviendo archivos estáticos
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
