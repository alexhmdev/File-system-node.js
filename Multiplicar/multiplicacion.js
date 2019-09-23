const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
}
let createFile = (base) => {
    return new Promise ( (resolve, reject) => {
        //let base = 9;
        let table = '';
        for(let i = 1; i <= 10; i++){
            let tabla = `${i}.-${base} x ${i} = ${base * i}`;
            table = `${table}\n${tabla}`;
            fs.writeFile(`EjemploTabla${base}.txt`, `${table}`, (error) => {
                if(error){
                    reject(error);
                }
                else{
                    resolve(`EjemploTabla${base}.txt`);
                }
            });}
        
        
    });
}

module.exports = {
    createFile,
    listarTabla,
    createFile
}

