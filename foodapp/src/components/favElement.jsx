import React from 'react'
import '../styles/favs.css'
import { useDispatch } from 'react-redux';
import {favAdd, favSub} from '../actions/favAction'
import { NavLink } from 'react-router-dom';

export default function FavElement({data}) {
    const dispatch = useDispatch()
    const linkMaker = (id) => {
        return `/food/${id}`
    }
    return (
        <div className = "favElement" >
            <img src= {data.img} />
            <button onClick = {() => dispatch(favSub(data.id))}><i class="fas fa-window-close"></i></button>
          <NavLink to = {linkMaker(data.id)}><h2>{data.title}</h2></NavLink>  
        </div>
    )
}
