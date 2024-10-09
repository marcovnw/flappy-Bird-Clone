let submarinePosition = { x: 100, y: 100 };

const GRAVITY = 2;  
const MAX_FALL_SPEED = 10; 
let fallSpeed = 0;

function applyGravity() {
    
    fallSpeed = Math.min(fallSpeed + GRAVITY, MAX_FALL_SPEED);
    submarinePosition.y += fallSpeed;  
}


function moveSubmarineUp() {
    const moveAmount = 10;  
    submarinePosition.y -= moveAmount;  
    return submarinePosition;
}

function moveSubmarineForward() {
    const moveForwardAmount = 10; 
    submarinePosition.x += moveForwardAmount;
    return submarinePosition;
}

function updateSubmarinePosition() {
    applyGravity();  
    return submarinePosition;
}


module.exports = {
    submarinePosition,
    moveSubmarineUp,
    moveSubmarineForward,
    updateSubmarinePosition

};