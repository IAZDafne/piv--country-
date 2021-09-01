import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {turistica} from '../../acctions/index'
import {connect, useSelector } from 'react-redux';
import Espera from '../espera/Espera'
import './Actividadcard.css'
import NavBar from '../NavBar/NavBar';

function Actividadcard(props){;
    const actividad = useSelector(states => states.actividad)  
    console.log('soy act de card',actividad)

    useEffect(()=>{
        props.turistica()
    },[])
    
    
    //const name = actividad.map((e)=>{ e.name})
     

        return(
       <>
       <NavBar/>
       <div>
       {actividad ?
       <div>
       <h4>Nombre:{actividad.name}</h4>
       <h2>Duracion:{actividad.duration}</h2>
       <h2>Temporada:{actividad.season}</h2>
       <h2>Dificultad:{actividad.difficulty}</h2>
       {console.log(actividad.duration,'cosa')}
       {console.log('yo mer',actividad)}
       
       )
       </div>:
       <Espera/>
}         </div>
       </>
   )
}
export default Actividadcard