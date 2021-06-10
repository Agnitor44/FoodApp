
const favReducer = (state = [], action) => {
    if(action.type === 'ADD') {
         
      
        return [...state, action.payload]
        }
  
    
    else if(action.type === 'SUB') {

    const newArr = [...state].filter(item => item.id !== action.payload)
    return newArr

    }
  
      
    else return state
}
export default favReducer