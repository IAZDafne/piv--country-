import {getCountryDetail} from '../../acctions/index'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect}  from 'react'
import {Link, useParams}  from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Espera from '../espera/Espera'
import './detalle.css'

function Detalle () {
    const dispatch=useDispatch()
    const params = useParams()
    const {id} = params 
    console.log(id)
    const country =useSelector(state=> state.countrydetail )
     console.log('soy',country)
    useEffect(()=>{
        dispatch (getCountryDetail(id))
    }, [dispatch,id])
    console.log('hols', getCountryDetail())
    //
    
    return (
        <> 
        <NavBar/>
        <div>
            {country ?
            <div>
                <h4 className='titulo'>{country.name}</h4>
                <img src={country.flag} className='bandera'/>
                <h2> Area:{country.area}</h2>
                <h2> Capital:{country.capital}</h2>
                <h2> Poblacion:{country.population}</h2>
                <h2> Region:{country.region}</h2>
                <h2> Subregion:{country.subregion}</h2>
                <h2> Actividad:{country.turisticas.length >=1 ? country.turisticas.map((e)=>{
                    return e.name
                })
                 : <Link to ='/crear'>Crear</Link>}

                </h2>
                {console.log('hola',country.name)}
                {console.log(country)}
                {console.log('soy act',country.turisticas)}
                



                

            </div>:
            <Espera/>
            }
        </div>

        </>
    )
    
}
// Array.isArray(country.turisticas)&&
//                 country.turisticas.lenght>=1 ? country.turisticas.map((turisticas)=>{
//                     return turisticas.name

export default Detalle
