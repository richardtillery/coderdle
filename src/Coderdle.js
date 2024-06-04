import { useState } from 'react';

function Square({ index, onFinalLetter }) {
  return (
    <>
    <input id={"square-"+index} type="text" size="1" minLength="1" maxLength="1" className="letter-square" onChange={ onFinalLetter }/>
    </>
  );
}

function Row({ squares, onPlay, startIndex, nextRow }) {
  function handleClick(e, index) {
    e.target.value = e.target.value.toUpperCase();
    squares[index] = e.target.value;
    onPlay(squares);

    if ((index+1) % 5 == 0) {
      //any letters solved?
      //[...squares.slice(index-4, index+1)].forEach()
      //disable prior row, enable next row
      console.log("slicing from %d to %d", index-4, index+1);
      console.log(squares.slice(index-4, index+1));
    }
    if(index < 24) document.getElementById("square-"+(index+1)).focus();
  }
  return (
    <>
    { Array.from({length:5}).map((it, index) => 
        <Square key={startIndex+index} index={startIndex+index} onFinalLetter={(e) => handleClick(e, startIndex+index)} />) }
      <br/>
    </>
  )
}

function Board({ squares, onPlay }) {
  return (
    <>    
      <Row id="row-1" squares={ squares } onPlay={ onPlay } startIndex={ 0 } nextRow={ document.getElementById("row-2") }/>
      <Row id="row-2" squares={ squares } onPlay={ onPlay } startIndex={ 5 } nextRow={ document.getElementById("row-3") }/>
      <Row id="row-3" squares={ squares } onPlay={ onPlay } startIndex={ 10 } nextRow={ document.getElementById("row-4") }/>
      <Row id="row-4" squares={ squares } onPlay={ onPlay } startIndex={ 15 } nextRow={ document.getElementById("row-5") }/>
      <Row id="row-5" squares={ squares } onPlay={ onPlay } startIndex={ 20 } />
    </>
  );
}

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