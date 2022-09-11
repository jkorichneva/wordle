import Letter from "../Letter/Letter";
import './Table.css';

interface TableProps {
    words: string[];
    correctLetters: string[];
    wronglyPlacedLetters: string[];
    absentLetters: string[];
}

export default function Table(props: TableProps) {
    const { words, correctLetters, absentLetters, wronglyPlacedLetters } = props;
    console.log(words);
    return (
        <div className="Table">
            {words.map(word => {
                const letters = Array.from(word);
                console.log(letters);
                return (
                    <div className="Row">
                        {letters.map(letter => (
                            <Letter
                                letter={letter}
                                correct={correctLetters.includes(letter)}
                                absent={absentLetters.includes(letter)}
                                wrongPlaced={wronglyPlacedLetters.includes(letter)}
                            />
                        ))}
                    </div>);
            })}
        </div>
    )
}
