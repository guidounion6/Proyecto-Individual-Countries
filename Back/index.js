
const server = require('./src/server')
const { conn } = require('./src/sync/DB_connection')
const {syncAPItoDB} = require('./src/sync/syncAPItoDB')
const PORT = 3001

   
//servidor levantado esperando la respuesta del try/catch
server.listen(PORT, async ()=>{
        console.log(`Servidor arriba mostro: ${PORT}`)
 
try { 
    await conn.sync({force:true});
    console.log('Aca Databeisiamo todo');
    await syncAPItoDB();

} catch (error) {
    console.log('No se sincronizo la DB amiwo', error)
}})