const http = require('http')

http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{
        'Content-Type':'text/plain'
    })
    resposta.write('Joao Edson Machado\n')
    resposta.end()
}).listen(1338)