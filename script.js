const divE1=document.getElementById('div');
//GET DATA:
function fnGetData(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','https://gorest.co.in/public/v2/users',true);
    xhr.send();
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           var result=xhr.responseText;
           var results=JSON.parse(result);
          // console.log("4 is OK",results,xhr.statusText);
          console.log(results,xhr.statusText);
        } 
    }
    xhr.onerror=function(){
        console.log('something went wrong')
    }
}

//POST DATA:
function fnPostData(){
    var data={}
    data.name="nupagrace";
    data.gender="female";
    data.email="love@gmail.com";
    data.status="active";
     var json=JSON.stringify(data);
       
    var xhr=new XMLHttpRequest();
    xhr.open('POST','https://gorest.co.in/public/v2/users',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send(json);
}

//PUT DATA:
function fnUpdateData(){
    var data={}
    data.name="PUSAM123";
    data.gender="male";
    data.email="302@gmail.com";
    data.status="active";
     var json=JSON.stringify(data);
       
    var xhr=new XMLHttpRequest();
    xhr.open('PUT','https://gorest.co.in/public/v2/users/4716',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send(json);
    // xhr.send("suryagrace&Female&grace302@gmail.com&active");
}

// DELETE DATA:
function fnDeleteData(){
  
 
    var xhr=new XMLHttpRequest();
    xhr.open('DELETE','https://gorest.co.in/public/v2/users/4716',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send( );
    //xhr.send('')
}