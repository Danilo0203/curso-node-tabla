const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');
const crearArchivo = async (x = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';
		for (let i = 1; i <= hasta; i++) {
			let multiplicacion = x * i;
			salida += `${x} x ${i} = ${multiplicacion}\n`;
			consola += `${colors.info(x)} ${'x'.error} ${i} ${'='.warn} ${colors.verbose(multiplicacion)}\n`.debug;
		}
		if (listar) {
			console.log('==================='.warn);
			console.log('   TABLA DEL'.blue, colors.warn(x).debug);
			console.log('==================='.warn);
			console.log(consola);
		}
		fs.writeFileSync(`./salida/tabla-${x}.txt`, salida);

		return `tabla-${x}.txt`.help;
	} catch (error) {
		throw error;
	}
};
/* const nombreArchivo = async () => {
	try {
		const archivo = await crearArchivo(x);
		return `El nombre del archivo creado es ${archivo}`;
	} catch (error) {
		throw error;
	}
}; */
module.exports = { crearArchivo };
/* module.exports = { nombreArchivo }; */
