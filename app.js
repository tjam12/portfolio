const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello! You found me!');
});
const port = 4000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
