import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'


export default function About() {
    return (
        <div>
            <Header />
            <NavBar />
            <AboutUs />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    );
}
function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <hr />
            <div className='about-us'>
                <div className='about-text' data-aos="fade-right">
                    <h5>Welcome To Phlox</h5>
                    <h1>Who We Are ?</h1>
                    <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the  upper surface of the impenetrable foliage of my trees, and but a few stray<br />

                        gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me .<br />

                        when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .</p>
                    <Link to="/Contact"><button className='about-btn'> Contact Us</button></Link>
                </div>
                <div className='about-img' data-aos="fade-right">
                    <img src='/Images/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png' alt='About-us Img' />
                </div>
            </div>
        </>
    );
}
