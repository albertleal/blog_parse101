/* global Parse */
//Creando un servicio de registro para nuestra aplicación
Parse.Cloud.define("signUp", function (request, response) {

	var password =  request.params.password;
	var email =  request.params.email;
	var username =  request.params.username;
	//validamos los parametros necesarios
	if(password !== undefined && email !== undefined && username !== undefined){
		//incluimos el modulo de usuarios y llamamos la funcion de registro 
		//esta nos devuelve una promesa
		require('cloud/modules/User').signUp(email, username, password).then(function (user) {
			//si el proceso de registro es correcto, devolvemos el usuario
			response.success(user);
		}).fail(function (error) {
			//si el proceso de registro es incorrecto, devolvemos error
			response.error(error);
		});
	} else {
		//validación incorrecta, devolvemos error
		response.error("password, email and username are required as parameter");
	}
});

//Creando un servicio de login para nuestra aplicación
Parse.Cloud.define("login", function (request, response) {

	var password = request.params.password;
	var username = request.params.username;
	if (password !== undefined && username !== undefined) {
		require('cloud/modules/User').login(username, password).then(function (user) {
			response.success(user);
		}).fail(function (error) {
			response.error(error);
		});
	} else {
		response.error("password and username are required as parameter");
	}
});