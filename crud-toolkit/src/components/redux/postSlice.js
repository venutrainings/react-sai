import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

// fetch posts
export const getpost = createAsyncThunk('posts/getpost', async()=>{
return  fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>{
  return data;
})
.catch((error)=>console.log(error))
});
// fetch post by id
export const fetchpost = createAsyncThunk('posts/fetchpost', async({id})=>{
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
      return data;
    })
    .catch((error)=>console.log(error))
    })
// delete post
    export const deletepost = createAsyncThunk('posts/deletepost', async({id})=>{
        return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        })
        .then((response)=>response.json())
        .then((data)=>{
          return data;
        })
        .catch((error)=>console.log(error))
        })
// post data
export const createpost = createAsyncThunk('posts/createpost', async({values})=>{
    return  fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            Authourization:'Berear 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
        },
        body:JSON.stringify({
            title:values.title,
            body:values.body
        })
    })
    .then((response)=>response.json())
    .then((data)=>{
      return data;
    })
    .catch((error)=>console.log(error))
    })

const postsSlice = createSlice({
    name:'posts',
    initialState:{
        postlist:[],
       
        status:'idle',
        error:'',
        loading:false
    },
    // reducers:{
    //     [fetchpost.pending]:(state,action)=>{
    //         state.loading = true;
           
    //     },
    //     [fetchpost.fulfilled]:(state,action)=>{
    //         state.postlist = [action.payload];
    //         state.loading = false;
    //     },
    //     [fetchpost.rejected]:(state,action)=>{
    //         state.loading = false;
    //         state.error = action.payload
    //     },
       
    // },
   extraReducers:(builder)=>{
    builder
            // for fetch post
        .addCase(getpost.pending,(state,action)=>{
            state.status = 'loading';
            state.postlist = [];
        })
        .addCase(getpost.fulfilled,(state,action)=>{
            state.status = '200 ok';
            state.postlist = action.payload;
            state.error =''
        })
        .addCase(getpost.rejected,(state,action)=>{
            state.status = 'failed';
            state.postlist = [];
            state.error =action.payload
        })
       // FOR FETEH POST BY ID
        .addCase(fetchpost.pending,(state,action)=>{
            state.loading = true;
          
        })
        .addCase(fetchpost.fulfilled,(state,action)=>{
            state.loading = false;
            state.postlist = action.payload;
            
        })
        .addCase(fetchpost.rejected,(state,action)=>{
            state.loading = false;
            state.error =action.payload
        })
        // delete post data
        .addCase(deletepost.pending,(state,action)=>{
            state.loading = true;
          
        })
        .addCase(deletepost.fulfilled,(state,action)=>{
            state.loading = false;
            state.postlist = action.payload;
            
        })
        .addCase(deletepost.rejected,(state,action)=>{
            state.loading = false;
            state.error =action.payload
        })

         // create new post data
         .addCase(createpost.pending,(state,action)=>{
            state.loading = true;
          
        })
        .addCase(createpost.fulfilled,(state,action)=>{
            state.loading = false;
            state.postlist = action.payload;
            
        })
        .addCase(createpost.rejected,(state,action)=>{
            state.loading = false;
            state.error =action.payload
        })
   }
})
export default postsSlice.reducer;