import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {turistica} from '../../acctions/index'
import { useSelector } from 'react-redux';
import  Card from './Actividadcard'

function ActivityFilter() {

    const dispatch = useDispatch();
    const country = useSelector(state => state.country)
    const actividad = useSelector(states => states.actividad)
    const [act, setAct]=useState()
    console.log('soy country',country)
     console.log('soy act',actividad)

     useEffect(()=>{dispatch(turistica())},[])

     let activities = actividad.map(e => {
        return e.name
    })
    const filterActivities = new Set(activities);
    let resultActivities = [...filterActivities];
    console.log('soy actividad3',resultActivities)

    let countries = actividad.map(e => e.countries)
    console.log('soy countries',countries) 

    let countryNames = [];
    countries.map(e => e.map(e => countryNames.push(e.name)))  

    console.log('soy nombre countries',countryNames)

    const filterCountryNames = new Set(countryNames);
    let resultCountries = [...filterCountryNames];

     console.log('duplicado',resultCountries)

    let countriesArr = []
    for (let i = 0; i < resultCountries.length; i++) {
        let count = country.filter(e => e.name === resultCountries[i])
        countriesArr.push(count)
    }

    console.log('soy arr ',countriesArr)

    return (
       <>
       <Card></Card>
       <div>

           <h4>Actividad</h4>
           <div>

           </div>
       </div>
       
       </>
    )
}

export default ActivityFilter;

{/* <div >

//             <h1>Actividad Turistica: {resultActivities[0] && resultActivities}</h1>
//             <h2>{resultActivities[0] ? 'Paises donde se realiza:' : null}</h2>

//             {
//                 countriesArr.map(e => e.map(e => (
//                     <div  key={e.id}>
//                         <Link to={`//countries/:/${e.id}`}>
//                             <h4>{e.name}</h4>
//                         </Link>
//                     </div>
//                 )))
//             }

//         </div> */}