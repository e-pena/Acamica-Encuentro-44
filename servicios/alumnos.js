let alumnos = [
	{
		id: 1,
		nombre: 'PepeA',
		apellido: 'Perez',
		comision: 'dwfs',
	},
	{
		id: 2,
		nombre: 'PepeB',
		apellido: 'Perez',
		comision: 'dwfs',
	},
	{
		id: 3,
		nombre: 'PepeC',
		apellido: 'Perez',
		comision: 'dwfs',
	},
	{
		id: 4,
		nombre: 'PepeD',
		apellido: 'Perez',
		comision: 'dwa',
	},
	{
		id: 5,
		nombre: 'PepeE',
		apellido: 'Perez',
		comision: 'dwa',
	},
	{
		id: 6,
		nombre: 'PepeF',
		apellido: 'Perez',
		comision: 'dwa',
	},
	{
		id: 7,
		nombre: 'PepeG',
		apellido: 'Perez',
		comision: 'bigdata',
	},
	{
		id: 8,
		nombre: 'PepeH',
		apellido: 'Perez',
		comision: 'bigdata',
	},
	{
		id: 9,
		nombre: 'PepeI',
		apellido: 'Perez',
		comision: 'bigdata',
	},
];

function getAlumnosByComision(data) {
	let alumnosPorComision = alumnos.filter((a) => a.comision == data.comision);
	return alumnosPorComision;
}

function deleteAlumnosById(data) {
	let alumno = data;
	let ubicacion = alumnos.indexOf(alumno);
	alumnos.splice(ubicacion, 1, 'alumno borrado');
	return alumnos;
}

module.exports = { alumnos, getAlumnosByComision, deleteAlumnosById };
