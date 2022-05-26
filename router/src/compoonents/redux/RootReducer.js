const initialState={
    users:[
        {id:1,title:'SAIKUMAR',body:'Mauris mattis ultrices libero. Phasellus varius augue massa, lobortis luctus est vestibulum eu. Mauris non turpis at sem fermentum suscipit eget sit amet nulla. Cras ac urna quis tortor lobortis tristique. Ut dictum dui ut purus cursus cursus. Quisque nec metus eget nulla hendrerit malesuada et rhoncus sapien. Curabitur orci magna, vestibulum nec elementum nec, rhoncus quis ante. Duis pretium dictum odio id pulvinar. Cras porta dapibus metus eget egestas. Sed ornare vitae quam nec cursus. Fusce facilisis a libero aliquet congue. Donec auctor eleifend eleifend.'},
        {id:2,title:"JHON",body:'Mauris mattis ultrices libero. Phasellus varius augue massa, lobortis luctus est vestibulum eu. Mauris non turpis at sem fermentum suscipit eget sit amet nulla. Cras ac urna quis tortor lobortis tristique. Ut dictum dui ut purus cursus cursus. Quisque nec metus eget nulla hendrerit malesuada et rhoncus sapien. Curabitur orci magna, vestibulum nec elementum nec, rhoncus quis ante. Duis pretium dictum odio id pulvinar. Cras porta dapibus metus eget egestas. Sed ornare vitae quam nec cursus. Fusce facilisis a libero aliquet congue. Donec auctor eleifend eleifend.'},
        {id:3,title:'VIKRAM' ,body:'Mauris mattis ultrices libero. Phasellus varius augue massa, lobortis luctus est vestibulum eu. Mauris non turpis at sem fermentum suscipit eget sit amet nulla. Cras ac urna quis tortor lobortis tristique. Ut dictum dui ut purus cursus cursus. Quisque nec metus eget nulla hendrerit malesuada et rhoncus sapien. Curabitur orci magna, vestibulum nec elementum nec, rhoncus quis ante. Duis pretium dictum odio id pulvinar. Cras porta dapibus metus eget egestas. Sed ornare vitae quam nec cursus. Fusce facilisis a libero aliquet congue. Donec auctor eleifend eleifend.'}
    ],
    fetchdata:[]
}
const RootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'DELETE_USER':
            return {
                ...state,
                cards: state.users.filter((user)=>{
                    return action.id !== user.id
                })
            }
        case 'FETCH_USER':
            return {
                ...state,
                fetchdata:action.payload
            }
      default:
          return state;
    }


}
export default RootReducer;