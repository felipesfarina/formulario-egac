const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/form.html');
});


router.post('/submit', (req, res) => {
  const { nome, email } = req.body;
  res.send(`Dados recebidos: Nome = ${nome}, Email = ${email}`);
});

app.use('/', router);

module.exports.handler = serverless(app);
