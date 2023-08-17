const http = require('http')
const fs = require('fs')
const multiple = require('./math')
const uuid  = require('uuid')

// console.log(uuid.v4());
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(res);
    if (req.url === '/') {
        res.end(`<h1>response from server</h1>
        <p style="color:red">Main Page</p>
        `)
    } else if (req.url === '/users') {
        res.end(`
        <html>
           <title>Send Message</title>
        <body>
           <form action="/message" method="POST">
             <input type="text" name="message">
             <button>Send</button>
           </form>
        </body>
        </html>
        `)
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = []
        req.on('data' , (chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);
            fs.writeFileSync('message.text', parsedBody.split('=')[1])
        })
        res.end()
    }
})

console.log(multiple(5,7));

const PORT = process.env.PORT || 4000

server.listen(PORT, () => { 
    console.log('server running on PORT :' + PORT);
})