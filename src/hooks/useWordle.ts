import { useState } from 'react';
const EMPTY_WORD = '     ';

export default function useWordle() {
    const secretWord = 'stuff';
    const [words, setWords] = useState(Array(6).fill(EMPTY_WORD));
    const [currentWord, setCurrentWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wronglyPlacedLetters, setWronglyPlacedLetters] = useState([]);
    const [absentLetters, setAbsentLetters] = useState([]);

    const onEnter = () => {

    }

    const onLetterClick = (letter: string) => {
        setCurrentWord(`${currentWord}${letter}`)
    }

    const onDelete = () => {
        setCurrentWord(currentWord.slice(0, -1));
    }

    return {
        words,
        correctLetters,
        wronglyPlacedLetters,
        absentLetters,
        onEnter: () => console.log,
        onDelete,
        onLetterClick,
    }
}
