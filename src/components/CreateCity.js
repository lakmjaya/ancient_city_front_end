import {useNavigate} from "react-router-dom"
import {createCity} from "../services/cities-api"

function Create() {
    const nav = useNavigate()
    const createTheCity = (e) => {
        e.preventDefault();
        const city = { description: e.target.description.value, complete: false}
        createCity(city)
        nav('/')
    }

return(
    <div>
        <h4>Create a Ancient City Details</h4>
        <form onSubmit={createTheCity}>
            Name of the City :<input type='text' name='name' id="dsc"/>
            <br/>
            Image URL :<input type='text' name='url' id="dsc"/><br/>
            Description of the City :<textarea type='text' name='description' id="dsc"/>
            <br/>
            <input type='submit' />
        </form>
    </div>
)
}
export default Create