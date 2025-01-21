import React,{useContext} from 'react'

import { ShopContext } from '../helpers/ShopContext';
import {Trash} from 'phosphor-react';

function CartItem(props) {
    
    const {id,name,front_image,price} = props.data;
    const {cartItem,
        plusCartAccount,
        minusCartAccount,
        getCartTotalPrice,
        updateCartAccount,
        removeItemFromCart,
      }  = useContext(ShopContext);
    
    const cartAccount = cartItem[id];
    
    const handleChange =()=>{

    };
    return(
        <div className="cartItem">
            <div className="cartItem-imgContainer">
                <img src={front_image} alt="#"/>
            </div>
            <div className="cartItem-info">
                <div className="cartItem-info-name">
                    <h1>
                        {name}
                    </h1>
                </div>
                <div className="cartItem-info-price">
                    NT$ {price}
                </div>
                <a className="Trash" onClick={()=>removeItemFromCart(id)}>
                    <Trash size={16} />
                </a>
            </div>
            <div className="cartItem-controller">
                <button className="decreaceBtn" type="button" onClick={()=>minusCartAccount(id)}>&#45;</button>
                <input type="text" value={cartAccount} min="0" onChange={handleChange} />
                <button className="increaingBtn" type="button" onClick={()=>plusCartAccount(id)}>&#43;</button>
            </div>
            <div className="cartItem-Account">
                <h1>
                    NT$ {price*cartAccount}
                </h1>
            </div>
        </div>
    )
}

export default CartItem
