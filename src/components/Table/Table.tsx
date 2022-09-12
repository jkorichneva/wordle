import Letter from "../Letter/Letter";
import { Word } from '../../hooks/useWordle';
import './Table.css';

interface TableProps {
    words: Word[];
    absentLetters: string[];
}

export default function Table(props: TableProps) {
    const { words, absentLetters } = props;
    return (
        <div className="Table">
            {words.map((word, wordIndex) => {
                let letters = Array.from(word.word);
                const { correctLetters, wronglyPlacedLetters } = word;
                if (letters.length < 5) {
                    letters = [...letters, ...Array(5 - letters.length).fill(' ')];
                }
                return (
                    <div className="Row" key={`word-${wordIndex}`}>
                        {letters.map((letter, index) => (
                            <Letter
                                key={`word-${wordIndex}-letter-${index}`}
                                letter={letter}
                                correct={!!correctLetters?.includes(letter)}
                                absent={absentLetters.includes(letter)}
                                wrongPlaced={!!wronglyPlacedLetters?.includes(letter)}
                            />
                        ))}
                    </div>);
            })}
        </div>
    )
}
