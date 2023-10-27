import { useState } from 'react';
import './App.css';

function App() {
  let globalc = 'black'
  let [color ,setColor] = useState(globalc);
  function changeColor(){
    let Color = "#87CEEB"
    setColor(Color)
  }
  function changeColor1(){
    let Color = "#008B8B"
    setColor(Color)
  }
  function changeColor2(){
    let Color = "yellow"
    setColor(Color)
  }
  function changeColor3(){
    let Color = "pink"
    setColor(Color)
  }
  function changeColor4(){
    let Color = "grey"
    setColor(Color)
  }
  return (
    <>
      <div style={{backgroundColor:color,height:'100vh'}} className='d-flex flex-column align-items-center justify-content-center'>
      <div className="d-flex align-items-center justify-content-center">
         <h1 style={{color:'white',fontFamily:''}}>Background Color Changer App</h1>
         </div>
      <div style={{gap:'20px'}} className="d-flex align-items-center justify-content-center m-5">
      <button style={{backgroundColor:'#87CEEB',width:'120px'}} onClick={changeColor} className='btn btn-outline-light'>SkyBlue</button>
      <button style={{backgroundColor:'#008B8B',width:'120px'}} onClick={changeColor1}  className='btn btn-outline-light'>Drak Cyan</button>
      <button style={{backgroundColor:'yellow',width:'120px'}} onClick={changeColor2}  className='btn btn-outline-light'>Yellow</button>
      <button style={{backgroundColor:'pink',width:'120px'}} onClick={changeColor3}  className='btn btn-outline-light'>Pink</button>
      <button style={{backgroundColor:'grey',width:'120px'}} onClick={changeColor4}  className='btn btn-outline-light'>Grey</button>

      </div>
      </div >

    </>
  );
  }

export default App;
