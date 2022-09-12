import { useState } from 'react';
const EMPTY_WORD = '     ';

export interface Word {
    word: string;
    correctLetters?: string[];
    wronglyPlacedLetters?: string[];
}

export default function useWordle() {
    const secretWord = 'stuff';
    const [wordCount, setWordCount] = useState(0);
    const [words, setWords] = useState<Word[]>(Array(6).fill({ word: EMPTY_WORD }));
    const [currentWord, setCurrentWord] = useState('');
    const [allCorrectLetters, setAllCorrectLetters] = useState<string[]>([]);
    const [allWronglyPlacedLetters, setAllWronglyPlacedLetters] = useState<string[]>([]);
    const [allAbsentLetters, setAllAbsentLetters] = useState<string[]>([]);

    const onEnter = () => {
        const newWords = [...words];
        const {
            allCorrect,
            allAbsent,
            allWronglyPlaced,
            currentCorrect,
            currentWronglyPlaced
        } = handleWord(
            secretWord,
            currentWord,
            allCorrectLetters,
            allWronglyPlacedLetters,
            allAbsentLetters
        );
        newWords[wordCount] = {
            word: currentWord,
            correctLetters: currentCorrect,
            wronglyPlacedLetters: currentWronglyPlaced
        };
        setWords(newWords);
        setCurrentWord('');
        setAllCorrectLetters(allCorrect);
        setAllWronglyPlacedLetters(allWronglyPlaced);
        setAllAbsentLetters(allAbsent);
        setWordCount(wordCount + 1);
    }

    const updateWords = (currentWord: string) => {
        const newWords = [...words];
        newWords[wordCount] = { word: currentWord };
        setWords(newWords);
    }

    const onLetterClick = (letter: string) => {
        if (currentWord.length === 5) {
            return false;
        }
        const nextWord = `${currentWord}${letter}`;
        setCurrentWord(nextWord)
        updateWords(nextWord)
    }

    const onDelete = () => {
        setCurrentWord(currentWord.slice(0, -1));
        updateWords(currentWord.slice(0, -1))
    }

    return {
        words,
        correctLetters: allCorrectLetters,
        wronglyPlacedLetters: allWronglyPlacedLetters,
        absentLetters: allAbsentLetters,
        onEnter,
        onDelete,
        onLetterClick,
    }
}

function handleWord(
    secretWord: string,
    currentWord: string,
    correctLetters: string[],
    wronglyPlacedLetters: string[],
    absentLetters: string[]
) {
    const allCorrect = [...correctLetters];
    const allWronglyPlaced = [...wronglyPlacedLetters];
    const allAbsent = [...absentLetters];
    const secretWordLetters = secretWord.split('');

    const currentCorrect = [];
    const currentWronglyPlaced = [];
    for (let i = 0; i < currentWord.length; i++) {
        if (secretWord[i] === currentWord[i]) {
            currentCorrect.push(secretWord[i]);
            allCorrect.push(secretWord[i])
        } else if (secretWordLetters.includes(currentWord[i])) {
            currentWronglyPlaced.push(currentWord[i]);
            allWronglyPlaced.push(currentWord[i])
        } else {
            allAbsent.push(currentWord[i]);
        }
    }
    return { currentCorrect, allAbsent, currentWronglyPlaced, allCorrect, allWronglyPlaced };
}
