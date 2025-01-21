import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from  '../dessert/Basque1.jpg'
import '../styles/Home.css'
function Home() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000"
    className="Home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div  data-aos="zoom-in" data-aos-duration="3000" className="headerContainer">
        <div className="headerInfo">
          <h1>Battkery</h1>
          <p>Welcome to Bettkery</p>
        </div>
        <div className="orderButton-container">
          <Link to="/Menu">
            <button className="orderButton" type="button">ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
