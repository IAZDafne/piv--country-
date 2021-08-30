import {useEffect, useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import{getCountry,getCountryDetail,postTuristica} from '../../acctions/index'




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

    const handlerSubmit = async (e) => {
        e.preventDefault();
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

   //hacfer cada unio por nomebre y luego mandar un objeto con el estado cada uno 

//     const [error, setError]=useState('')

//     const handleChange=(e)=>{
//         let target = e.target.value
//         if(e.target.name === 'dificulty'){
//             validate(target)
//         }
//         if(e.target.name === 'id'){
//             setActividad({
//                 ...actividad,
//                 id:[...actividad.id, target]
//             })
           
//             //actividad.id.concat(target)
//         }else(
//             setActividad({
//                 ...actividad,
//                 [e.target.name]:target
//             })
//         )
//     }
//     console.log(actividad,' soy actividad')
//     console.log(actividad.id,'soy id de act ')
//   console.log(handleChange,'soy handle')
//     const handlerSubmit= async  (e)=>{
//         e.preventDefault()
//         e.target.reset()
//         const msg= await creacion(actividad)
      
       
        
//     }
    
  
//     const  creacion =async (actividad)=>{
     
//         const {name,dificulty,duration,season,id}=actividad;
//         console.log(name,dificulty,duration,season,id,"holis")
//         if(!name||!dificulty||!duration||!season||!id[0]) {
//             return ('Favor de llenar todos los campos')}else{
//         const creado =await axios.post('http://localhost:3001/actividad',{
//             name,
//             dificulty,
//             duration,
//             season,
//             id
//         })
//         return creacion.data.msg
        
//     }}
     
//     const validate =(e)=>{
//         if(!/^[1-5]/.test(e)){
//             setError('Debe de ser de 1 a 5')
//         }else {
//             setError('')
//         }
//     }

       

    // const optionsSeason =[
    //     {value: 'invierno' , label : 'Invierno'},
    //     {value: 'otoño', label : 'Otoño' },
    //     {value: 'primavera', label: 'Primavera'},
    //     {value: 'verano', label : 'Verano'}
    
    // ]
    
        
    // const optionsCountry=country.map((e, id)=> {
    //     return e.id
    // })
    // console.log(optionsCountry,'yo soy map')
    function cambioPais(e) {
        setActividad(e.target.value)
    }


    //
    return (
        <> 
        <form onChange={handlerChange} onSubmit={handlerSubmit} className='formulario' >
            <input type='text' name ='name' placeholder='Nombre' ></input>
            <input name='difficulty' placeholder='1 a 5'type='number' id='dif' min='1' max='5'maxLength='1' ></input>
            <input type='number'name='duration' placeholder='1 a 24npm' id='dura' min='1' max='24'maxLength='2' ></input>
            <select name='season'>
              <option value='verano'> Verano</option> 
              <option value='invierno'> Invierno</option> 
              <option value='otoño'> Otoño</option> 
              <option value='primavera'> Primavera</option> 
            </select>
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
            <button>crear</button>

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