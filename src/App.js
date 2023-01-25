import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {EditCity} from './components/EditCity';
import City from './components/City'
import Cities from './components/Cities'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Cities />}/>
        <Route path='/:id' element={<City />}/>
        <Route path='/:id/edit' element={<EditCity />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
