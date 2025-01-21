import React,{useState} from 'react'
import '../styles/Menu.css'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'
function Menu() {
  // style={{display:'none'}}
  const [isLoading,setIsLoading] = useState(false);
  const handleLoading = ()=>{
    setIsLoading(true);
    setTimeout(()=>{
      console.log("added to cart");
      setIsLoading(false);
    },2000);
  };
  return (
    <div className="Menu">
      <div className="title">
        Dessert Menu
      </div>
      <div className="MenuList">
        { 
          MenuList.map((menuitem,key)=>{
            return(
              <MenuItem
                key = {key}
                id = {menuitem.id} 
                name={menuitem.name}
                front_image={menuitem.front_image}
                price={menuitem.price}
              />);
            }
          )
        }
      </div>
    </div>
  )
}

export default Menu
