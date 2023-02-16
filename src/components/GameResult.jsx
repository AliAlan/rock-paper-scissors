const GameResult = ({ data, computerChoice }) => {
  const winners = [
    {
      user: "rock",
      pc: "scissors",
      winner: "rock",
    },
    {
      user: "rock",
      pc: "paper",
      winner: "paper",
    },
    {
      user: "paper",
      pc: "rock",
      winner: "paper",
    },
    {
      user: "paper",
      pc: "scissors",
      winner: "scissors",
    },
    {
      user: "scissors",
      pc: "rock",
      winner: "rock",
    },
    {
      user: "scissors",
      pc: "paper",
      winner: "paper",
    },
  ];
  const a = winners.filter(
    (item) => item.user === data[0].name && item.pc === computerChoice
  );

  return (
    <section className="results-container">
      <div className="sides">
        <h2>You Picked</h2>
        <div className={`brdr ${data[0].bg}`}>
          <div className=" choise">
            <img src={data[0].img} alt={data[0].name} />
          </div>
        </div>
      </div>
      <div className="result">
        <h1>YOU {a[0].winner === data[0].name ? "WIN" : "LOSE"}</h1>
        <button className="cta">PLAY AGAIN</button>
      </div>
      <div className="sides">
        <h2>The House Picked</h2>
        <div className={`brdr ${computerChoice}`}>
          <div className=" choise">
            <img
              src={`/public/images/icon-${computerChoice}.svg`}
              alt={computerChoice}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameResult;
