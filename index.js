const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', itemRoutes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
