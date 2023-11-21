const axios = require('axios')
const server = require('./src/server')
const { conn } = require('./src/DB_connection')
const PORT = 5000

conn.sync({force:true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Servidor arriba mostro: ${PORT}`)
    })
}).catch(error => console.log(error) )