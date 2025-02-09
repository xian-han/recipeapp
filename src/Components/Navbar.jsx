import React,{useState,useEffect,useContext} from 'react'
import Basque from '../dessert/Basque2.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import {ShopContext} from '../helpers/ShopContext'
import {MenuList} from '../helpers/MenuList'

function Navbar() {

  const {cartItem}=useContext(ShopContext);
  
  const checkSamepage = (thisTag,path) =>{
    if(window.location.href === (window.location.origin+path)){
      window.location.reload();
    }
  };

  const toggleNavbar = () =>{
    setTurnOnLink(!turnOnLink)
  };

  const [turnOnLink,setTurnOnLink] = useState(false);
  
  function getCartTotalAccounts(){
    var cartTotalAccounts = 0;
    MenuList.map((menuitem) => cartTotalAccounts += cartItem[menuitem.id])
    return cartTotalAccounts;
  }

  const cartTotalAccounts = getCartTotalAccounts();

  const cartTotalAccounts_css = {
    backgroundColor: cartTotalAccounts>0? "rgb(255,51,0)":"transparent",
    border: cartTotalAccounts>0? "2px solid rgb(255, 51, 0)":"none",
  };

  return (

    <div className = "navbar">
        <div className="leftSide">
          <Link to = "/" onClick={(thisTag)=>checkSamepage(thisTag,"/")}>
            <img src={Basque} alt="None"/>
          </Link>
          <label className="hiddenToggle" htmlFor="toggleInput">
            <ReorderIcon/>
          </label>
          <input type="checkbox" id="toggleInput"></input>
          <ul className="hiddenLinks" id={(turnOnLink)?"turnOn":"turnOff"}>
            <li>
              <Link to="/" onClick={(thisTag)=>checkSamepage(thisTag,"/")}> 
                Home 
              </Link>
            </li>
            <li>
              <Link to="/Menu" onClick={(thisTag)=>checkSamepage(thisTag,"/Menu")}> 
                Menu 
              </Link>
            </li>
            <li>
              <Link to="/Cart" onClick={(thisTag)=>checkSamepage(thisTag,"/Cart")}>
                <ShoppingCart size={32}/>
              </Link>
              <Link to="/Cart" className="hidden_cartTotalAccounts" style={cartTotalAccounts_css} onClick={(thisTag)=>checkSamepage(thisTag,"/Cart")}>
                <span>
                {cartTotalAccounts>0?cartTotalAccounts:""}
                </span>
              </Link>
            </li>
          </ul>
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
          <Link to ="/Cart" className="cartTotalAccounts" style={cartTotalAccounts_css} onClick={(thisTag)=>checkSamepage(thisTag,"/Cart")}>
            <span>
            {cartTotalAccounts>0?cartTotalAccounts:""}
            </span>
          </Link>
          
          
        </div>
    </div>
  );
}

export default Navbar


