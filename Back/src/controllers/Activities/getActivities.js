const {Activity} = require('../../DB_connection')
 
const getActivities = (req,res) =>{

   res.status(200).send('Aqui estan todas las actividades')


}

module.exports = {getActivities}