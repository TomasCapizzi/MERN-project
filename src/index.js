const express = require('express');
const morgan = require('morgan'); //Modulo Morgan para mostrar en la terminal los console.log
const path = require('path'); //Modulo path
const { mongoose } = require('./database');
require('dotenv').config(); //Modulo para leer las variables de entorno

const app = express();

// Configuración
//app.set('port',process.env.PORT || 3000 )


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes (Modificar la ruta segun proyecto)
app.use('/api/tasks',require('./routes/task.routes')) //Indico donde esta la carpeta public


//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen(3000, ()=>{
    console.log('server on port 3000', process.env.MONGODB_URI);
})

