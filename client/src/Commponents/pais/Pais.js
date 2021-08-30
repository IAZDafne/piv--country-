import {Link} from 'react-router-dom'
import './Pais.css'

function Pais ({props}){

    let { name, flag, region,id}=props
    console.log(props)


    return(
        <>
        <div className='card'>
            <Link to ={`/countries/${id}`} className='link'>
             <div className='cards'>
                 <img src={flag} className='bandera'/>
                 <h5  className='titulo'>{name}</h5>
                 <span className='continente'>{region}</span>
                 

             </div>
            </Link>
        </div>
        
        </>
    )
}
 export default Pais 