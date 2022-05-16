
import './App.css';
import Users from './components/customhook/Users';
import FetchPostData from './components/customhooks2/fetchPostData';
import FetchPutData from './components/customput/FetchPutData';
import FetchDelete from './components/fetchDelete/FetchDelete';



function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <FetchPostData />
     {/* <FetchPutData /> */}
   {/* <FetchDelete /> */}
     
    </div>
  );
}

export default App;
