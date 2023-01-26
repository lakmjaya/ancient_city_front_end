import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCity, deleteCity } from "../services/cities-api";
import 'bulma/css/bulma.min.css';
import '../css/city.css'

export default function City(){
    const nav = useNavigate()
    
    return(
        
        <div>
            <div class="control"> 
        <div className='card'>
        <div className='card-content'>
        <h4> Welcome to the Ancient Cities App</h4>
        <div>
                       <figure class="image is-128x128">
                       <img class="is-rounded" src='https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_2x3.jpg'/>
                       </figure>
                       
                       <div><button class="button is-success" onClick={()=>{nav('/cities')}}>Login to App</button> </div>
        
        </div> 
        </div>
        </div>
    </div>
             
        </div>
    )
}