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
       
       
        <div className='atachi-logo'>

        <NavLink exact to = "/country" className='logo'>Atachi.Travel</NavLink>
        
        </div>

    
        <div className='linkcrear' >
        <NavLink exact to = "/crear" className="crear">Crear</NavLink>
        <Filtro/>
        {/* </div>
         <div className='buscar'> */}
         <form className='form'>
             <div className='inputBucar'>
             <input onChange={handleInput} 
             value={input} 
             type ='text' 
             placeholder='Pais' 
             spellCheck='false' 
             className='inputBuscar'
             />
             </div>
             
             <button onClick={handleSearch} 
             className='boton buscar'>
                Buscar
             </button>


         </form>
         </div>
         
        </>
    )
}

export default NavBar