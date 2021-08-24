import axios from 'axios'

export  const GET_COUNTRY = "GET_COUNTRY"
export const SEARCH_NAME = 'SEARCH_NAME'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const FILTER_ABC= 'FILTER_ABC'
export const FILTER_POBLACION = 'FILTER_POBLACION '
export const POST_TURISTICA= 'POST_TURISTICA'
export const All_TURISTICA = 'All_TURISTICA'

// router.use('/actividad',turistica)
// router.use('/obtener',country)
// router.use('/countries',paises)

export function getCountry(){
    return async function (dispatch){
        const response = await 
        axios.get( 'http://localhost:3001/countries');
        dispatch({ type:GET_COUNTRY, payload:response.data})
    }
}
export function searchByName(name){
    return async function(dispatch){
        const response = await 
        axios.get(`http://localhost:3001/countries/?name=${name}`)
        dispatch({
            type: SEARCH_NAME, payload:response.data
        })
    }
}

export function getCountryDetail(id){
    return async function (dispatch){
        const response= await 
        axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({
            type:GET_COUNTRY_DETAIL,
            payload:response.data
        })
    }
}
export function postTuristica(){
    return async function (dispatch){
        const response = await 
        axios.get('http//localhost:3001/turistica')
        dispatch({
            type:POST_TURISTICA,
            payload:response.data
        })
    }
}
export function filterabc(input){
    return{
        type:FILTER_ABC,
        payload:input
    }
}export function filterPoblacion(input){
    return {
        type:FILTER_POBLACION,
        payload:input
    }
}
export function filterqact (turistica){
    return{
        type: All_TURISTICA,
        payload: turistica
    }
}


