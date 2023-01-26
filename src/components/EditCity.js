import {getCity, editCity} from "../services/cities-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import 'bulma/css/bulma.min.css';
import '../css/city.css'

export const EditCity = () =>{
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect( () => {
        getCity(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])


const editTheCity = e => {
     e.preventDefault()
    const updatedCity = {name: e.target.name.value, url : e.target.url.value, description: e.target.description.value, complete: e.target.complete.checked}
    editCity(id, updatedCity)
     .then(response =>{
        console.log(response);
        nav(`/${id}`);
     })
     .catch(error => console.log(error));
}
 
   
    return (
        <div className='container is-fluid'>
        
        <div className='card'>
        <div className='card-content'>
        <h4><u>Eidt the selected Ancient City Details</u></h4>
        <form onSubmit={editTheCity}>
        <label class="label">Name of the City :</label><input class="input" type='text' name='name' defaultValue={data.name} />
            <label class="label">Image URL :</label><input class="input" type='text' name='url' defaultValue={data.url} />
            <label class="label">Description of the City :</label><textarea class="textarea is-info" type='text' name='description' defaultValue={data.description}/>
            <label class="label">The City Details Eidited:<label class="checkbox"><input type='checkbox' name='complete' defaultChecked={data.complete} /></label></label>
            <input className='button is-primary' type='submit' />
            <div class="column"><button class="button is-success" onClick={()=>{nav('/cities')}}>return to main page</button> </div>
        </form>
        </div>
        </div>
        
        </div>
      )
}

