// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   books: [],
// };

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook(state, action) {
//       state.books.push(action.payload);
//     },
//     deleteBook(state, action) {
//       state.books = state.books.filter((book) => book.id !== action.payload.id);
//     },
//   },
// });

// console.log(booksSlice);

// export const { addBook, deleteBook } = booksSlice.actions;

// export default booksSlice.reducer;









 import { createSlice } from "@reduxjs/toolkit";



const initialState={
    books:[]
}
const bookSlice=createSlice({
    name:'books',
    initialState,
    reducers:{
      addBook(state,action){
          state.books.push(action.payload)
      },
      deleteBook(state,action){
        state.books=state.books.filter((book)=>book.id !== action.payload.id)
      },
      updateBook:(state,action)=>{
          state.books.map((book)=>{
              if(book.id === action.payload.id){
                  book.title=action.payload.title ;
                  book.author=action.payload.author;
                  book.rating=action.payload.rating
              }
          })
      }
    }
})
console.log(bookSlice)
export const {addBook,deleteBook,updateBook} = bookSlice.actions;
const booksReducer=bookSlice.reducer;
export default booksReducer;