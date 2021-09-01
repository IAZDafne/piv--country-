import React, { useEffect } from 'react';
import { connect,useSelector } from 'react-redux';
import { todasActividades } from '../../acctions/index'

import { Link } from 'react-router-dom';



export function Actividades(props){
    let actividades = useSelector((state)=> state.todasActividades)
    useEffect(()=>{
        props.todasActividades()
    },[])
    return(
        <div>
          
            <div>
                <div>
            {actividades.map((act)=>{
                return <div className='divsAct' key={act.id}>
                   <Link to={`/actividadetail${act.name}`} > <h1>{act.name}</h1></Link>
                    <h4 >dificultad: {act.difficulty}</h4>
                    <h4 >duracion: {act.duration}</h4>
                    <h4 >temporada: {act.season}</h4>

                </div>
            })}
            </div>
            </div>
        </div>
    )
}

export default connect(null, {todasActividades})(Actividades)