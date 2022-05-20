const express = require('express')

const port = 8080;

const app = express()

app.get('/status', (req, res) => {
  res.send('Servidor Funcionando Normalmente')
})

app.post('/user', (req, res) => {
  //Challenge de aceitar um objeto JSON
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})