export const IncAction=()=>async dispatch=>{
    dispatch({
        type:'INCREMENT'
    })
}

export const DecAction=()=>async dispatch=>{
    dispatch({
        type:'DECREMENT'
    })
}
export const ResetAction=()=>async dispatch=>{
    dispatch({
        type:'RESET'
    })
}
export const IncfiveAction =(value)=>async dispatch=>{
    dispatch({
        type:'FIVEINCREMENT',
        payload:value
    })
}
export const DecfiveAction =(value)=>async dispatch=>{
    dispatch({
        type:'DECREMENTFIVE',
        payload:value
    })
}