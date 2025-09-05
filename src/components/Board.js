import { Row } from './Row.js';

export function Board({ squares, onPlay }) {
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