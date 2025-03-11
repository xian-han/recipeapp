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
    //統一管理loading時間
    const loadingTime = 1000;
    //統一管理數量上限 0~20總共21個數字
    const accountLimits = 21;
    const getCartTotalPrice = ()=>{
        var totalPrice = 0;
        MenuList.map((menuitem)=>{
            const itemAccount = cartItem[menuitem.id];
            if(itemAccount>0)
                totalPrice += itemAccount * menuitem.price;
        })
        return totalPrice;
    }

    const plusCartAccount =(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:prev[cartId]+1}));
    };

    //temp
    const plusTempAccount =(cartId,tempItemAccount) =>{
        if(tempItemAccount<20){
            setTempItem((prev)=>({...prev,[cartId]:prev[cartId]+1}));
        }else if(tempItemAccount>=20){
            setTempItem((prev)=>({...prev,[cartId]:prev[cartId]}));
        }
    };

    const minusCartAccount=(cartId)=>{
        setCartItem((prev)=>({...prev,[cartId]:prev[cartId]>0?prev[cartId]-1:0}));
    };

    //temp
    const minusTempAccount =(cartId,tempItemAccount) =>{
        if(tempItemAccount>0){
            setTempItem((prev)=>({...prev,[cartId]:prev[cartId]>0?prev[cartId]-1:0}));
        }else if(tempItemAccount==0){
            setTempItem((prev)=>({...prev,[cartId]:prev[cartId]}));
        }
    };

    const updateTempAccount=(cartId,tempItemAccount)=>{
        if(tempItemAccount>0){
            setTempItem((prev)=>({...prev,[cartId]:tempItemAccount}));
        }
        else{
            alert("Account must be larger than 0.");
        }
    }

    const updateCartAccount=(cartId,tempItemAccount)=>{
        
        if(tempItemAccount>0){
            setTimeout(()=>{
                setCartItem((prev)=>({...prev,[cartId]:prev[cartId]+tempItemAccount}));
            },loadingTime);
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
        loadingTime,
        accountLimits,
        plusCartAccount,
        minusCartAccount,
        plusTempAccount,
        minusTempAccount,
        updateTempAccount,
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