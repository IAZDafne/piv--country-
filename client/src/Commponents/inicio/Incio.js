import React from 'react';
import './Inicio.css'
import { Link } from 'react-router-dom'


function inicio() {
    return (
        <>
        <div className='yaotzin'>
        <div >
            <h1 className='atachi'>ATACHI.TRAVELS</h1>
            </div>
            <Link className='linkplay'  to='/country'>
                <button className='botonPlay'>Entrar</button>
            </Link>
        </div>
        </>
    )
}
export default inicio;