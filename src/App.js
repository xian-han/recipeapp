import './App.css';
//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
//pages
import Home from './page/Home';
import Cart from './page/Cart';
import Menu from './page/Menu';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import { useEffect } from 'react';

import  {ShopContextProvider}  from './helpers/ShopContext';

import AOS from 'aos'; 
import 'aos/dist/aos.css';

function App() {
  
  useEffect(()=>{
    AOS.init();
  },[]);


  return (
    <div className="App">
    <ShopContextProvider>
    <Router basename='/recipeapp'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </ShopContextProvider>
    </div>
  );
}


export default App;
