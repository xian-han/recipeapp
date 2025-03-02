import React,{useContext,useState,useEffect} from 'react'
import {ShoppingCart} from 'phosphor-react'
import {ShopContext} from '../helpers/ShopContext'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MenuItem({id,name,front_image,price}) {
  
  const [isTyping,setIsTyping] = useState(false);
  
  const {tempItem,loadingTime,plusTempAccount,minusTempAccount,updateCartAccount} = useContext(ShopContext);

  const tempItemAccount = tempItem[id];

  const [clickFlag,setClickFlag] = useState(false);

  var addToCartContent = <div className="cartMarkContainer">
    <ShoppingCart className="cartMark" size={25}/>
    <span>
      add to cart
    </span>
  </div>;

  var hidden_spinner = <div className="hidden_spinner">
    <div className="spinner">
      <div className="spinnerRed spinnerSector"></div>
      <div className="spinnerBlue spinnerSector"></div>
      <div className="spinnerGreen spinnerSector"></div>
    </div>
  </div>;

  const handleFocus = () =>{
    setIsTyping(true);
  }

  const handleBlur = () =>{
    setIsTyping(false);
  }

  const handleChange = () =>{

  }
  useEffect(()=>{
    if(clickFlag){
      setTimeout(()=>{
        setClickFlag((prev)=>!prev);
      },loadingTime);
    }
  },[clickFlag])

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="menuItem">
      <div className="flip-Container" data-aos="flip-left" style={front_image!=""?{backgroundImage:`url(${front_image})`}:{backgroundImage:`url()`}}></div>
      <div className="MenuInfo">
        <p className="name">{name}</p>
        <p className="price">NT${price}</p>
      </div>
      <div className="cartController">
        <button className="decreacingBtn" type="button" onClick={()=>minusTempAccount(id)}>&#45;</button>
        <input 
          value={isTyping?" ":tempItemAccount} 
          className="account" 
          type="text" 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
          onChange={handleChange}
          placeholder="Enter Account"
        />
        <button className="increacingBtn" type="button" onClick ={()=>plusTempAccount(id)}>&#43;</button>
        <div className="addBtnContainer">
          <button className="addToCartBtn" type="button" 
          onClick={()=>{
              updateCartAccount(id,tempItemAccount)
              setClickFlag((prev)=>!prev)
            }}>
          {
            clickFlag?(hidden_spinner):(addToCartContent)
          }
          </button>        
        </div>
        
      </div>
    </div>
  )
}

export default MenuItem
