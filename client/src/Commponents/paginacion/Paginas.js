import './Paginas.css'
import { useSelector} from 'react-redux'



function Pagina ({ppp,pt, p}){
//ppp= paises por pagina 
//pt = todos los paises 
// p = paginacion 
// np = numero de paginas 

const country =useSelector(state=> state.country)
console.log('contry pag', country)
const np =[]
for (let i= 1; i<= Math.ceil(pt/ppp); i++){
    np.push(i)

}
console.log(np)   
return(
        <>
        <nav className='completa'>
            <ul className='pag' >
                {np.map(n=>(
                    <li key={n} className= "page"> 
                         <button onClick={()=> p(n)} className='pag-link'>
                             {n}
                         </button>
                    </li>
                )
                )}
            </ul>
        </nav>
        </>
    )
}

export default Pagina 