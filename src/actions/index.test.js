import { correctGuess, actionTypes } from './index';

describe('correct guess', () => {
    test('return an action with type correct_guess', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});
