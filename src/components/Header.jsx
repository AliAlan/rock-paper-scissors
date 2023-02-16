import React from "react";

const Header = ({ value }) => {
  return (
    <header>
      <div className="logo">
        <h1>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </h1>
      </div>
      <div className="score">
        SCORE
        <span>{value}</span>
      </div>
    </header>
  );
};

export default Header;
