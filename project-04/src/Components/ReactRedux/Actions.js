export const incAction=(inp)=>async dispatch=>{
    dispatch({
        type:'increment',
        payload:inp
    })
}
export const decAction=(inp)=>async dispatch=>{
    dispatch({
        type:'decrement',
        payload:inp
    })
}