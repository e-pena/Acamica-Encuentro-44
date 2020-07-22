const express = require('express');
const alumnos = require('./servicios/alumnos');
let app = express();

app.get('/acamica/:comision/alumnos', (req, res) => {
	let data = req.params;
	let nombre = req.query;
	let result = alumnos.getAlumnosByComision(data);
	let resultFiltrado = result.filter((a) => a.nombre == nombre.nombre);
	if (resultFiltrado.length == 0) {
		res.status(200);
		res.json(result);
	} else if (resultFiltrado.length > 0) {
		res.status(200);
		res.json(resultFiltrado);
	} else {
		res.status(404);
		res.send('No se encontraron resultados para la búsqueda');
	}
});

app.get('/acamica/:comision/alumnos/:id', (req, res) => {
	let comision = req.params.comision;
	let id = Number(req.params.id);
	let result = alumnos.alumnos[id - 1];
	if (result.comision == comision) {
		res.status(200);
		res.json(result);
	} else {
		res.status(404);
		res.send('No se encontraron resultados para la búsqueda');
	}
});

app.delete('/acamica/:comision/alumnos/:id', (req, res) => {
	let comision = req.params.comision;
	let id = Number(req.params.id);
	let result = alumnos.alumnos[id - 1];
	if (result.comision == comision) {
		alumnos.deleteAlumnosById(result);
		res.status(200);
		res.send('El alumno ha sido eliminado');
	} else {
		res.status(404);
		res.send('No se encontraron resultados para la búsqueda');
	}
});

app.listen(3000, () => {
	console.log('Servidor iniciado');
});
