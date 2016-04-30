/**
* Ḿódulo principal de la aplicación. Configura la aplicación,
* carga las dependencias (modelos, rutas) mediante inyección
* y lanza el servidor.
*/
var express = require("express"),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    config = require("./config"),
    jwt = require('express-jwt'),
    unless = require('express-unless');


var app = express();

//Si modo desarrollo, se activa log de peticiones
if(app.settings.env=='development'){
  app.use(morgan('dev'));
}

//Secret usado para firmar JWT's
app.set('jwtsecret',config.jwtsecret);
//URL de mongo según modo. Primero prueba la de HEROKU, si no, fichero de config.
app.set('dbUrl',process.env.MONGODB_URI || config.db[app.settings.env]);
//Ponemos el puerto según modo. Primero prueba el de HEROKU, si no, fichero de config.
app.set('port',process.env.PORT || config.port[app.settings.env]);

//Servimos el frontend en "/"
app.use(express.static('./frontend/app'));

//Añadimos el middleware de gestor de acceso y JWT.
require('./security/jwt-handler')(app);

//Aceptaremos JSON y valores codificados en la propia URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Cargamos los modelos
app.models = require('./models');





//Cargamos las rutas
require('./routes')(app);


//Conectamos y lanzamos el servidor
mongoose.connect(app.get('dbUrl'));
mongoose.connection.once('open', function(){

  console.log("[INFO] Connected to MongoDB via Mongoose " + app.get('dbUrl'));
  app.listen(app.get('port'),function(){
    console.log("[INFO] Express server running on port " + app.get('port') + " (" + app.settings.env  + ")");
  });
});

module.exports = app;