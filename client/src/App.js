import './App.css';
import Login from './pages/login/Login.js';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
