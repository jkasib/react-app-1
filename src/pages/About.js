import React from 'react'
import './About.css'
import AboutImg from '../assets/multiplePizzas.jpeg'

const About = () => {
  return (
    <>
        <h1 className="title">About Us</h1>
        <div className="about-container">
            <div className="topContent">
                <img src={AboutImg} alt="aboutimg" />
            </div>
            <div className="bottom-content">
                <font>L</font>orem ipsum dolor, sit amet consectetur adipisicing elit. Error praesentium veniam ad fuga officia mollitia explicabo quae. Obcaecati, explicabo ipsam accusantium facere saepe corrupti nihil, id consequuntur, est fugit similique. Quia id quasi a sapiente eaque omnis alias unde repellendus voluptatibus aut dignissimos iusto nihil, accusamus perferendis qui. Odio, possimus facere qui temporibus ratione magni sit doloribus beatae neque eos quam recusandae dolores nihil dolorem laboriosam officia? Eveniet voluptatum doloremque facere nisi eum accusamus quidem nostrum, tenetur consequatur officia alias id est consectetur eligendi nihil veniam consequuntur, enim mollitia sequi. Neque perferendis ea incidunt numquam inventore rerum ratione sequi illum.
            </div>
        </div>
    </>
  )
}

export default About