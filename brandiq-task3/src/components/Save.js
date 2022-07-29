import React from 'react';


function Save() {



    // const errorHandler = (err)=>{
    //     console.log('error',err)
    // };
     
    // function onInitFs(fs) {
    //     fs.root.getFile('data.json', {create: true}, function(fileEntry) {

            // fileEntry.isFile === true;
            // fileEntry.name == 'data.json';
            // fileEntry.fullPath == './data.json';
            // Create a FileWriter object for our FileEntry (log.txt).
            // fileEntry.createWriter(function(fileWriter) {

            //     fileWriter.onwriteend = function(e) {
            //         console.log('Write completed.');
            //     };

            //     fileWriter.onerror = function(e) {
            //         console.log('Write failed: ' + e);
            //     };

                // Create a new Blob and write it to log.txt.
                // if (!window.BlobBuilder && window.WebKitBlobBuilder)
                //    window.BlobBuilder = window.WebKitBlobBuilder; // in Chrome 12.
                // var bb = new BlobBuilder(); 
                // bb.append("some stuff");
                // console.log("bb size:"+bb.size);
                // bb.append('put some nice text in our file....');
                // var ourData = bb.getBlob('text/plain');
                // fileWriter.write(ourData); 
    //         }, errorHandler);
    //     }, errorHandler);
    // }



    const getData = async () =>{

        const options = {
            types: [
              {
                description: 'Text Files',
                accept: {
                  'application/json': ['.json'],
                },
              },
            ],
          };
          const handle = await window.showSaveFilePicker(options);
          console.log(handle.kind)
          return handle;
        // window.storageInfo.requestQuota(PERSISTENT, 1024*1024, 
        //     function(grantedBytes) {
        //         window.requestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, errorHandler);
        //     }, 
        //     errorHandler
        // );
    }

    const newFile = async() => {
        let existingDirectoryHandle;
        // In an existing directory, create a new directory named "My Documents".
 const newDirectoryHandle = await existingDirectoryHandle.getDirectoryHandle('components', {    create: true,
  });
//   // In this new directory, create a file named "My Notes.txt".
  const newFileHandle = await newDirectoryHandle.getFileHandle('My Notes.txt', { create: true });
    }

    async function saveFile() {
        

        // create a new handle
        const newHandle = await window.showSaveFilePicker();
      
        // create a FileSystemWritableFileStream to write to
        const writableStream = await newHandle.createWritable();
      
        // write our file
        await writableStream.write(imgBlob);
      
        // close the file and write the contents to disk.
        await writableStream.close();
      }
      function sessaendMge(message, writableStream) {
        // defaultWriter is of type WritableStreamDefaultWriter
        const defaultWriter = writableStream.getWriter();
        const encoder = new TextEncoder();
        const encoded = encoder.encode(message, { stream: true });
        encoded.forEach((chunk) => {
          defaultWriter.ready
            .then(() => defaultWriter.write(chunk))
            .then(() => console.log("Chunk written to sink."))
            .catch((err) => console.error("Chunk error:", err));
        });
        // Call ready again to ensure that all chunks are written
        //   before closing the writer.
        defaultWriter.ready
          .then(() => defaultWriter.close())
          .then(() => console.log("All chunks written"))
          .catch((err) => console.error("Stream error:", err));
      }

  return (
    <div>
        <h4>File System entry </h4>
        <button onClick={getData}>save 🇦🇨 </button>
        <button onClick={newFile}>create file</button>
        <button onClick={saveFile}>save file</button>
        <button onClick={ sessaendMge}>sendmessage</button>

    </div>
  )
}

export default Save;

// window.storageInfo.requestQuota(PERSISTENT, 1024*1024, 
//     function(grantedBytes) {
//         window.requestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, errorHandler);
//     }, 
//     errorHandler
// );


// async function getNewFileHandle() {
//     const options = {
//       types: [
//         {
//           description: 'Text Files',
//           accept: {
//             'text/plain': ['.txt'],
//           },
//         },
//       ],
//     };
//     const handle = await window.showSaveFilePicker(options);
//     return handle;
//   }

// In an existing directory, create a new directory named "My Documents".
// const newDirectoryHandle = await existingDirectoryHandle.getDirectoryHandle('My Documents', {
//     create: true,
//   });
//   // In this new directory, create a file named "My Notes.txt".
//   const newFileHandle = await newDirectoryHandle.getFileHandle('My Notes.txt', { create: true });


