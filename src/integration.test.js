import { storeFactory } from '../test/testUtills';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfullGuess = 'train';
    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsucceful guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    {
                        guessedWord: unsuccessfullGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for succeful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guess words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsucceful guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess));
            const newState = store.getState();
            const expectedState = {
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsuccessfullGuess, letterMatchCount: 3 }
                ],
                secretWord
            };
            // console.log('unsucceful', newState);
            // console.log('unsucceful', expectedState);
            // expect(newState).toEqual(expectedState);

            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for succeful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: secretWord, letterMatchCount: 5 }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
