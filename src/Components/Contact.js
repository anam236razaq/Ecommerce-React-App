import React from 'react'
import { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import Copyright from './Copyright'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <NavBar />
            <ContactForm />
            <ContactDetails />
            <NewsLetter />
            <Footer />
            <Copyright />
        </div>
    )
}

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim !== "" && email.trim !== "" && question.trim !== "") {
            setMessage("Thank you for Submitting the form");
            setTimeout(() => { setMessage(" "); }, 3000);
            setName("");
            setEmail("");
            setQuestion("");
        }
    }
    return (
        <>
            <hr />
            <div className='contact-us'>
                <div className='contact'>
                    <div className='contact-form' data-aos="fade-up">
                        <h3>Contact With Us</h3>
                        <h1>Don’t Google <br />Design Questions</h1>
                        <p>Your email address will not be published. Required fields are marked*</p>
                    </div>
                    <form className='form' onSubmit={handleSubmit} data-aos="fade-left">
                        <div>
                            <input type="text" placeholder='Your Name*' required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder='Your Email*' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <textarea placeholder='Question*' required value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                        <button type='submit' className='contact-btn'>Send A Message</button>
                    </form>
                    <div><p>{message}</p></div>
                </div>
                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3348.173391737617!2d-97.07393212540732!3d32.94643127531071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPatricia%20C.%204401%20Waldeck%20Street%20Grapevine%20Nashville%2C%20Tx%2076051!5e0!3m2!1sen!2s!4v1691873194971!5m2!1sen!2s"
                        width="700"
                        height="650"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Patricia C. 4401 Waldeck Street Grapevine Nashville, TX 76051"></iframe>
                </div>
            </div >
        </>
    );
}

function ContactDetails() {
    return (
        <div className='contact-details'>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-marker"></i>
                </div>
                <div className='contact-text'>
                    <h3>Meet Us In Office :</h3>
                    <p>Patricia C. 4401 Waldeck Street<br /> Grapevine Nashville, Tx 76051</p>
                </div>
            </div>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-envelope"></i>
                </div>
                <div className='contact-text'>
                    <h3>Our Email Address :</h3>
                    <p>Info@yourdomain.com<br />Info@dataanalytics.com</p>
                </div>
            </div>
            <div className='contact-col' data-aos="zoom-out">
                <div className='contact-icon'>
                    <i className="fi fi-rr-phone-call"></i>
                </div>
                <div className='contact-text'>
                    <h3>Contact Numbers :</h3>
                    <p>+99 (0) 101 0000 888<br />+99 (0) 555 6759 126</p>
                </div>
            </div>
        </div>
    )
}
