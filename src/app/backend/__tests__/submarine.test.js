const { moveSubmarineUp, moveSubmarineForward, updateSubmarinePosition, submarinePosition } = require('../src/submarine');

describe('Submarine Movement and Gravity', () => {
    test('submarine should move up', () => {
    
        const initialYPosition = submarinePosition.y;

        moveSubmarineUp();

        const newYPosition = submarinePosition.y;

        expect(newYPosition).toBeLessThan(initialYPosition);
    });

    test('submarine should move forward', () => {

        const initialXPosition = submarinePosition.x;

   
        moveSubmarineForward();


        const newXPosition = submarinePosition.x;

        
        expect(newXPosition).toBeGreaterThan(initialXPosition);
    });

    test('gravity should pull the submarine down', () => {
       
        const initialYPosition = submarinePosition.y;
 
     
        updateSubmarinePosition();  
        updateSubmarinePosition();  
        const newYPosition = submarinePosition.y;

        expect(newYPosition).toBeGreaterThan(initialYPosition);
    });
});
