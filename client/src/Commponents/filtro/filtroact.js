import {useSelector} from 'react-redux'


export function Filter({ selector }) {
    const countries = useSelector((store) => store.country);
  
    const filters = {
      continents: [],
      turisticas: [],
    };
    console.log('soy filter con',filters)
    countries.forEach((e) => {
      if (e.region && !filters.continents.includes(e.region)) {
        if (e.region !== "") {
          filters.continents.push(e.region);
        }console.log('cont 125',e.region)
      }
      if (e.turisticas) {
        e.turisticas.forEach((e) => {
          if (!filters.turisticas.includes(e.name)) {
            filters.turisticas.push(e.name);
          }
        }); 
      }
      
    });
   
    let activities = filters.turisticas;
    console.log('soy act 235',activities)
    let regions = filters.continents;
    console.log('soy filter 253',filters)
    if (activities) {
      return (
        <>
          <select
            className="select"
            id="continents"
            onChange={(e) => selector(e, "continent")}
          >
            <option value="nada">Choose a continent</option>
            {regions &&
              regions.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
          </select>
          <select
            className="select"
            id="activities"
            onChange={(e) =>(e, "activity")}
          >
            <option value="nada">Choose an activity</option>
            {activities &&
              activities.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
              {console.log('mestramelo',activities)}
          </select>
          <button
            className="btn"
            value=""
            onClick={() => selector({ target: { value: "" } }, "apply")}
          >
            APPLY
          </button>
          <button
            className="btn"
            value=""
            onClick={() => selector({ target: { value: "" } }, "delete")}
          >
            DELETE FILTERS
          </button>
          </>
      );
    }
  }
  
  export default Filter;