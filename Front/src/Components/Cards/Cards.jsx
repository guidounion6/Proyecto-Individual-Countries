import React from 'react'

import Card from '../Card/Card'
import "./Cards.css"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Cards = ({allCountries}) => {

   const dispatch = useDispatch()
   const countries = useSelector((state) => state.allCountries)

   const [currentPage, setCurrentPage] = useState(1)
   const countriesPerPage = 10

   const lastCountry = currentPage*countriesPerPage
   const firstCountry = lastCountry-countriesPerPage
   const total = countries.length
   const currentCountries = allCountries.slice(firstCountry, lastCountry)
   

   const handlePage =(next)=>{
      setCurrentPage(next)
   }

   const pageNumbers = []
   for(let i = 1; i <= Math.ceil(total/countriesPerPage); i++) {
      pageNumbers.push(i)
   }

  
 return (
   <div>

    <div className='cards-list'>
     {currentCountries?.map(({id,name,flags,continents})=>(
      <Card 
      key={id}
      id={id}
      name={name}
      flags={flags}
      continents={continents}/>
      ))}
    </div>
    <div>
      { allCountries.length == 0 ? null : <button  onClick={()=> handlePage( currentPage - 1)} disabled={currentPage===1} >
            ˂
      </button> }

      {pageNumbers.map(number => (
        <button key={number} onClick={() => handlePage(number)}>{number}</button>
      ))}

      { allCountries.length == 0 ? null : <button  onClick={()=> handlePage( currentPage + 1)} disabled={lastCountry >= countries.length} >
            ˃
      </button>  }
      
    </div>
    </div>
 )
}

export default Cards
