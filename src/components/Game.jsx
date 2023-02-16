import { Choice } from "./";
const Game = ({ clickHandler }) => {
  const choices = [
    { name: "rock", bg: "rock", img: "/public/images/icon-rock.svg" },
    { name: "paper", bg: "paper", img: "/public/images/icon-paper.svg" },
    {
      name: "scissors",
      bg: "scissors",
      img: "/public/images/icon-scissors.svg",
    },
  ];
  return (
    <section className="game">
      {choices.map((item) => (
        <Choice
          key={item.name}
          clickHandler={clickHandler}
          name={item.name}
          bg={item.bg}
          img={item.img}
        />
      ))}
    </section>
  );
};

export default Game;
