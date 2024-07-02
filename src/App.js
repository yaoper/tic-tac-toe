function Square({ value }){
  function handleClick() {
    console.log('Clicked!')
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square value="9"/>
      </div>
    </>
  );
}