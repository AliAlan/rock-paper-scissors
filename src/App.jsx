import { Game, GameResult, Header } from "./components";
import { useState } from "react";
function App() {
  const choices = ["rock", "paper", "scissors"];
  const [isOver, setIsOver] = useState(false);
  const [data, setData] = useState([]);

  const random = Math.floor(Math.random() * choices.length);
  const clickHandler = (name, bg, img) => {
    setData([...data, { name: name, bg: bg, img: img }]);
    setIsOver((prevState) => (prevState = !prevState));
  };
  return (
    <div>
      <Header />
      {isOver ? (
        <GameResult data={data} computerChoice={choices[random]} />
      ) : (
        <Game clickHandler={clickHandler} />
      )}
    </div>
  );
}

export default App;
