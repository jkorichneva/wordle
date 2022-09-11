import './KeyboardButton.css';

interface KeyboardButtonProps {
    letter: string;
    correct: boolean;
    absent: boolean;
    wrongPlaced: boolean;
    onClick: (letter: string) => void;
}

export default function KeyboardButton(props: KeyboardButtonProps) {
    const { letter, onClick } = props;
    return <button className={generateKeyboardButtonClassName(props)} onClick={onClick}>{letter}</button>;
}

function generateKeyboardButtonClassName(params: Pick<KeyboardButtonProps, "correct" | "absent" | "wrongPlaced">) {
    const { correct, absent, wrongPlaced } = params;
    return `KeyboardButton ${correct ? 'KeyboardButton_correct' : ''} ${absent ? 'KeyboardButton_absent' : ''} ${wrongPlaced ? 'KeyboardButton_wrongPlaced': ''}`;
}
