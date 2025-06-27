import {getInputDirection} from "./input.js";

export const SNAKE_SPEED = 2; //what is exported can be imported elsewhere
const snakeBody = [{x: 10, y:11},{x: 11, y:11},{x: 12, y:11}]

export function update(){
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x; //Uncaught TypeError: Cannot read properties of undefined (reading 'x')
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    })
}

//ToDo start from: https://youtu.be/QTcIXok9wNY?t=1489