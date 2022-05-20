const express = require('express')
const dotenv = require('dotenv')

//dotenv.config()
dotenv.config({ path: `.env.${process.env.NODE_ENV}`}) // .env.development .env.production

const app = express()

app.get('/status', (req, res) => {
  res.send('Servidor Funcionando Normalmente')
})

app.post('/user', (req, res) => {
  //Challenge de aceitar um objeto JSON e dar um console log
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
})