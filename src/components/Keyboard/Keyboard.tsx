import KeyboardButton from "../KeyboardButton/KeyboardButton";
import './Keyboard.css';

interface KeyboardProps {
    correctLetters: string[];
    wronglyPlacedLetters: string[];
    absentLetters: string[];
    onLetterClick: (letter: string) => void;
}

const FIRST_ROW = Array.from('qwertyuiop');
const SECOND_ROW = Array.from('asdfghjkl');
const THIRD_ROW = Array.from('zxcvbnm');

export default function Keyboard(props: KeyboardProps) {
    const { correctLetters, absentLetters, wronglyPlacedLetters, onLetterClick } = props;
    console.log(absentLetters);
    return (
        <div className="Keyboard">
            {[FIRST_ROW, SECOND_ROW, THIRD_ROW].map(row => (
                <div className="KeyboardRow">
                    {row.map(letter => {
                        return (
                            <KeyboardButton
                                letter={letter}
                                correct={correctLetters.includes(letter)}
                                absent={absentLetters.includes(letter)}
                                wrongPlaced={wronglyPlacedLetters.includes(letter)}
                                onClick={onLetterClick}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
