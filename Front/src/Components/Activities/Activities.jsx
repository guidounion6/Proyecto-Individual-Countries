import axios from 'axios'
import { React, useState, useEffect }from 'react'


const Activities = ({id}) => {

  
  
const [activities, setActivities] = useState([]);

 useEffect(() => {

  try {
   axios.get("http://localhost:3001/countries/"+id)
         .then(response => {
         setActivities(response.data.Activities);
        })
    
   } catch (error) {
    return alert('No hay actividades para mostrar', error)
   }
 },[]);

 console.log(activities)

  return (
    <div>

      <h2>Activities:</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
          Name: {activity.name} - Dificultad: {activity.dificultad} - Duracion: {activity.duracion} min - Temporada: {activity.temporada}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Activities