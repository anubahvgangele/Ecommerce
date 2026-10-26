import './App.css';
import { Route,Routes } from "react-router-dom";
import { Navbar } from './component/navbar';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div >
    <div className=" bg-slate-900">
      <Navbar />
    </div>
    

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
