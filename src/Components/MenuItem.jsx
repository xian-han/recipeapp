import React,{useContext,useState} from 'react'
import {ShoppingCart} from 'phosphor-react'
import {ShopContext} from '../helpers/ShopContext'

function MenuItem({id,name,front_image,price}) {
  
  const [isTyping,setIsTyping] = useState(false);
  
  const {tempItem,plusTempAccount,minusTempAccount,updateCartAccount} = useContext(ShopContext);

  const tempItemAccount = tempItem[id];

  const handleFocus = () =>{
    setIsTyping(true);
  }

  const handleBlur = () =>{
    setIsTyping(false);
  }

  const handleChange = () =>{

  }

  return (
    <div className="menuItem">
      <div className="flip-Container" style={front_image!=""?{backgroundImage:`url(${front_image})`}:{backgroundImage:`url()`}}></div>
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
        <button className="addToCartBtn" type="button" onClick={()=>updateCartAccount(id,tempItemAccount)}>
        <ShoppingCart className="cartMark" size={32} hidden={true}/>
          add to cart
          {/* {
          //   addFlag?(
          //   <div className="hidden_spinner">
          //   <div className="spinner">
          //     <div className="spinnerRed spinnerSector"></div>
          //     <div className="spinnerBlue spinnerSector"></div>
          //     <div className="spinnerGreen spinnerSector"></div>
          //   </div>
          //  </div>):
          // (
          
          // )
           }  */}
        </button>        
      </div>
    </div>
  )
}

export default MenuItem
