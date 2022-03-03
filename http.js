const http = require('http');

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.end('Welcome to the home page!!');
    }

    if(req.url === '/about'){
        res.end('Here is our About page');
    }

    res.end(`
    <h1>!!Opps </h1>
    <p>Something went wrong</p>
    <a href='/'>Back Home</a>
    `)
})

server.listen(5000)