import { 
    GET_COUNTRY,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    FILTER_POBLACION,
    GET_ACTIVIDAD,
    All_TURISTICA,
    FILTER_ABC,
    FILTRO_ACT,
} from "../acctions"

console.log('holis' , FILTRO_ACT)
const initialState={
    country:[],
    todasActividades:[],
    countrydetai:[],
    actividad:[],
    copycountry:[]
}
function rootReducer(state=initialState,action){
switch(action.type){
    case GET_COUNTRY: return{
        ...state,
        country:action.payload,
        copycountry:action.payload

    }
    case GET_ACTIVIDAD: return{
        ...state,
        todasActividades:action.payload
    }
    case SEARCH_NAME: return{
        ...state,
        country:action.payload
    }
    case GET_COUNTRY_DETAIL: return {
        ...state,
        countrydetail:action.payload
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
                return a.population > b.population ? -1 : 1
            })
        } 
        return{
             ...state,
             country:[...state.country].sort((a,b) =>{
                 return a.population > b.population ? 1 : -1
             })

        }

    }
    case All_TURISTICA: {
       if(!action.payload) return{...state, country:state.copycountry}
       
       return{
           ...state,
           country:state.copycountry.filter((pais)=>pais.turisticas.find((act)=>act.name===action.payload ))
       }
    
    }
    case FILTRO_ACT:{
        
            
          if(!action.payload) return{...state,country:state.copycountry }
          return{
              ...state,
              country:state.copycountry.filter(e => e.region.includes(action.payload))
          }      
             


       
    }
   default : return state
}
}console.log(All_TURISTICA)
export default rootReducer

