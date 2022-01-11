const mongoose = require('mongoose');
require('dotenv').config(); //Modulo para leer las variables de entorno

const URI = process.env.MONGODB_URI
/*
(async ()=>{
    try{
        const db = await mongoose.connect(URI);
        console.log('connected to ', db.connection.name)
    }
    catch(err){
        console.log(err);
    }
})()*/

mongoose.connect(URI)
    .then(db => console.log(db,'DB is connected'))
    .catch(err => console.log(err, 'error'))
    
module.exports = mongoose;