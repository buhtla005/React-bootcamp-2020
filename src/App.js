import React from 'react';
import './App.css';
//import Dog from './components/01dog/Dogog'
//import RandomPicker from './components/02randPicker/RandomPicker';
import CompProp from './components/03componentsAndPropertys/CompProp'

function App() {
  return (
    <div className="App">
      <CompProp from="Vedran" to="Loris" bangs={4}/>
      <CompProp from="Loris" to="Barbara" bangs={12}/>
    </div>
  );
}

export default App;
