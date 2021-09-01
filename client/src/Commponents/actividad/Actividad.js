import React from 'react';
import Prueba from './ActividadSola'
import {Link} from 'react-router-dom'

function ActivityFilter() {
 return (
       <>
      <h1>Actividades</h1>
      <Prueba/>
      <Link to = '/crear'>Crear   Nueva Actividad</Link>
          
        </>
    )
}

export default ActivityFilter;
