const {Activity} = require('../../sync/DB_connection')
 
const getActivities = async() =>{

   return await Activity.findAll()


}

module.exports = {getActivities}