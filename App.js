import React from "react";
import './App.css';
import Dice from './Dice';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <div className="dice-container">
            <Dice />
            <Dice />
            <Dice />
      </div>
      </div>
    );
  }
}

export default App;
