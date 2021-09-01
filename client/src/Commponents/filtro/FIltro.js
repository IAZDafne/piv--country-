import {React, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterabc,filterPoblacion,filterqact,filtroContinente,todasActividades} from "../../acctions/index"
import {useSelector} from 'react-redux'


function Filtro (){
   
    const dispatch =useDispatch()
    const country=useSelector(state=>state.country)
    const actividad = useSelector(state=>state.todasActividades)
    console.log('yo quiero lo ',country)
    console.log('actff',actividad)

    useEffect(()=>{
        dispatch(todasActividades())
    },[])

    let handleAlphabet = e=>{
        dispatch (filterabc(
            e.target.value
            ))
    }
    console.log(filterabc)
    
    const  handlePoblacion = e =>{
        dispatch (filterPoblacion(
            e.target.value
        ))
    }
   


    const  handlecont=(e)=>{
        dispatch(filtroContinente(
            e.target.value
     ))
    }

    const handleAct=(e)=>{
        dispatch(filterqact(
            e.target.value
        ))
    }
     const hola =(e)=>{
         country.map((e)=>{
             return e.turisticas.name
         })
     }
     
     console.log('variablefea',hola)

     console.log('si guarde cambios')
    return(
        <>
        <label htmlFor="order">
        <span>A-Z</span>
        </label>
        <select id="order" onChange={handleAlphabet} className='az'>
            <option value="">Alpha</option>
            <option value='az'>A-Z</option>
            <option value ='za'>Z-A </option>

        </select>
        <label htmlFor="order">
        <span>Poblacion</span>
        </label>
        <select id="order" onChange={handlePoblacion} className='az'>
            <option value=" ">Poblacion</option>
            <option value='hihg'>+ Poblacion</option>
            <option value='less'>- Poblacion </option>
 
        </select>
        <label htmlFor="order">
            <div>
        <span>Continente</span>
        </div>
            <select id ='order' onChange={(e)=>handlecont(e)}>
                <option value=''>Selecione un continente</option>
                <option value='Americas'>Americas</option>
                <option value='Africa'>Africa</option>
                <option value='Europe'>Europa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Polar'>Polar</option>
                <option value='no encontrada'>No Enontrada</option>
            </select>
        </label>
       
        <label htmlFor="order">
            <div>
        <span>Actividad</span>
        </div>
           <select id= 'order' onChange={(e)=>handleAct(e)}>
                <option value=''>Selecione actividad</option>
             {actividad.map((e)=>{
                 return<>
                 <option value={e.name}>{e.name}</option>
                 </>

             })
             } 

          </select>

        </label>
        
        
        </>
    )
}

export default Filtro 