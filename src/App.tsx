import './App.css';
import Table from "./components/Table/Table";
import Keyboard from './components/Keyboard/Keyboard';
import useWordle from './hooks/useWordle';

function App() {
    const {
        words,
        correctLetters,
        absentLetters,
        wronglyPlacedLetters,
        onEnter,
        onDelete,
        onLetterClick,
    } = useWordle();
  return (
    <div className="App">
      <Table
          words={words}
          correctLetters={correctLetters}
          wronglyPlacedLetters={wronglyPlacedLetters}
          absentLetters={absentLetters}
      />
        <Keyboard
            correctLetters={correctLetters}
            absentLetters={absentLetters}
            wronglyPlacedLetters={wronglyPlacedLetters}
            onLetterClick={onLetterClick}
        />
        <button type="button" onClick={onEnter}>
            Enter
        </button>
        <button type="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default App;
