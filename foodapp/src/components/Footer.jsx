import React from 'react'
import '../styles/footer.css'
import {
    NavLink,  
  } from "react-router-dom";
export default function Footer() {

    const linkMaker = () => {

        const rand = Math.floor(Math.random()*1000) 

        return `/food/${rand}`
    }
    return (
        <div className = "footer">
            <div className="textureFoot">
                <h1>Cook with us!</h1>
                <NavLink to = {linkMaker()}>Try Today</NavLink>
            </div>
        </div>
    )
}
