import * as React from "react";
import "../styles/games.css";
const Filter = () => {
  return (
    <main className="main">
      <form className="form filter-form">
        <h3>Filter Results</h3>

        <label>Name [contains]</label>
        <input type="text" />

        <label>Minimum Score</label>
        <input type="number" placement="1-10" />

        <label>Order By</label>
        <select>
          {["Release Date", "Score", "Name"].map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>

        <button type="submit">Clear</button>
      </form>
    </main>
  );
};

const Games = () => {
  return (
    <main>
      <Filter />
      <section></section>
    </main>
  );
};

export default Games;
