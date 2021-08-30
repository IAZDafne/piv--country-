import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { filterabc,filterPoblacion,filterqact } from "../../acctions/index"
import {useSelector} from 'react-redux'

function Filtro (){
   
    const dispatch =useDispatch()
    const country=useSelector(state=>state.country)
    
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
   


    const handleActivity = e =>{
        dispatch (filterqact(
            e.target.value 
        ))
    }
     const options= [
    {value:'az',label:'AZ'},
    {value:'za',label:'ZA'}
     ]



    return(
        <>
        <label htmlFor="order">
        <span>A-Z</span>
        </label>
        <select id="order" onChange={handleAlphabet} className='az'>
            <option value="">Default</option>
            <option value='az'>AZ</option>
            <option value ='za'>ZA </option>

        </select>
        <label htmlFor="order">
        <span>Poblacion</span>
        </label>
        <select id="order" onChange={handlePoblacion} className='az'>
            <option value=" ">Default</option>
            <option value='hihg'>+Poblacion</option>
            <option value='less'>-Poblacion </option>
 
        </select>
        {/* <select onChange={handleActivity}>
            <option >Selecione Actividad</option>
            {country.map((e)=>{
                return <>
                <option value ={e.turisticas}>{e.turisticas}</option>
                </>
            })}

        </select> */}

        
        </>
    )
}

export default Filtro 