const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server=http.createServer((req,res)=>{
    fs.readFile('site.html',(err,arquivo)=>{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000,()=>{console.log('Servidor rodando')})