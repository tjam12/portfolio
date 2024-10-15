const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("profile-master"));

app.get('/hello', (req, res) => {
  res.sendFile(path.join(__dirname, '/profile-master/index.html'))
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

module.exports.handler = serverless(app);