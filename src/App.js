import NavBar from './Components/NavBar';
import Home from './Components/Home';
import MyCart from './Components/MyCart';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mycart' element={<MyCart></MyCart>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
