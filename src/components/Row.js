import { Square } from './Square.js';

let ANSWER = 'CODER'; //await fetchWord();

export function Row({ squares, onPlay, startIndex, nextRow }) {
    function handleClick(e, index) {
      e.target.value = e.target.value.toUpperCase();
      squares[index] = e.target.value;
      onPlay(squares);
  
      if ((index+1) % 5 == 0) {
        let startIndex = index-4;
        let correctCount = 0;
        [...squares.slice(startIndex, index+1)]
          .forEach((l, i) => {
            if(l == ANSWER.charAt(i)) {
              correctCount++;
              document.getElementById("square-"+(startIndex + i)).classList.replace('letter-square', 'letter-square-located');
            }
            else if(ANSWER.includes(l)) {
              document.getElementById("square-"+(startIndex + i)).classList.replace('letter-square', 'letter-square-close');
            }
          });
        if(correctCount == 5) {
          //disable all rows
          [...document.getElementsByClassName("sq")].forEach(sq => sq.disabled = true);
          //show you won div
          document.getElementById("winner").setAttribute("style", "display:block");
        } else {
          //disable prior row, enable next row
          console.log("slicing from %d to %d", index-4, index+1);
          console.log(squares.slice(index-4, index+1));
        }
      }
      if(index < 24) document.getElementById("square-"+(index+1)).focus();
      else {
        [...document.getElementsByClassName("sq")].forEach(sq => sq.disabled = true);
        document.getElementById("loser").setAttribute("style", "display:block");
      }
    }
    return (
      <>
      { Array.from({length:5}).map((it, index) => 
          <Square key={startIndex+index} index={startIndex+index} onFinalLetter={(e) => handleClick(e, startIndex+index)} />) }
        <br/>
      </>
    )
  }