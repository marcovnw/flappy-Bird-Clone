const express = require('express')
const { generateObstacles } = require('./obstacleGenerator');
const { moveSubmarineUp, moveSubmarineForward, updateSubmarinePosition, submarinePosition } = require('./submarine')


const app = express()



app.get('/obstacles', (request, response) => {
     const obstacles = generateObstacles()
     response.json(obstacles);
})

app.post('/move-submarine-up', (req, res) => {
    moveSubmarineUp();
    res.json({ position: submarinePosition });
});


app.post('/move-submarine-forward', (req, res) => {
    moveSubmarineForward();
    res.json({ position: submarinePosition });
});


app.get('/update-submarine', (req, res) => {
    updateSubmarinePosition();  
    res.json({ position: submarinePosition });
});


app.listen(8000, () => {
    console.log(`Server is Listening on 8000`)
})