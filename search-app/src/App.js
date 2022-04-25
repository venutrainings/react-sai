
import './App.css';
import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <Autocomplete   suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]} />
    </div>
  );
}

export default App;
