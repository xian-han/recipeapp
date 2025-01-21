import React,{useState} from 'react'
import Basque from '../dessert/Basque2.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'


function Navbar() {

  const checkSamepage = (thisTag,path) =>{
    if(window.location.href === (window.location.origin+path)){
      window.location.reload();
    }
  };

  const toggleNavbar = () =>{
    setTurnOnLink(!turnOnLink)
  };

  const [turnOnLink,setTurnOnLink] = useState(false);
  
  return (

    <div className = "navbar">
        
        <div className="leftSide">
          <Link to = "/" onClick={(thisTag)=>checkSamepage(thisTag,"/")}>
            <img src={Basque} alt="None"/>
          </Link>
          <div className="hiddenLinks" id={(turnOnLink)?"turnOn":"turnOff"}>
            <Link to="/" onClick={(thisTag)=>checkSamepage(thisTag,"/")}> 
              Home 
            </Link>
            <Link to="/Menu" onClick={(thisTag)=>checkSamepage(thisTag,"/Menu")}> 
              Menu 
            </Link>
            <Link to="/Cart" onClick={(thisTag)=>checkSamepage(thisTag,"/Cart")}>
              <ShoppingCart size={32}/>
            </Link>
          </div>
        </div>

        <div className="rightSide">
          <Link to ="/" onClick={(thisTag)=>checkSamepage(thisTag,"/")}>
            Home
          </Link>
          <Link to ="/Menu" onClick={(thisTag)=>checkSamepage(thisTag,"/Menu")}>
            Menu
          </Link>
          <Link to ="/Cart" onClick={(thisTag)=>checkSamepage(thisTag,"/Cart")}>
            <ShoppingCart size={32}/>
          </Link>
          <button type="button" onClick={toggleNavbar}>
            <ReorderIcon/>
          </button>
        </div>
    </div>
  );
}

export default Navbar


