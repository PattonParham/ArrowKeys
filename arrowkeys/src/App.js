import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

function App(props) {
const [moveUpBool, setMoveUpBool] = useState(false);
const [moveDownBool, setMoveDownBool] = useState(false);
const [moveRightBool, setMoveRightBool] = useState(false);
const [moveLeftBool, setMoveLeftBool] = useState(false);

let objImage = null;
objImage = document.getElementById("character");
objImage.style.position='relative';
objImage.style.left='0px';
objImage.style.top='0px';

function moveLeft(event){
  event.preventDefault();
  if(moveLeftBool){
    objImage.style.left=parseInt(objImage.style.left) - 5 +'px';
  } 
}
function moveUp(event){
  if(moveUpBool){
    objImage.style.top=parseInt(objImage.style.top) - 5 +'px';
  }
}
function moveRight(event){
  if(moveRightBool){
    objImage.style.left=parseInt(objImage.style.left) + 5 +'px';
  }
}
function moveDown(event){
  if(moveDownBool){
    objImage.style.top=parseInt(objImage.style.top) + 5 +'px';
  }
}



function Move(event){

}


  return (
    
    <div className="App" >
   <div>key detected: {props.eventKey}</div>
  <KeyboardEventHandler
    handleKeys={['up', 'down', 'left', 'right']}
    
    onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)} />
    <div className="character" id = "character">
    
    </div>
</div>
  );
}

export default App;
