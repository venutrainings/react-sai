export const initialState={
    basket:[]
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.payload]
            }
    }
}
export default reducer