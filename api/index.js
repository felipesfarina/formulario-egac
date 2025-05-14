const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/form.html'));
});

app.post('/cadastrar', (req, res) => {
  const { nomeProduto, tipo, preco, quantidade } = req.body;
  res.send(`
    <h1>Produto cadastrado com sucesso!</h1>
    <p><strong>Nome:</strong> ${nomeProduto}</p>
    <p><strong>Tipo:</strong> ${tipo}</p>
    <p><strong>Preço:</strong> R$ ${preco}</p>
    <p><strong>Quantidade:</strong> ${quantidade} unidades</p>
    <a href="/">Voltar</a>
  `);
});

module.exports = app;
