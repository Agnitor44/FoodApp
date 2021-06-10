  
 export const favAdd = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}
export const favSub = (data) => {
    return {
        type: "SUB",
        payload: data
    }
}