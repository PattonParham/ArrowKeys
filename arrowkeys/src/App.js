import React, {useState, useEffect, useRef} from 'react';
import { useSpring, animated } from 'react-spring';

import logo from './logo.svg';
import './App.css';

import KeyboardEventHandler from 'react-keyboard-event-handler';




function App() {

  const [isToggled, setToggle] = useState(false);

  const fade = useSpring({
    // opacity: isToggled ? 1: 0,
    color: isToggled ? 'black' : 'green',
    backgroundColor: isToggled ? 'black' : 'green',
    width: isToggled ? '100px' : '200px',
    marginTop: isToggled ? '0px' : '400px'

  });
  console.log(fade);


  return (
    
   <animated.div className="App">
     <div className="appbody">
     <animated.h1 className="block"> Hi</animated.h1>
    <animated.div className="block" style={fade}> Hi</animated.div>
    <button onClick={() => setToggle(!isToggled)}> Toggle </button>
    </div>
  


  </animated.div>
  );
}

export default App;
// const [moveUpBool, setMoveUpBool] = useState(false);
// const [moveDownBool, setMoveDownBool] = useState(false);
// const [moveRightBool, setMoveRightBool] = useState(false);
// const [moveLeftBool, setMoveLeftBool] = useState(false);






// function moveLeft(event){
//   event.preventDefault();
//   if(moveLeftBool){
//     objImage.style.left=parseInt(objImage.style.left) - 5 +'px';
//   } 
// }
// function moveUp(event){
//   if(moveUpBool){
//     objImage.style.top=parseInt(objImage.style.top) - 5 +'px';
//   }
// }
// function moveRight(event){
//   if(moveRightBool){
//     objImage.style.left=parseInt(objImage.style.left) + 5 +'px';
//   }
// }
// function moveDown(event){
//   if(moveDownBool){
//     objImage.style.top=parseInt(objImage.style.top) + 5 +'px';
//   }
// }


// const guy=document.getElementById('guy');
// const container=document.getElementById('container');

// let guyLeft = 0;

// function anim(e){

// alert(e.keyCode);

// if(e.keyCode==39){
//     guyLeft +=2;
//     guy.style.left = guyLeft + 'px';
// } 
// if(e.keyCode==37){
//   guyLeft -=2;
//   guy.style.left = guyLeft + 'px';
// } 
// }

// document.onkeydown = anim;