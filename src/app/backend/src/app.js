const express = require('express')
const { generateObstacles } = require('./obstacleGenerator');
const { moveSubmarineUp, moveSubmarineForward, updateSubmarinePosition, submarinePosition } = require('./submarine')


const app = express()



app.get('/obsracles', (request, response) => {
     const obsracles = generateObstacles()
     response.json(obsracles);
})

app.post('/move-submarine-up', (req, res) => {
    moveSubmarineUp();
    response.json({ position: submarinePosition });
});


app.post('/move-submarine-forward', (req, res) => {
    moveSubmarineForward();
    response.json({ position: submarinePosition });
});


app.get('/update-submarine', (req, res) => {
    updateSubmarinePosition();  
    response.json({ position: submarinePosition });
});


app.listen(8000, () => {
    console.log(`Server is Listening on 8000`)
})