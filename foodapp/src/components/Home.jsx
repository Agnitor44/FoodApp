import React, {useEffect, useState} from 'react'
import HomeLayout from './ListLayout'
import '../App.css';
import '../styles/load.css'
import Filter from './Filter'
import Footer from './Footer'
const KEY = "23b1227d61fd4293a4be36a8b417258569"

export default function Home() {

    const [filters, setFilters] = useState('')
    
    const [data, setData] = useState(null)
    const [can, setCan] = useState(false)

  
      const moveF = (arg) => {
        const bar = document.querySelector('div.bar')
        const button = document.querySelector('button.filterShow')
          if(arg === 'close') {
            bar.style.transform = 'translateX(-100%)'
            button.style.transform = 'translateY(0%)'
            button.style.zIndex = '1'
          }
          else if(arg === 'open') {
            bar.style.transform = 'translateX(0%)'
            button.style.transform = 'translateY(-100%)'
            button.style.zIndex = '-2'
          }
       
       
      }
    useEffect(async() => {
        setCan(false)
     await fetch(`https://api.spoonacular.com/recipes/complexSearch?${filters[1] ? "query="+filters[1] +"&" : ""}${filters[0] ? "type="+ filters[0]+"$": ""}${filters[2] ? "minCalories="+filters[2][0]+"&"+"maxCalories="+filters[2][1]+"&": ""}${filters[3]?"offset="+filters[3]+"&":""}number=12&apiKey=${KEY}`)
      .then(res => res.json()).then(response => setData(response))
      setCan(true)
    }, [filters])

    return (
        <>
         <div className="app">
         
          <Filter move = {moveF} setFilters = {setFilters}/>
         
          <button className = 'filterShow' onClick = {() => moveF('open')} ><i class="fas fa-filter"></i></button>
          
            {
                    can ?
                    <>
                    <HomeLayout   items = {data.results}/>
                    </>
                    :
                    <div className="load">

                    </div>
            }
      
        </div>
        <Footer/>
        </>
    )
}
