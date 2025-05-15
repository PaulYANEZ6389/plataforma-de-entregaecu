console.log("Servidor iniciado correctamente");

// Para que el proceso no termine inmediatamente, añade esto (por ejemplo, un servidor básico con Express):

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo desde Express');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

