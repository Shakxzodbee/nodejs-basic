const path = require('path')

console.log(__dirname);  // papkagaca bolgan yol


console.log(__filename); // filegacha bolgan yol



console.log(path.basename(__filename));  // tugrna fayilni nomi


console.log(path.dirname(__filename));  // papka nomi 


// exten name 
console.log(path.extname(__filename)); // fayl turi 


const pathObj = path.parse(__filename)
console.log(pathObj);


console.log(path.join(__dirname , 'database' , 'postresql' , 'db.js'));  // faylgaca bolgan yol