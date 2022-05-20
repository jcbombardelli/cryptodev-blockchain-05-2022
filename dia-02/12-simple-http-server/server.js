const http = require('http')

const port = 8080
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type" : "application/json"} )
  response.end("Hello CryptoDev 2022!!")
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})