const express = require('express')
const app = express()

// app.use((req , res , next)=>{
// console.log('Middleare 1');
// next()
// })

app.use('/' , (req , res , next)=>{
    console.log('bu har doim ishlaydi');
    next()
})

app.use('/users',(req , res , next)=>{
    res.send('<h1>user page</h1>')
    })


    app.use('/',(req , res , next)=>{
res.send('<h1>expresdan salomlar</h1>')
next()
})


const PORT = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log('servering runnnig on PORT : 3000');
})
