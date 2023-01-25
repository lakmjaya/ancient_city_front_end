import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCity, deleteCity } from "../services/cities-api";

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
      <h2>
        Ancient - Cities:
      </h2>
        <h3>{city.name}</h3>
        <img src={city.url}/>
        <h4>{city.description}</h4>
       {/* Completed:<input type='checkbox' defaultChecked={city.complete}></input> */}
      <button onClick={()=>{nav(`/${id}/edit`)}}>edit</button>
      <button onClick={deleteTheCity}>delete</button>
      <button onClick={()=>{nav('/')}}>return to main</button>
    </div>
    )
}