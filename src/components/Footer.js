import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>    
            <p className="footer-text">
                &copy; 2022 All rights reserved
            </p>
        </footer>  
    </>
  )
}

export default Footer