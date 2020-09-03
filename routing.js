const http = require('http');
const server = http.createServer((req, res)=>{
    const url =req.url;
    if (url=== '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Next page</title></head>');
    res.write('<body><h3>Hello</h3></body>');
    res.write('</html>');
    res.end();

})
server.listen(3000);