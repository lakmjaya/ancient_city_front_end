import { getCities } from "../services/cities-api"
import { useState, useEffect } from "react"
import Create from "./CreateCity"
import { Link } from "react-router-dom";


export default function Cities() {
    const [Cities, setCities] = useState([])
    useEffect( () => {
        getCities() // calling the function to get the data
        .then( res => setCities(res.data))
    }, [])
    console.log(Cities)
    return(
        <div className='city'>
            <h1>Ancient City List</h1>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
            <div className='create-form'>
                <Create />
            </div>
            <ul className='list'>
            {Cities.map((city) =>{
                return (
                    <div>
                        
                       <li>
                       <Link to={`/${city._id}`}>{city.name}
                        
                        </Link>
                        {/* <a href={`/${city._id}`}>{city.name}</a> */}
                        </li>
                        {/* <div>
                        <li><a href={`/${city._id}`}>{city.complete}</a></li>           
                        </div>  */}
                    </div>
                    
                )
            })}
          </ul>
        </div>
    )
}