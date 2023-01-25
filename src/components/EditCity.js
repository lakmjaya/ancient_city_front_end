import {getCity, editCity} from "../services/cities-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

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
    const updatedCity = {description: e.target.description.value, complete: e.target.complete.checked}
    editCity(id, updatedCity)
     .then(response =>{
        console.log(response);
        nav(`/${id}`);
     })
     .catch(error => console.log(error));
}
 
   
    return (
        <div>
            <form onSubmit={editTheCity}>
            <h2>Edit the details of Ancient Cities</h2>
                <br/>
                Name : <input type='text' name='name' defaultChecked={data.name} /><br/>
                Image URL : <input type='text' name='image' defaultChecked={data.url} /><br/>
                Description:<textarea type='text' name='description' defaultValue={data.description}/><br/>
                Completed:<input type='checkbox' name='complete' defaultChecked={data.complete} />
                <input type='submit' />
            </form>
        </div>
      )
}

