let lastRenderTime = 0;
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }
    console.log('Render');
    lastRenderTime = currentTime;

    update();
    render();
}

window.requestAnimationFrame(main);

function render(){ drawSnake(); }
function update(){ updateSnake(); }