import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getPost=createAsyncThunk('post/getPost', async ({id})=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>res.json())
})

export const deletePost=createAsyncThunk('post/deletePost', async ({id})=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'DELETE'
    })
    .then((res)=>res.json())
})

export const createPost=createAsyncThunk('post/createPost', async ({values})=>{
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
            Authorization: 'Berear 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
        },
        body:JSON.stringify({
            title:values.title,
            body:values.body
        })
    })
    .then((res)=>res.json())
})

export const updatePost=createAsyncThunk('post/updatePost', async ({id,title,body})=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'PUT',
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json',
            Authorization: 'Berear 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
        },
        body:JSON.stringify({
            title,
            body
        })
    })
    .then((res)=>res.json())
})




export const postSlice=createSlice({
    name:'post',
    initialState:{
        post:[],
        loading:false,
        error:null,
      
      
    },
    // reducers:{
    //     setEdit:(state,action)=>{
    //      state.post.map((user)=>{
    //          if(user.id === action.payload){
    //              user.title = action.payload.title;
    //              user.body = action.payload.body;
    //          }
    //      })
    //     }
      
        
    // },
    extraReducers:{
        [getPost.pending]:(state,action)=>{
            state.loading=true;
        },
        [getPost.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [getPost.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [deletePost.pending]:(state,action)=>{
            state.loading=true;
        },
        [deletePost.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [deletePost.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [createPost.pending]:(state,action)=>{
            state.loading=true;
        },
        [createPost.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [createPost.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        [updatePost.pending]:(state,action)=>{
            state.loading=true;
        },
        [updatePost.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [updatePost.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }

    }
})

console.log(postSlice)
export const {setEdit} = postSlice.actions;

export default postSlice.reducer;