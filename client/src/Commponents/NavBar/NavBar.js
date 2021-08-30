import React, {useState} from  'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {searchByName} from '../../acctions/index'
import Filtro from "../filtro/FIltro"
import Filtroact from '../filtro/filtroact'
import './NavBar.css'

function NavBar(){
    const dispatch=useDispatch()
    const[input, Setinput]=useState('')

   const handleInput =(e) => {
       Setinput(e.target.value)
   }


    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(searchByName(input));
        Setinput('')
    }
   
   



    return(
        <>
        <Filtro/>
        <NavLink exact to = "/" className='logo'>Atachi.Travel</NavLink>
        <NavLink exact to = "/crear" className="crear">Crear</NavLink>
         <form className='form'>
             <input onChange={handleInput} 
             value={input} 
             type ='text' 
             placeholder='Pais' 
             spellCheck='false' 
             className='inputBuscar'
             />
             <button onClick={handleSearch} 
             className='boton buscar'>
                Buscar
             </button>


         </form>
        </>
    )
}

export default NavBar