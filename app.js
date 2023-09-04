/* const fs = require('fs'); */
const { option, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red',
});
/* console.log(process.argv); */
/* console.log(argv); */
/* console.log('base: yargs', argv.base); */
/* let x = 6; */
/* console.log(process.argv); */
/* const [, , arg3 = 'base=5'] = process.argv;
const [, x = 5] = arg3.split('='); */
/* console.log(x); */
crearArchivo(argv.base, argv.listar, argv.hasta)
	.then((nombreArchivo) => console.log(nombreArchivo, 'creado'.info))
	.catch((err) => console.log(err));
/* console.log('===================');
console.log(`   TABLA DEL ${x}`);
console.log('===================');
let salida = '';
for (let i = 1; i <= 10; i++) {
	let multiplicacion = x * i;
	salida += `${x} x ${i} = ${multiplicacion}\n`;
}
console.log(salida); */

/* fs.writeFile(`tabla-${x}.txt`, salida, (err) => {
	if (err) throw err;
	console.log(`tabla-${x}.txt creado`);
});
 */
/* fs.writeFileSync(`tabla-${x}.txt`, salida);
console.log(`tabla-${x}.txt creado`); */
