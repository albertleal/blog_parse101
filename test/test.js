var Parse = require('parse').Parse;
var PARSE_APPLICATION_ID = "put_your_app_id_here";
var PARSE_JAVASCRIPT_KEY = "put_your_javascript_key_here";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

signUp('albert@albertleal.com', 'albertleal', 'abcd1234').then(function (user) {
	//despues de registrar, tratamos de hacer login
	console.log('registro OK');
	login('albertleal', 'abcd1234').then(function (user) {
		console.log('login OK');
		console.log(user);
	}).fail(function (error) {
		console.error(error);
	});		
}).fail(function (error) {
	console.error(error);
});	

function signUp(email, username, password){
	return 	Parse.Cloud.run("signUp",{
		'username': username,
		'email': email,
		'password': password
	});
}
function login(username, passowrd) {
	return 	Parse.Cloud.run("login",{
		'username': username,
		'password': passowrd
	});
}