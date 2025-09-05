export function Square({ index, onFinalLetter }) {
    return (
      <>
      <input id={"square-"+index} type="text" size="1" minLength="1" maxLength="1" 
        className="sq letter-square" onChange={ onFinalLetter }/>
      </>
    );
  }