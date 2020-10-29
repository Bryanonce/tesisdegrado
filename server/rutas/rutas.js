const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const baseDatos = require('../models/datos');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/datos',(req,res)=>{
	let anioIni = req.query.anioIni || 2019;
	let anioFin = req.query.anioFin || 2040;
	let mesIni = req.query.mesIni || 1;
	let mesFin = req.query.mesFin || 12;
	let diaIni = req.query.diaIni || 1;
	let diaFin = req.query.diaFin || 31;
	let horaIni = req.query.horaIni || 0;
	let horaFin = req.query.horaFin || 23;
	let minutoIni = req.query.minutoIni || 0;
	let minutoFin = req.query.minutoFin || 59;
	baseDatos.find({
		$and:[
        	{'anio': {$gte:`${anioIni}`}},
        	{'anio': {$lte:`${anioFin}`}},
        	{'mes': {$gte:`${mesIni}`}},
        	{'mes': {$lte:`${mesFin}`}},
        	{'dia': {$gte:`${diaIni}`}},
        	{'dia': {$lte:`${diaFin}`}},
        	{'hora': {$gte:`${horaIni}`}},
        	{'hora': {$lte:`${horaFin}`}},
        	{'minuto': {$gte:`${minutoIni}`}},
        	{'minuto': {$lte:`${minutoFin}`}}
    	]
	},'lat long')
	.exec((err,req)=>{
		if(err){
			res.status(400).json({
				ok: false,
				mensaje: "Error en el primer excec",
				err
			});
		}
		res.json({
			ok: true,
			usuarios: req
		})
	})
})
app.post('/datos',(req,res)=>{
	let fecha = new Date()
	let body = req.body;
	let datos = new baseDatos({
		mat: body.mat,
		lat: body.lat,
		long: body.long,
		anio: fecha.getFullYear(),
		mes: fecha.getMonth(),
		dia: fecha.getDay(),
		hora: fecha.getHours(),
		minuto: fecha.getMinutes()
	})
	datos.save((err,datoBd)=>{
		if(err){
			throw err
		}
		res.json({
			ok: true,
			usuario: datoBd
		})
	});

})

module.exports = app;