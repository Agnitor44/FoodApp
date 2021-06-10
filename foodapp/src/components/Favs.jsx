import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavElement from './favElement'
import '../styles/favs.css'
export default function Favs() {

    const favs = useSelector(state => state.favs)
    const [favListView, setFavListView] = useState(null) 
   
    useEffect(() => {
       
        setFavListView(favs)
     
    }, [favs])
    return (
        <>
        <h1 className = 'hFavTop'>Your   Favorites</h1>
     <div className="favZone">
         {favListView  && favListView.map(item => <FavElement data = {item} />)  }
     
       
     </div>
     </>
    )
}
