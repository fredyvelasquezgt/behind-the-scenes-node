let fs = require('fs') //modulo file system

// sin callbacks:

// let data = fs.readFileSync('example.txt') //en data alojo lo que tiene el txt

// console.log(data.toString());


// con callbacks: los dos args son error y data
//el programa no se bloquea y se sigue ejecutando


fs.readFile('example.txt', (error, data) => {
    if(error) return console.log(error);
    console.log(data.toString())
})


console.log('program ended')