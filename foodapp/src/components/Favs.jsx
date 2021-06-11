import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavElement from './favElement'
import '../styles/favs.css'
export default function Favs() {

    const favs = useSelector(state => state.favs)
    const [favListView, setFavListView] = useState(null) 
    const [toggler, setToggler] = useState({abc: false, num: true})
    useEffect(() => {

        setFavListView(favs)
    }, [favs])

     
  
    const handleTog = (key) => {
        
        const alfabetical = [...favs].sort(function(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        if(key === "ALFA") {
            setToggler({abc: true, num: false})
            setFavListView(alfabetical)
         
        }
        if(key === "NUMB") {
            setToggler({abc: false, num: true})
            setFavListView([...favs])
        }
     }

    return (
        <div className="wrapFav">
            <div className="sortButtons">
                <button style = { toggler.abc ? {backgroundColor: 'green'} : {backgroundColor: 'rgb(250, 216, 22)'}  } onClick = {() => handleTog("ALFA")}><i class="fas fa-sort-alpha-down"></i></button>
                <button style = { toggler.num ? {backgroundColor: 'green'} : {backgroundColor: 'rgb(250, 216, 22)'} } onClick = {() => handleTog("NUMB")}><i class="fas fa-sort-numeric-down"></i></button>
            </div>
        <h1 className = 'hFavTop'>Your   Favorites</h1>
     <div className="favZone">
         {favListView  && favListView.map(item => <FavElement data = {item} />)  }
     
       
     </div>
     </div>
    )
}
