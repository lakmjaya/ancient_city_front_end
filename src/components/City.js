import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCity, deleteCity } from "../services/cities-api";
import 'bulma/css/bulma.min.css';
import '../css/city.css'

export default function City(){
    const nav = useNavigate()
    const {id} = useParams()// destructuring the id parameter for use
    const [city, setCity] = useState({}) // setting up our state
    useEffect(() => {
        getCity(id) // getting the one Todo from the api using the id
        .then(res => setCity(res.data))}, [])
        console.log(city)
    const deleteTheCity = ()=>{
            //delete function needs to go here
        deleteCity(id);
            //nav back to the main screen
        nav('/')
    }

    return(
        <div>
          <div className='container is-fluid'>
      <div className='card'>
      
        <div className='card-content'>
            <h1 >Ancient City Name: {city.name}</h1>
            <article class="tile is-child box">
            <figure class="image is-16by9">
            <img src={city.url}/>
          </figure>
          </article>
            <h2 ><u>Description</u> </h2><h4>{city.description}</h4>
            
        </div>
        
        <div class='card-footer'>
        <div class="column"><button class="button is-warning" onClick={()=>{nav(`/${id}/edit`)}}>edit</button></div>
        <div class="column"><button class="button is-danger" onClick={deleteTheCity}>delete</button></div>
        <div class="column"><button class="button is-success" onClick={()=>{nav('/cities')}}>return to main page</button> </div>
      </div>
      </div>
        

    </div>
      
    </div>
    )
}