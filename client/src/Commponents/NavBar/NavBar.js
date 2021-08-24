import React, {useState} from  'react'
import {useDispatch} from 'react-redux'
import {NavLink, Navlink} from 'react-router-dom'
import {searchByName} from '../../acctions/index'
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
   
    // const [click , setClick]= useState(false)
    // const  handleClick =() => setClick(!click)



    return(
        <>
        <NavLink exact to = "/" className='logo'>Atachi.Travel</NavLink>
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