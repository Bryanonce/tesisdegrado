//=========================
//   Puerto de Servidor
//=========================
process.env.PORT = process.env.PORT || 3000;

//=========================
//         Entorno
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================
//       Base de datos
//=========================
let urlDataBase;
if(process.env.NODE_ENV === 'dev'){
	urlDataBase = 'mongodb://localhost:27017/tesis';
}else{
	urlDataBase = process.env.MONGO_URI;
}

process.env.urlDataBase = urlDataBase; 
