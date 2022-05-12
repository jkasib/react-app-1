import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'
import Menu from './Menu'
import Contact from './Contact'
import About from './About'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content-home">
          <h1>Kasib's Pizzeria</h1>
          <p>Pizza to fit in any taste</p>
          <NavLink to='/menu'>
            <button className="order-now">Order Now</button>
          </NavLink>
        </div>
      </div>
      <Menu />
      <About />
      <Contact />
    </>
  )
}

export default Home