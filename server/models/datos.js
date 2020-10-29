const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let objeto = {
	type: Number,
	required: [true, "Se necesita el dato completo"]
}

let datoSchema = new Schema({
	mat: objeto,
	lat: objeto,
	long: objeto,
	anio: objeto,
	mes: objeto,
	dia: objeto,
	hora: objeto,
	minuto: objeto
});

datoSchema.methods.toJSON = function(){
	let user = this;
	let userObject = user.toObject();
	delete userObject.mat;
	return userObject;
}

module.exports = mongoose.model('Datos',datoSchema);