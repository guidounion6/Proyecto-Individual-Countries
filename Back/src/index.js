const express = require('express')
const server = express()
const router = require('./routes/index')
const {conn} = require('./DB_connection')



conn.sync({force:true})
.then(()=>{
    server.listen(3001, ()=>console.log('Servidor arriba mostro'))
})
.catch((error)=>{
    console.log('Error al conectar', error)
})

server.use(express.json())


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/countries', router)