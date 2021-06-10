import React from 'react'
import '../styles/list.css'
import {
     NavLink,
  } from "react-router-dom";

export default function Element({food}) {
    const linkMaker = (id) => {
        return `/food/${id}`
    }

    return (
        <div className = 'foodBox'>
            <img src = {food.image}/>
            <div className="infoBox">
         <NavLink to = {linkMaker(food.id)}><h1>{food.title}</h1></NavLink>  
        
            </div>
             
                

        </div>
    )
}
