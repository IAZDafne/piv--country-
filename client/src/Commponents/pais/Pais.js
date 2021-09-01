import {Link} from 'react-router-dom'
import './Pais.css'

function Pais ({props}){

    let { name, flag, region,id}=props
    console.log(props,'soy propspais')


    return(
        <>
        <div className='flip-cardr'>
        <div className='card'>
            <Link to ={`/countries/${id}`} className='link'>
           <img src={flag} className='banderas' />
                 
                 
             <h5 >{name}</h5>
             <span className=' items'>{region}</span>
                 

                 
             
          

            </Link>
        </div>
        </div>
        
        </>
    )
}
 export default Pais 