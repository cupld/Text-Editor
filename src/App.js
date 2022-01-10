import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


const styles = ["bold", "italic", "underline"];
const colors = ["yellow", "blue", "red", "black", "purpule"];

function App() {
  const styling = styles.map ((style1) => (
    <button onClick = {style1[style1]}>{style1}</button>
  ));
//console.log (styling);
  const coloring = colors.map ((color1) => (
    <button onClick = {color1[color1]}>{color1}</button>
  ));


  const [yourcolor, setColor] = useState ("");
  const [yourstyle, setStyle] = useState("");

  return (
    <div className="App">
   <div>{styling}</div>
   <input placeholder='please enter your text' style = {{color: "red"}}  />  
   <div>{coloring}</div>
    </div>
  );
}

export default App;
