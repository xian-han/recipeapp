import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  TwitterIcon  from '@mui/icons-material/Twitter';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import  LinkedinIcon  from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <footer className="Footer">
      <div className="socialMedia">
        <Link to={"https://www.google.com"} >
          <InstagramIcon/>
        </Link>
        <Link to={"https://www.google.com"}>
         <TwitterIcon /> 
         </Link>
         <Link to ={"https://www.google.com"}>
         <FacebookIcon /> 
         </Link>
         <Link to ={"https://www.google.com"}>
         <LinkedinIcon />
         </Link>
      </div>
      <p>&copy; 2024 XianHan.com</p>
    </footer>
  )
}

export default Footer
