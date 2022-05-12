import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <h1 className="title">Contact Us</h1>
        <div className="contact-container">
            <div className="contact-left">
                <img src={PizzaLeft} alt="contact" />
            </div>
            <div className="contact-right">
                <form action="POST">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label> <br />
                        <input autoComplete='off' type="text" name="fullName" placeholder='Enter Full Name...' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label> <br />
                        <input autoComplete='off' type="text" name="email" placeholder='Enter Email Address...' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="message" cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact