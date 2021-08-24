import './Paginas.css'



function pagina ({ppp,pt, p}){
//ppp= paises por pagina 
// tp = todos los paises 
// p = paginacion 
// np = numero de paginas 

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
                    <li key={n} className= "pagina"> 
                         <button onClick={()=> p(n)} className='siguient'>
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

export default pagina 