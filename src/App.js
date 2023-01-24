import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {EditTodo} from './components/EditTodo';
import Todo from './components/Todo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path='/' element={<Todos />}/>
        <Route path='/:id' element={<Todo />}/>
        <Route path='/:id/edit' element={<EditTodo />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
