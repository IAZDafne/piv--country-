
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pais from '../pais/Pais'
import Paginas from '../paginacion/Paginas'
import Espera from '../espera/Espera'
import './home.css'
import NavBar from '../NavBar/NavBar';



//ppp= paises por pagina
// p = paginacion 
// np = numero por pagina 
// pt = paises totales 

function Home (){
 const country = useSelector(state =>state.country)
console.log(country)
 const [page, setPage]=useState(1)
 const [ppp]=useState(10)
 const indexOfLastCountry= page * ppp
 const indexOfFirstCountry = indexOfLastCountry - ppp
 const pais = country?.slice(indexOfFirstCountry,indexOfLastCountry)
 const  p = np =>setPage(np)

    return(
        <>
        <main className='todohome'>
            <NavBar/>
            <div className='paises'>
                {
                    pais ? 
                    pais.map((e, id)=>{
                       return  <Pais props={e} key={id}/> }) :
                        <Espera/>
                    
                }

            </div>     
            <div>
                <Paginas 
                ppp={ppp}
                pt={country?.length}
                p={p}
                />
            </div>
        </main>
        
        
        </>
    )
}

export default  Home 