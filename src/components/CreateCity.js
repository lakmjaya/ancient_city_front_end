import {useNavigate} from "react-router-dom"
import {createCity} from "../services/cities-api"
import 'bulma/css/bulma.min.css';
import '../css/cities.css'

function Create() {
    const nav = useNavigate()
    const createTheCity = (e) => {
        e.preventDefault();
        const city = { name: e.target.name.value, url: e.target.url.value, description: e.target.description.value, complete: false}
        createCity(city)
        nav('/cities')
    }

return(
    <div class="control"> 
        <div className='card'>
        <div className='card-content'>
        <h4>Create a Ancient City Details</h4>
        <form onSubmit={createTheCity} id='cityForm'>
        <label class="label" id="name">Name of the City :</label><input class="input" type='text' name='name' id="dsc"/>
            <label class="label" id="url">Image URL :</label><input class="input" type='text' name='url' id="dsc"/>
            <label class="label" id="dsc">Description of the City :</label><textarea class="textarea is-info" placeholder="description" type='text' name='description' id="dsc"/><br/>
            <input className='button is-primary' type='submit' onclick={() => {document.getElementById("cityForm").reset()}}/>
        </form>
        
         <div><button class="button is-success" onClick={()=>{nav('/')}}>Login Out</button> </div>
        </div>
        </div>
    </div>
)

}
export default Create