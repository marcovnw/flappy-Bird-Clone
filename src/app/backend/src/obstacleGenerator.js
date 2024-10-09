function generateObstacles() {
    const obstacles = [];
    const numberOfObstacles = 5 + Math.floor(Math.random() * 5); 

    for (let i = 0; i < numberOfObstacles; i++) {
        const height = Math.floor(Math.random() * 100); 
        const gap = Math.floor(Math.random() * 50); 
        obstacles.push({ height, gap });
    }

    return obstacles;
}

module.exports = { generateObstacles };