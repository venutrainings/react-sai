export const ApiURL='https://gorest.co.in/public/v2/';
export const LoadingMessage='please wait..  while fetching Details';
export const ApiError="Error occured while fetching Details";

export const userPath='users';
export const commentsPath='comments';

 var data={}

data.name='12345';
data.email='12345@gmail.com';
data.gender='MALE';
data.status='Active'

 export const Deleteoptions={
     method:'DELETE',
     body:JSON.stringify(data),
     headers:{
         'Content-type':'application/json; charset=UTF-8',
        'Authorization':'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
     }
 }
 export const deleteID='/3221'


 export const Putoptions={
    method:'PUT',
    body:JSON.stringify(data),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
       'Authorization':'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
    }
}
export const putId='/3233';


export const Postoptions={
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
       'Authorization':'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
    }
}
