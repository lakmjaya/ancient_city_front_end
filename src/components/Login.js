import { getCities } from "../services/cities-api"
import { useState, useEffect } from "react"
import Create from "./CreateCity"
// import { Link } from "react-router-dom";


export default function Cities() {
    const [Cities, setCities] = useState([])
    useEffect( () => {
        getCities() // calling the function to get the data
        .then( res => setCities(res.data))
    }, [])
    console.log(Cities)
    return(
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
            <h1> Writer's Page of Ancient Cities</h1>
            <div>
            <div class="hero is-fullheight"> 
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <label for="email">Email</label>
                        <input class="input is-primary" type="text" placeholder="Email address"/>
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-primary" type="password" placeholder="Password"/>
                        
                    </div>
                    <div class="column">
                        <button class="button is-primary is-fullwidth" type="submit">Login</button>
                    </div>
                    
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}