import { 
    GET_COUNTRY,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    FILTER_POBLACION,
    POST_TURISTICA,
    All_TURISTICA,
    FILTER_ABC} from "../acctions"


const initialState={
    country:[],
    copyCountry:[],
    countrydetai:[]
}
function rootReducer(state=initialState,action){
switch(action.type){
    case GET_COUNTRY: return{
        ...state,
        country:action.payload
    }
    case SEARCH_NAME: return{
        ...state,
        country:action.payload
    }
    case GET_COUNTRY_DETAIL: return {
        ...state,
        countrydetai:action.payload
    }
    case FILTER_ABC:{
       if (!action.payload) return {
           ...state,
           country:[...state.country].sort((a,b)=>{
               return a.added < b.added ? 1 : -1
           }
              )
        }
        if(action.payload==="az")return{
            ...state,
            country:[...state.country].sort((a,b) =>{
                return a.name > b.name ? 1 : -1
            })
        }
        return {
            ...state,
            country:[...state.country].sort((a,b)=>{
                return a.name > b.name ? -1 : 1

            })
        }
    }
    case FILTER_POBLACION: {
        if(!action.payload) return {
            ...state,
            country:[...state.country].sort((a,b)=>{
                return a.added < b.added ? 1 : -1
            })
        }
        if(action.payload==="hihg") return {
            ...state,
            country:[...state.country].sort((a,b)=>{
                return a.population > b.population ? 1 : -1
            })
        } 
        return{
             ...state,
             country:[...state.country].sort((a,b) =>{
                 return a.population > b.population ? -1 : 1
             })

        }

    }
    case All_TURISTICA: {
        if(!action.payload) return{
            ...state,
            country: state.copyCountry
        }
        return { 
            ...state,
            country:state.copyCountry.filter(e=>{
                e.turistica.includes(action.payload) 
            }

                
                )
        }
    }

   default : return state
}
}

export default rootReducer

