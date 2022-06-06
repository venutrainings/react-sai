import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './Reducers';
import { nanoid } from 'nanoid';


function AddBook() {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [rating,setRating]=useState('5');
  
    const dispatch=useDispatch();

    const addBookHandler=(e)=>{
        e.preventDefault();
        dispatch(addBook({ title, author, rating, id: nanoid() }));
        setTitle('');
        setAuthor('');
        setRating('')
    }

  return (
    <div>
        <h1>Add Book details</h1>
        <form onSubmit={addBookHandler}>
            <label>Title</label>
            <input type='text' value={title} name='title' onChange={(e)=>setTitle(e.target.value)}/> <br></br>
             <label>Author</label>
             <input type='text' value={author} name='author' onChange={(e)=>setAuthor(e.target.value)} /><br></br>
             <label>Rating</label>
             <input type='number' value={rating} name='rating' onChange={(e)=>setRating(e.target.value)} />
             <button>submit</button>
        </form>
    </div>
  )
}

export default AddBook