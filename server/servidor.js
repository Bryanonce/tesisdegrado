require('./config/config');
const app = require('./rutas/rutas');
const mongoose = require('mongoose');


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