
const count=0;
const reducer=(state=count,action)=>{
            switch(action.type){
                case 'INCREMENT':
                    return state+1;
                case 'FIVEINCREMENT':
                    return state+action.payload;
                case 'DECREMENT':
                    return state-1;
                case 'DECREMENTFIVE':
                    return state-action.payload;
                case 'RESET':
                    return count;
                default:
                    return state;
            }


    // const {type,payload}=action;
    // switch(type){
    //     case 'INCREMENT':
    //         return state+1;
    //     case 'FIVEINCREMENT':
    //         return state+payload;
    //     case 'DECREMENT':
    //         return state-1;
    //     case 'DECREMENTFIVE':
    //         return state-payload;
    //     case 'RESET':
    //         return initialState;
    //     default:
    //         return state;
    // }

}
 export default reducer;