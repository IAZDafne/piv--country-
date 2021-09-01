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
        <div className='todiss'>
        <div className='atachi-logo'>

<Link exact to = "/country" className='logo'>Atachi.Travel</Link>

 </div>   
 
        <div className='tododetalle'>
            {country ?
            <div className='carddetalle'>
               
                <h4 className='titulo'>{country.name}</h4>
                <img src={country.flag} className='bandera'/>
                <h2> Area: {country.area/1000000} Millones de km<sup>2</sup></h2>
                <h2> Capital: {country.capital}</h2>
                <h2> Poblacion: {country.population/100000} Millones de Personas</h2>
                <h2> Region: {country.region}</h2>
                <h2> Subregion: {country.subregion}</h2>
                <Link to='/actividad' className='link'>
                <h2> Actividad: {country.turisticas.length >=1 ? country.turisticas.map((e)=>{
                    return e.name
                })
                : <Link to ='/crear' className='link'>Crear</Link>}

                </h2> </Link>
                {console.log('hola',country.name)}
                {console.log(country)}
                {console.log('soy act',country.turisticas)}
                



                

            </div>:
            <Espera/>

            }
            
        
        </div>
        </div>
        
        </>
    )
    
}
// Array.isArray(country.turisticas)&&
//                 country.turisticas.lenght>=1 ? country.turisticas.map((turisticas)=>{
//                     return turisticas.name
//<div id="image-detail" style={{ backgroundImage: `url(${country.flag})`, objectFit: 'cover' ,with:'1000'}}> 
//</div>
export default Detalle
