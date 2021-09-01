import { useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {Link}from 'react-router-dom'




function Crear (){

    const dispatch =useDispatch()
const country =useSelector(state=> state.country)

 
    const [actividad , setActividad] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        country:[]

    })



 console.log('te amo',setActividad)
 console.log(country,'soy pais ')
    
    
   
    const [errors, setErrors] = useState('')

    const handlerChange = (e) => {
        let target = e.target.value;
        if (e.target.name === 'difficulty') {
            validate(target);
        }
        if (e.target.name === 'country') {
            setActividad({
                ...actividad,
                country: [...actividad.country, target]
            });
        } else {
            setActividad({
                ...actividad,
                [e.target.name]: target
            });
        }
    }
    console.log(actividad,' soy actividad 1234')
    const handlerSubmit = async (e) => {
        e.preventDefault();
        e.target.reset()
        const msg = await sendActivity(actividad);
        if (msg) alert(msg);
        setActividad({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            country: [],
            msg,
        });
    }
    const { name, difficulty, duration, season } = actividad;
    console.log('soy act',actividad)
    const sendActivity = async (actividad) => {
        const { name, difficulty, duration, season, country } = actividad;
        if (!name || !difficulty || !duration || !season || !country) return alert('Todos los campos son obligatorios')
        if (errors) alert('La dificultad ' + errors.toLowerCase())
        const result = await axios.post('http://localhost:3001/actividad', {
            name,
            difficulty,
            duration,
            season,
            country,
        })
        return result.data.msg
    }
    console.log(sendActivity)
    const validate = (e) => {
        if (!/^[1-5]$/.test(e)) {
            setErrors('Debe ser un valor entre 1 y 5')
        } else {
            setErrors('');
        }
    }

  
    function cambioPais(e) {
        setActividad(e.target.value)
    }
    
    const options = actividad.map((e)=>{
        return e.name
    })
    console.log('map 2',options)

    //
    return (
        <> 
         <div className='atachi-logo'>

         <Link exact to = "/country" className='logo'>Atachi.Travel</Link>

          </div>
          <div className='titulo'  >
             <h1>Crear tu actividad</h1>
            <p>Crear una actividad para paises especificos </p> 
          </div>
        <form onChange={handlerChange} onSubmit={handlerSubmit} className='formulario' >
            <div className='Nombre'>
            <span>Nombre</span>
            <input type='text' name ='name' placeholder='Nombre' ></input>
            </div>
            <div>
             <span>Dificultad</span>   
            <input name='difficulty' placeholder='1 a 5'type='number' id='dif' min='1' max='5'maxLength='1' ></input>
            </div>
            <div className='duracion'>
            <span>Duración</span>
            <input type='number'name='duration' placeholder='1 a 24' id='dura' min='1' max='24'maxLength='2' ></input>
            <span>Hrs</span>
            </div>
            <div className='temporada'>
            <span>Temporada</span>
            <select name='season'>
                <option value=''>Temporada </option>
              <option value='verano'> Verano</option> 
              <option value='invierno'> Invierno</option> 
              <option value='otoño'> Otoño</option> 
              <option value='primavera'> Primavera</option> 
            </select>
            </div>
            <div className='pais'>
            <span>Pais</span>
            <select  name = 'country' value={country.name} onChange={cambioPais}>
            <option >Seleccionar paises</option>
            {country.map((e)=>{
                return <> 
                
                <option value={e.name}>{e.name}</option>
              
            </>
             //return<option value={e.id}>{e.name}</option>
                 
        })
            }
                
            
                
            </select>
            <div>
                
            </div>
           
            <button>Crear</button>
            </div>
        </form>
        </>
    )
}

export default Crear 
{/* <Select
            isMulti
            closeMenuOnSelect={false}
            options={optionsCountry}
            isClearable={true}
            ></Select> */}