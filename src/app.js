const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const conexion = require('express-myconnection');
const app = express();

const customerRoutes = require('./routes/customer.js');

// configuracion de express
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// Peticiones
app.use(morgan('dev')); 
app.use(conexion(mysql, {
    host: 'localhost',
    database: 'CRUD',
    user: 'root',
    password: '43988157'
},'single'));

//rutas

app.use('/', customerRoutes); 

//archivos estaticos

app.use(express.static(path.join(__dirname,'public')));



app.listen(app.get('port'),() => {
    console.log('Se conecto al puerto 3000');
});

