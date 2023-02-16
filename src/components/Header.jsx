import React from "react";

const Header = () => {
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
        <span>12</span>
      </div>
    </header>
  );
};

export default Header;
