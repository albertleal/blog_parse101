/* global Parse */
//exportaremos un modulo con las operaciones de usuario

module.exports = {
      signUp: function (email, username, password) {
            //creamos una instancia usuario
            var user = new Parse.User();
            
            //rellenamos la instancia con los datos conocidos
            user.set('password', password);
            user.set('username', username);
            user.set('email', email);
            
            //devolvemos la promesa del registro de usuario
            return user.signUp();
      },
      login: function (username, password) {
            //devolvemos la promesa de login de usuairo 
            return Parse.User.logIn(username, password);
      }
};