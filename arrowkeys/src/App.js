import React, {state, useState, useEffect, useRef, Component} from 'react';
import { useSpring, animated } from 'react-spring';
import Snake from './Snake';
import Food from './Food';

import logo from './logo.svg';
import './App.css';

import KeyboardEventHandler from 'react-keyboard-event-handler';

const getRandomCoordinates = () => {
  let min =1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 200  ,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]

  ]
}

class App extends Component {
///////////////////////////////
  // const [isToggled, setToggle] = useState(false);
  // const [isMoveDown, setMoveDown] = useState(false);

  // const fade = useSpring({
  //   // opacity: isToggled ? 1: 0,
  //   color: isToggled ? 'black' : 'green',
  //   backgroundColor: isToggled ? 'black' : 'green',
  //   width: isToggled ? '100px' : '200px',
  //   marginTop: isToggled ? '0px' : '400px'
   
 
  // });

  // let movedown = useSpring({
  //   marginTop: isMoveDown ? '2px' : '4px',
  // })
  // console.log(fade);
//////////////////////////////


state = initialState;
 
  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders(); 
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) =>{
    e =e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40: 
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length -1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] +2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] -2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] +2];
        break;
      case 'UP':
        head = [head[0], head[1] -2];
        break;
    }

    dots.push(head);
    dots.shift();
    this.setState({ 
      snakeDots: dots
    })
  }

  checkIfOutOfBorders(){
    let head = this.state.snakeDots[this.state.snakeDots.length -1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
        this.onGameOver();

    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length -1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]){
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food [0] && head[1] == food[1]){
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
    }     
  }
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })

  }



  onGameOver(){
    alert(`Game Over, Snake length is ${this.state.length}`);
    this.setState(initialState);
  }
 render(){

  return (
    
   <div className="App">
     <div className="game-area">
      <Snake snakeDots={this.state.snakeDots}></Snake>
      <Food dot={this.state.food}></Food>

     </div>

 


     {/* <div className="appbody">
     <animated.h1 className="nothing"> Hi</animated.h1>
    <animated.div className="block" style={fade}> Hi</animated.div>
    <button onClick={() => setToggle(!isToggled)}> Toggle </button>
    <button onClick={() => setMoveDown(!isMoveDown)}> MoveDown</button>
    </div>
   */}


  </div>
  );
}
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