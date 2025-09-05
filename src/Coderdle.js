import { useState } from 'react';
import { fetchWord } from './WordFetcher.js';
import { Board } from './components/Board.js';

let ANSWER = 'CODER'; //await fetchWord();

export default function Coderdle() {

  const [squares, setSquares] = useState(Array(25).fill(""));

  function handlePlay(updatedSquares) {
    setSquares(updatedSquares);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={ squares } onPlay={ handlePlay } />
      </div>
    </div>
  );
}