const http = require('http')
const fs = require('fs')
const porta = procss.env.PORT

const server = http.createServer((req,res) => {
    fs.readFile('site.html',(err,arquivo) => {
        res.writeHead(200,{'Cntent-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000,() => {console.log('Servidor rodando!')})
