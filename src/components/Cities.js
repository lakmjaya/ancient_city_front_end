import { getCities } from "../services/cities-api"
import { useState, useEffect } from "react"
import Create from "./CreateCity"
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import '../css/title.css'


export default function Cities() {
    const [Cities, setCities] = useState([])
    useEffect( () => {
        getCities() // calling the function to get the data
        .then( res => setCities(res.data))
    }, [])
    console.log(Cities)
    return(
        // <div className='city'>
        <div class="columns">
            
            
            {/* <div className='create-form'> */}
            <div class="column">
            
                <Create />
            </div>
            
            <div class="column">
                <br/>
            <div class="columns">
            <p class="title"><u>The List of the Ancient Cities</u></p>
            </div>
            <br/>
            <ul>
            {Cities.map((city) =>{
                return (
                    <div class="columns">
                       <div>
                       <figure class="image is-128x128">
                       <img class="is-rounded" src={city.url}/>
                       </figure>
                       </div> 
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
                       
                    </div>
                    
                )
            })}
          </ul>
          </div>
        </div>
    )
}