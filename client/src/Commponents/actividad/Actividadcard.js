import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {turistica} from '../../acctions/index'
import { useSelector } from 'react-redux';
import Espera from '../espera/Espera'
import './Actividadcard.css'

function Actividadcard(){
    const dispatch = useDispatch();
    const actividad = useSelector(states => states.actividad)
    const country = useSelector (state=>state.country)   
    console.log('soy act de card',actividad)
    console.log('soy pais card',country)
    useEffect(()=>{dispatch(turistica())},[])


   
    
    let nombre = actividad.map(e => {
        return e.name
    })
      console.log('soy name card', nombre )

        return(
       <>
       { actividad ?
       <div>
       <h4>Nombre:{actividad.name}</h4>
       <h2>Duracion:{actividad.duration}</h2>
       <h2>Temporada:{actividad.season}</h2>
       <h2>Dificultad:{actividad.difficulty}</h2>
       {console.log(actividad.duration)}
       {console.log('yo mer',actividad)}
       </div>:
       <Espera/>
}
       </>
   )
}
export default Actividadcard