import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-col' data-aos="fade-left">
                <img src='/Images/hero-img.png' alt='Footer Img' />
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Visit Link</strong>
                <Link to='/Shop'>Shop</Link>
                <Link to='/'>Privacy</Link>
                <Link to='/'>Terms&Conditions</Link>
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Company</strong>
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/Contact'>Contact Us</Link>
            </div>
            <div className='footer-col col4' data-aos="fade-left">
                <strong>Contact</strong>
                <p>+99 (0) 101 0000 888</p>
                <p>Info@yourdomain.com</p>
            </div>
            <div className='footer-col' data-aos="fade-left">
                <strong>Address</strong>
                <p>Patricia Amedee 4401<br />
                    Waldeck Street Grapevine <br />Nashville, Tx 76051</p>
            </div>
        </div>
    )
}
