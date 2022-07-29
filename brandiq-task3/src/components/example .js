import React from 'react'

function Example () {
  let fileHandle;
    const openFile = async() =>{
   
     [fileHandle]=await window.showOpenFilePicker();
   //  console.log(fileHandle.kind);  // to print file its loaded 
   let file = await fileHandle.getFile();
//console.log(file)  to read the file properties
   let text = await file.text();
         // console.log(text)  // its  shows the written text code s
        
          textarea.innerText = text;
    }
    const saveFile = async() =>{
    
      // [fileHandel] = await window.showSaveFilePicker();
       let stream = await fileHandle.createWritable();
       await stream.write(textarea.innerText);
       await stream.close();
    }
  const saveAS = async () =>{
    fileHandle = await window.showSaveFilePicker();
    saveAS()
  }

  return (
    <div>
      <h4 style={{textAlign:'center'}}>File System Access for React js</h4>
      <button onClick={openFile}>OPEN FILE</button>
      <button onClick={saveFile}>SAVE FILE</button>
      <button onClick={saveAS}>Save As</button>
      
    </div>
  )
}

export default Example ;





















//   import React from 'react'; 
//   import fs  from 'fs';
//   import {writeFile} from 'fs';
  
//  function Items(){
//   console.log("Sync start test");
//   fs.writeFile("user.txt", "Hey there!",'utf8')
//     .catch((err) => { console.log(err) });
//   console.log("The file was saved!");
//   console.log("Sync end test")
//   return (
//     <button onClick={() => { Items(); }}> Sync </button>
//   );
// };
// export default Items;