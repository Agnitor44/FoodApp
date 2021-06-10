import {combineReducers} from 'redux'
import favReducer from './favReducer'

const Combine = combineReducers({
    favs: favReducer,
})

export default Combine