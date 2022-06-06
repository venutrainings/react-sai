import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteBook,updateBook} from './Reducers'

function Liberary() {
    const [newTitle,setNewTitle]=useState('');
    const [newAuthor,setNewAuthor]=useState('');
    const [newRating,setNewRating]=useState('')

    const booksList=useSelector((state)=>state.books.books);
    const dispatch=useDispatch();
    const deleteHandler=(id)=>{
        
        dispatch(
            deleteBook(id)
        )
    }
    const editHandler=(id,title,author,rating)=>{
        dispatch(updateBook(id,title,author,rating))
        setNewTitle('');
        setNewAuthor('');
        setNewRating('');
    }
  return (
    <div>
        <h2>Liberary</h2>
        <table>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>RATING</th>
                </tr>
            </thead>
            <tbody>
                {
                  booksList.map((book)=>{
                      return <tr key={book.id}>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.rating}</td>
                          <td>
                              <input type='text' value={newTitle} placeholder="add title" onChange={(e)=>setNewTitle(e.target.value)}/>
                              <input type='text' value={newAuthor} placeholder="add author" onChange={(e)=>setNewAuthor(e.target.value)}/>
                              <input type='text' value={newRating} placeholder="add title" onChange={(e)=>setNewRating(e.target.value)}/>
                             
                          </td>
                          <td> <button onClick={(e)=>editHandler({
                                  id:book.id ,
                                  title:newTitle,
                                  author:newAuthor,
                                  rating:newRating
                              })}>Edit </button></td>
                          <td>
                              <button onClick={(e)=>deleteHandler({
                                  id:book.id
                              })}>X</button>
                          </td>
                      </tr>
                  })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Liberary;