const http = require('http')


http.createServer((req,res)=>{
res.write('<h1>Hello node!!!!</>')
res.end()

}).listen(3000,console.log)