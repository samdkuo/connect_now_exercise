import * as React from "react";
import "../styles/games.css";
import axios from "axios";
import TextTruncate from "react-text-truncate";
import { Dropdown } from "react-bootstrap";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Card = ({ game }) => {
  const formatDate = (releaseDate) => {
    const date = new Date(releaseDate);

    const initialDay = date.getDay() + 1;
    const day =
      initialDay.toString().length === 1 ? `0${initialDay}` : initialDay;

    const initialMonth = date.getMonth() + 1;
    const month =
      initialMonth.toString().length === 1 ? `0${initialMonth}` : initialMonth;

    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <article className="game-card">
      <div className="game-image" />
      <div className="game-content">
        <h4 className="game-name">{game.name}</h4>
        <p className="game-date">{`Release Date: ${formatDate(
          game.first_release_date
        )}`}</p>
        <div className="game-summary">
          <TextTruncate
            line={3}
            element="span"
            truncateText="…"
            text={game.summary}
          />
        </div>
      </div>
      <div className="game-rating">
        <p>{(+game.rating / 10).toFixed(0)}</p>
      </div>
    </article>
  );
};

const Games = () => {
  const [gameList, setGameList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);
  const orderList = ["Release Date", "Score", "Name"];
  const [asc, setAsc] = React.useState(true);
  const [data, setData] = React.useState({
    name: "",
    score: "",
    order: 0,
  });

  React.useEffect(() => {
    axios
      .get("https://public.connectnow.org.uk/applicant-test/")
      .then((response) => {
        setGameList(
          response.data.sort(
            (a, b) => b.first_release_date - a.first_release_date
          )
        );
        setFilteredList(
          response.data.sort(
            (a, b) => b.first_release_date - a.first_release_date
          )
        );
      });
  }, []);

  const filterByName = (event) => {
    const name = event.target.name;
    const value = event.target.value.toLowerCase();
    setFilteredList(
      gameList.filter((item) => item.name.toLowerCase().includes(value))
    );
    setData({ ...data, [name]: value });
  };

  const filterByScore = (event) => {
    const name = event.target.name;
    const value = event.target.value.toLowerCase();
    setFilteredList(
      gameList.filter((item) => (+item.rating / 10).toFixed(0) >= +value)
    );
    setData({ ...data, [name]: value });
  };

  const sort = (e, event) => {
    let order = data.order;
    let direction = asc;
    let temp = [];

    if (event) {
      order = +event.target.name;
      setData({ ...data, order: order });
    }

    if (e != null) {
      direction = e;
    }

    switch (order) {
      case 0:
        //latest to earliest
        if (direction) {
          temp = filteredList.sort(
            (a, b) => b.first_release_date - a.first_release_date
          );
        } else {
          temp = filteredList.sort(
            (a, b) => a.first_release_date - b.first_release_date
          );
        }
        break;

      case 1:
        if (direction) {
          temp = filteredList.sort((a, b) => b.rating - a.rating);
        } else {
          temp = filteredList.sort((a, b) => a.rating - b.rating);
        }
        break;

      case 2:
        if (direction) {
          temp = filteredList.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
        } else {
          temp = filteredList.sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
          );
        }
        break;

      default:
        temp = filteredList.sort(
          (a, b) => b.first_release_date - a.first_release_date
        );
    }
    setFilteredList(temp);
  };

  const orderDirection = (order) => {
    setAsc(order);
    sort(order);
  };
  
  const reset = () => {
    setFilteredList(gameList);
    setData({
      name: "",
      score: "",
      order: 0,
    });
  };

  return (
    <main className="filter-main">
      <div className="form">
        <form className="filter-form" onSubmit={() => false}>
          <h4 id="filter-heading">Filter Results</h4>

          <label id="name-label">Name [contains]</label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={data.name}
            placeholder="Text String"
            onChange={filterByName}
          />

          <label id="score-label">Minimum Score</label>
          <input
            id="score-input"
            type="number"
            name="score"
            value={data.score}
            placeholder="1-10"
            onChange={filterByScore}
          />

          <label id="order-label">Order By</label>
          <div id="order-input">

            <button id="icon-button" type="button" onClick={() => orderDirection(!asc)}>
              {asc ? <FiArrowUp /> : <FiArrowDown />}
            </button>
          
            <Dropdown onSelect={sort}>
              <Dropdown.Toggle variant="success" id="filter-dropdown">
                {orderList[data.order]}
              </Dropdown.Toggle>

              <Dropdown.Menu id="dropdown-menu">
                {orderList.map((order, index) => (
                  <Dropdown.Item
                    key={index}
                    style={{
                      display: +index === +data.order ? "none" : "block",
                    }}
                    name={index}
                  >
                    {order}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <button id="clear-button" type="reset" onClick={reset}>
            Clear
          </button>
        </form>
      </div>

      <section className="game-container">
        {filteredList.map((game, index) => (
          <Card game={game} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Games;
