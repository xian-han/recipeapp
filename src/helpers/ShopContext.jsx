import React,{createContext,useState} from 'react';
import {MenuList} from './MenuList';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    var cart = {};
    for(let i=1;i<MenuList.length+1;i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) =>{
    const [tempItem,setTempItem] = useState(getDefaultCart);
    const [cartItem,setCartItem] = useState(getDefaultCart);
    
    const getCartTotalPrice = ()=>{
        var totalPrice = 0;
        MenuList.map((menuitem)=>{
            const itemAccount = cartItem[menuitem.id]
            if(itemAccount>0)
                totalPrice += itemAccount * menuitem.price;
        })
        return totalPrice;
    }

    const plusCartAccount =(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:prev[cartId]+1}));
    };

    //temp
    const plusTempAccount =(cartId) =>{
        setTempItem((prev)=>({...prev,[cartId]:prev[cartId]+1}));
    };

    const minusCartAccount=(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:prev[cartId]>0?prev[cartId]-1:0}));
    };

    //temp
    const minusTempAccount =(cartId) =>{
        setTempItem((prev)=>({...prev,[cartId]:prev[cartId]>0?prev[cartId]-1:0}));
    };

    const updateCartAccount=(cartId,tempItemAccount)=>{
        
        if(tempItemAccount>0){
            setCartItem((prev)=>({...prev,[cartId]:prev[cartId]+tempItemAccount}));
        }
        else{
            alert("Account must be larger than 0.");
        }
    };
    const removeItemFromCart=(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:prev[cartId]=0}));
        setTempItem((prev)=>({...prev,[cartId]:prev[cartId]=0}));
    };

    const contextValue = {
        tempItem,
        cartItem,
        plusCartAccount,
        minusCartAccount,
        plusTempAccount,
        minusTempAccount,
        updateCartAccount,
        getCartTotalPrice,
        removeItemFromCart,
    };
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};