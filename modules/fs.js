const fs = require('fs')
const path = require('path')

//papka yaratish 
// fs.mkdir(path.join(__dirname , '/folder') , {} , (err) =>{
// if(err) throw err
// console.log('Papka yaratildi');
// })

// file yaratish 
// fs.writeFile(path.join(__dirname, '/folder', 'my.text'), 'Node orqali yaratildi', (err) => {
//     if (err) throw err
//     console.log('file yaratildi');
// })

// filega malumot qoshish uchun 
// fs.appendFile(path.join(__dirname, '/folder', 'my.text'), '\n shokh orqali yaratildi', (err) => {
//     if (err) throw err
//     console.log('file yaratildi');
// })


// fileni malumotini korish uchun 
// fs.readFile(path.join(__dirname, '/folder' , 'my.text') , 'utf-8' , (err , data)=>{
//     if(err) throw err
//     console.log(data);
// })


// file nomini ozgartirish uchun 
// fs.rename(
//     path.join(__dirname, '/folder', 'my.text'),
//     path.join(__dirname, '/folder', 'youe.text'),
//     (err)=>{
//         if(err)throw err
//     }
// )