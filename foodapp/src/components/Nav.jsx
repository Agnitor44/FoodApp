import React from 'react'
import {
    NavLink,  
  } from "react-router-dom";
import '../styles/nav.css'
export default function Nav() {
    return (
       <nav>
           <h1>FoodApp</h1>
           <ul>

               <li> <NavLink to = '/'>Home</NavLink></li>
                <li><NavLink to = '/favs'>Favs</NavLink></li>
              
            
           </ul>
       </nav>
    )
}
