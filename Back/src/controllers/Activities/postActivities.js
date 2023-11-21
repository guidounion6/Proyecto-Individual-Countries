const {Activity} = require('../../DB_connection')
 
const postActivities = (req,res) =>{

   res.status(200).send('Aqui se generan nuevas actividades')


}

module.exports = {postActivities}