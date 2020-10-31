require('./config/config');
const app = require('./rutas/rutas');
const mongoose = require('mongoose');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


mongoose.connect(process.env.urlDataBase,
	{
 		useNewUrlParser: true,
 		useCreateIndex: true
 	}
	,(err,res)=>{
	if(err){
		throw err;
	}
	console.log("La base de datos ha sido conectada")
});

app.listen(process.env.PORT,()=>{
	console.log("Escuchando el puerto 3000");
});