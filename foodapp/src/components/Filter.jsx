import React, {useState, useRef, useCallback} from 'react'
import '../styles/filter.css'

import Slider from '@material-ui/core/Slider';

export default function Filter({setFilters, move}) {
    const inpRef = useRef()
    const [check, setCheck] = useState({
        maincourse: false,
        sideDish: false,
        dessert: false,
        appetizer: false,
        salad: false,
        bread: false,
        breakfest: false,
        soup:false,
        beverage: false,
        sauce: false,
        marinade: false,
        fingerfood: false,
        snack: false,
        drink: false
     })

     const [offset, setOffset] = useState(0)

     const [cal, setCal] = useState([0, 3000])

     const handleCalChange = (event, newValue) => {
        setCal(newValue);
      };

     const handleSub = (e) => {
        e.preventDefault()
        const asArray = Object.entries(check);
        const whatChecked = asArray.filter(([key, value]) => value === true).map(item => item[0]).join(',')

        setFilters([whatChecked, inpRef.current.value, cal, 0])
        setOffset(0)
     }

     const minusOff = useCallback(() => {
    
        const asArray = Object.entries(check);
        const whatChecked = asArray.filter(([key, value]) => value === true).map(item => item[0]).join(',')
        setFilters([whatChecked, inpRef.current.value, cal, offset-10])
        setOffset(offset - 10)
      }, [offset])
    
      const plusOff = useCallback(() => {
        
        const asArray = Object.entries(check);
        const whatChecked = asArray.filter(([key, value]) => value === true).map(item => item[0]).join(',')
        setFilters([whatChecked, inpRef.current.value, cal, offset+10])
        setOffset(offset + 10)
      }, [offset])

    return (
        <div className = 'bar'>
        
          <div className="formZone">
            <h1>Filter</h1>
            <button  className = 'closeFilter' onClick = {() => move('close')}><i class="fas fa-times"></i></button>
          <form  action="submit" onSubmit = {handleSub}>
               <div className="search">
               <input ref = {inpRef} className = 'search'/>
               
               </div>
              <div className="filterZone">
              <label>main course<input value = {check.mainCourse} type="checkbox" onChange = {() => setCheck({...check, mainCourse:  !check.mainCourse})} /></label> 
              <label>side dish<input value = {check.sideDish} type="checkbox" onChange = {() => setCheck({...check, sideDish:  !check.sideDish})} /></label> 
              <label>dessert<input value = {check.dessert}  type="checkbox" onChange = {() => setCheck({...check, dessert:  !check.dessert})} /></label> 
              <label>appetizer<input value = {check.appetizer} type="checkbox" onChange = {() => setCheck({...check, appetizer:  !check.appetizer})} /></label> 
              <label>salad<input value = {check.salad} type="checkbox" onChange = {() => setCheck({...check, salad:  !check.salad})}  /></label> 
              <label>bread<input value = {check.bread} type="checkbox" onChange = {() => setCheck({...check, bread:  !check.bread})} /></label> 
              <label>breakfast<input value = {check.breakfest} type="checkbox" onChange = {() => setCheck({...check, breakfest:  !check.breakfest})}  /></label> 
              <label>soup<input value = {check.soup} type="checkbox" onChange = {() => setCheck({...check, soup:  !check.soup})}  /></label> 
              <label>beverage<input value = {check.beverage} type="checkbox" onChange = {() => setCheck({...check, beverage:  !check.beverage})} /></label> 
              <label>sauce<input value = {check.sauce} type="checkbox" onChange = {() => setCheck({...check, sauce:  !check.sauce})}  /></label> 
              <label>marinade<input value = {check.marinade} type="checkbox" onChange = {() => setCheck({...check, marinade:  !check.marinade})} /></label> 
              <label>fingerfood<input value = {check.fingerfood} type="checkbox" onChange = {() => setCheck({...check, fingerfood:  !check.fingerfood})}  /></label> 
              <label>snack<input value = {check.snack} type="checkbox" onChange = {() => setCheck({...check, snack:  !check.snack})} /></label> 
              <label>drink<input value = {check.drink} type="checkbox" onChange = {() => setCheck({...check, drink:  !check.drink})} /></label> 
              </div>
              <div className="calCal">
              <Slider
              value= {cal}
              onChange = {handleCalChange}
              min={0}
              max={1300}
        
              />
              <div className="calCalMonitor">
                  <span>{`${cal[0]} kcal`}</span>
                  <span>{`${cal[1]} kcal`}</span>
              </div>
              </div>
            
              <button><i class="fas fa-search"></i></button>
           </form>
           <div className="seeMore">
          <button disabled = {offset < 1} onClick = {minusOff}><i class="fas fa-chevron-left"></i></button>
          <span>{String((offset + 10)/10)} </span>
          <button onClick = {plusOff}><i class="fas fa-chevron-right"></i></button>
          </div>
          </div>
           
        </div>
    )
}
