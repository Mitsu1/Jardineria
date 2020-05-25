var tabla = [
	{ id: 201758356, nombredeusuario: "AlanMarcial16", edad: 21, correo: "alan.marcial@alumno.buap.mx", genero: "Masculino", fechanac:"16-05-1999" },
	{ id: 201798326, nombredeusuario: "Shaury21", edad: 21, correo: "shaury.santiago@alumno.buap.mx", genero: "Femenino", fechanac:"21-06-1999" },
];

window.onload = cargarEventos;

function cargarEventos() {
	document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
	document.getElementById("nuevo-usuario").addEventListener("submit", nuevoUsuario, false);
}

function mostrarTabla(){
	var cuerpoTabla = document.getElementById("equipos-tabla");
	var tablaLlena = "";

	for (var i = 0; i < tabla.length; i++){
		tablaLlena += "<tr><th>" + tabla[i].id + "</th><th>" + tabla[i].nombredeusuario + "</th><th>" + tabla[i].edad + "</th><th>" + tabla[i].correo + "</th><th>" + tabla[i].genero + "</th><th>" + tabla[i].fechanac + "</th></tr>";
	}

	cuerpoTabla.innerHTML = tablaLlena;

}

function nuevoUsuario(event){
	event.preventDefault();

	var idIntroducidoPorUsuario = document.getElementById("id").value;
	var nombredeusuarioIntroducidoPorUsuario = document.getElementById("nombredeusuario").value;
	var edadIntroducidoPorUsuario = document.getElementById("edad").value;
	var correoIntroducidoPorUsuario = document.getElementById("correo").value;
	var generoIntroducidoPorUsuario = document.getElementById("genero").value;
	var fechanacIntroducidoPorUsuario = document.getElementById("fechanac").value;

	var nuevoUsuario = {id: idIntroducidoPorUsuario, nombredeusuario: nombredeusuarioIntroducidoPorUsuario, edad: edadIntroducidoPorUsuario, correo: correoIntroducidoPorUsuario, genero: generoIntroducidoPorUsuario, fechanac: fechanacIntroducidoPorUsuario};
	tabla.push(nuevoUsuario);
}