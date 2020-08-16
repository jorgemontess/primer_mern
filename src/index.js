//Estamos creando un servidor muy basico
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongose } = require('./database');

const app = express();

//Settings

app.set('port', process.env.PORT || 3000);

//Middelwares --> secciones que se ejecutan antes de que lleguen a las rutas

app.use(morgan('dev'));
app.use(express.json());

//Routes / URL

app.use('/api/tasks',require('./routes/task_routes'));

//Static files

app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {

    console.log(`Server on port ${app.get('port')}`);

});
