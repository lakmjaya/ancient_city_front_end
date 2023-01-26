import axios from 'axios'
const baseURL = 'https://city-api-back-end.onrender.com/todo'
//const baseURL = 'http://localhost:3001/cities'

export const getCities = ()=> {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

// show one 
export const getCity =(id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the City
export const editCity = (id, updatedCity) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedCity);
    return response;
}

// create the City
export const createCity = (city) => {
    const URL = baseURL
    const response = axios.post(URL, city)
    return response
}

// Delete the City
export const deleteCity = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}