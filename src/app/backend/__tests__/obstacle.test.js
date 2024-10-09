const { generateObstacles } = require("../src/obstacleGenerator");

describe('Obstacle Generation', () => {
    test('should generate an array of obstacles', () => {
        const obstacles = generateObstacles();
        expect(Array.isArray(obstacles)).toBe(true);
        expect(obstacles.length).toBeGreaterThan(0);
    });

    test('each obstacle should have a height and a gap', () => {
        const obstacles = generateObstacles();
        obstacles.forEach(obstacle => {
            expect(obstacle).toHaveProperty('height');
            expect(obstacle).toHaveProperty('gap');
        });
    });

    test('height and gap should be valid numbers', () => {
        const obstacles = generateObstacles();
        obstacles.forEach(obstacle => {
            expect(typeof obstacle.height).toBe('number');
            expect(typeof obstacle.gap).toBe('number');
            expect(obstacle.height).toBeGreaterThanOrEqual(0);
            expect(obstacle.gap).toBeGreaterThanOrEqual(0);
        });
    });
});
