import React from 'react'
import Card from '../Card/Card'
import "./Cards.css"
import {useDispatch, useSelector} from 'react-redux'

const Cards = ({allCountries}) => {


 return (
    <div className='cards-list'>
     {allCountries?.map(({id,name,flags,continents})=>(
      <Card 
      key={id}
      id={id}
      name={name}
      flags={flags}
      continents={continents}/>
      ))}
    </div>
 )
}

export default Cards
