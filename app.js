//este programa sirve para multiplicar
const { createFile , listarTabla } = require('./Multiplicar/multiplicacion');

const argumentos = require('yargs')

    .command('listar','imprime en consola la tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite : {
            alias: 'l',
            default: 10
        }
    })
    .command('crear','crea un archivo en base a la tabla',{
        base:{
            demand: true,
            alias:'b'
        }
    })
    .help()
    .argv;
let comando = argumentos._[0];

switch (comando) {    
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
    break;
    case 'crear':
            createFile(argumentos.base);
            break;

        default:
            console.log(`comando no reconocido: ${comando}`);
}
// createFile(base).then(res => console.log(`archivoCreado : ${res}`))
// .catch(error => console.log('x.x'));
