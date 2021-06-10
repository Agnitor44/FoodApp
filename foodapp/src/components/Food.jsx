import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {favAdd, favSub} from '../actions/favAction'
import parse from 'html-react-parser';
import '../styles/food.css'
import { NavLink } from 'react-router-dom';

import '../styles/load.css'
import { useDispatch, useSelector } from 'react-redux';

const KEY = "23b1227d61fd4293a4be36a8b417258569"
export default function Food() {
    const params = useParams()
    const [can, setCan] = useState(false)
    const [food, setFood] = useState(null)
    const [sim, setSim] = useState(null)
    const [showStep, setShowStep] = useState(false)
    const dispatch = useDispatch()
    const fav = useSelector(state => state.favs)
    const linkMaker = (id) => {
        return `/food/${id}`
    }
    useEffect(async() => {
        setCan(false)
        await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${KEY}`).then(res => res.json()).then(data => setFood(data))
        await fetch(`https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=${KEY}`).then(res => res.json()).then(data => setSim(data.splice(0, 3)))
       setCan(true)
    

    }, [params])
 
 
    const listAdd = () => {
 
        const here = fav.findIndex(item => item.id === params.id)
        
        if(here > -1) {
           console.log('food sub')
         return   dispatch(favSub(params.id))
        }
        else {
            const obj = {
                id: params.id,
                title: food.title,
                img: food.image
               
            }
            return dispatch(favAdd(obj))
        }
    
     
 
 
     
       
       
    }
 
    return (
      
        can ?
        <section className = 'foodPage'>
           <div className="foodTitle">
               <div className="foodTitleUpper">
               <h1>{food.title}</h1>
               <button style = {fav.findIndex(item => item.id === params.id) > -1 ? {color: 'red'} : {color:"black"}}  onClick = {listAdd}><i class="fas fa-heart"></i></button>
               </div>
              
               <div className="foodTitle_under">
               <ul>
                {food.dishTypes.map(item => <li>{item} </li>)}
               </ul>
               <h3><i class="far fa-clock"></i>{food.readyInMinutes}min</h3>
               </div>
              
           </div>
           <div className="mainImgContainer">
           <img className = 'foodImgMain'src= {food.image} alt="" />
           </div>
           
           {
            (food.vegan||food.glutenFree||food.veryHealthy||food.dairyFree)
             &&
            <div className="addInfo">
            {food.vegan && <h3>Vegan <i class="far fa-check-square"></i></h3>}
            {food.glutenFree && <h3>Gluten Free <i class="far fa-check-square"></i></h3>}
            {food.veryHealthy && <h3>Healthy <i class="far fa-check-square"></i></h3>}
            {food.dairyFree && <h3>Dairy Free <i class="far fa-check-square"></i></h3>}

            </div>
           }
   <div className="summary">
            <h2>Summary</h2>
            <article>
                <p id = "htmlCatch">
                   {parse(food.summary) }
                </p>
            </article>
        </div>
        <div className="ingBox">
            {food.extendedIngredients.map(item => (
                <div className="ingElement">
                   {item.originalString}
                </div>
            ))}
        </div>
        {
            food.instructions &&
        <div className="foodRecipe">
        <h2>Recipe</h2>
        <article><p>
            {parse(food.instructions)}
            </p></article>
            <h3>Step by step<button onClick = {() => setShowStep(prev => !prev)}>{showStep ? "-" : "+"}</button></h3>
            {showStep &&
             <ol>
             {food.analyzedInstructions[0].steps.map(item => <li>{item.step} </li>)}
         </ol>
            }
       
        </div>
        }
        <div className="simSection">
            <h2>Similar Recipes</h2>
            <div className="simWrap">
            {sim.map(item => (
            <div className="simBox">
            <NavLink to = {linkMaker(item.id)}>{item.title} </NavLink>
            <h3><i class="far fa-clock"></i>{item.readyInMinutes}min</h3>
            </div>
            ))}
            </div>
          
          
        </div>
        </section>
        : 
        <div className="load">

        </div>
    )
}
