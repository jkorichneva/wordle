import './Letter.css';

interface LetterProps {
    letter: string;
    correct: boolean;
    absent: boolean;
    wrongPlaced: boolean;
}

export default function Letter(props: LetterProps) {
    const { letter } = props;
    return <div className={generateLetterClassName(props)}>{letter}</div>;
}

function generateLetterClassName(params: Pick<LetterProps, "correct" | "absent" | "wrongPlaced">) {
    const { correct, absent, wrongPlaced } = params;
    return `Letter ${correct ? 'Letter_correct' : ''} ${absent ? 'Letter_absent' : ''} ${wrongPlaced ? 'Letter_wrongPlaced': ''}`;
}
