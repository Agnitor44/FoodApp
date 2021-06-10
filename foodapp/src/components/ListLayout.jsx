import React, {useCallback, useEffect} from 'react'
import Element from './Element'
import '../styles/list.css'
export default function HomeLayout({items, setOffset, offset}) {
    
    const listMap = items && items.map(item => <Element food = {item}/>)



    return (
        
        <div className = 'listWrapper'>
           {listMap}
        
        </div>
     
      
    )
}
