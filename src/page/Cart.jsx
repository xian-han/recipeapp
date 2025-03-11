import React,{useContext} from 'react';
import '../styles/Cart.css'

import {MenuList} from '../helpers/MenuList';
import CartItem from '../Components/CartItem';
import {ShopContext} from '../helpers/ShopContext';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'phosphor-react';

function Cart() {
  
  const {cartItem,getCartTotalPrice} = useContext(ShopContext);

  const totalPrice = getCartTotalPrice();
  

  return (
    <div className="Cart">
      <div className="cartTitle">
        {
          totalPrice>0?(
          <h1>
            My Cart
          </h1>):(
            <div style={{height:'100px'}}></div>
          )
        }
      </div>
      <div className="cartList">
        <div className="cartList-grid">
          {
            totalPrice>0?(
              MenuList.map((menuitem,key)=>{
                if(cartItem[menuitem.id]>0){
                  return(
                  <CartItem         
                    key = {key}     
                    data = {menuitem}
                  />);
                }
              })
            ):(
              <div className="cartIsEmpty">
                <h1>
                  Your Cart is empty.
                </h1>
                <br />
                <div className="continueShop-container">
                  <Link to="/Menu">
                  <button className="countinueShop" type="button">
                    Countinue Shopping             
                  </button>
                  </Link>
                </div>
              </div>
            )
          }
          {
            totalPrice>0?(
            <div className="totalPrice">
              <div>
                <h2>
                  合計 NT$ {totalPrice}
                </h2>
              </div>
              <button type="button">
                <div className="countText">結帳</div><ArrowRight className="arrowRight" size={20}/>
              </button>
            </div>):(<></>)
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
