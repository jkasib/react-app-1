import React from 'react'
import {MenuList} from '../helpers/MenuList'
import './Menu.css'

const Menu = () => {
  return (
    <>
        <div className="menu-container">
            <h1 className="title">Our Menu</h1>
            <div className="menuList">

                {
                    MenuList.map((curElem, index) => {

                        const {name, image, price, oldPrice} = curElem;

                        return (
                            <>
                                <div className="menu" key={index}>
                                    <div className="img-content">
                                        <img src={image} alt="Pizza" />
                                    </div>
                                    <div className="content">
                                        <h1 className="name">{name}</h1>
                                        <p className="price">{price} <span>{oldPrice}</span> </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


                
            </div>
        </div>
    </>
  )
}

export default Menu