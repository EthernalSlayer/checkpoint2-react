import React, { useEffect, useState } from "react";
import axios from "axios";

import Game from "./Game";
import GameCard from "./GameCard";
import GamesContainer from "./GamesContainer";
import DeleteButton from "./DeleteButton";
import FilterButton from "./FilterButton";
import GamePageContainer from "./GamePageContainer";

const GameList = (props) => {
  const [games, setGames] = useState();
  const [best, setBest] = useState(false);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (e) => {
    let name = e;
    setGames(games.filter((game) => game.name !== name));
  };

  const handleBest = () => {
    setGames(games.filter((game) => game.rating >= 4.5));
    setBest(!best);
  };

  const handleAll = () => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <GamePageContainer>
      <GamesContainer>
        {games &&
          games.map((game, index) => {
            return (
              <GameCard>
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  cover={game.background_image}
                  rating={game.rating}
                  screenshot={game.short_screenshots}
                />
                <DeleteButton
                  key={index}
                  onClick={() => handleDelete(game.name)}
                >
                  DELETE
                </DeleteButton>
              </GameCard>
            );
          })}
      </GamesContainer>
      {best ? (
        <FilterButton onClick={handleAll}>ALL GAMES</FilterButton>
      ) : (
        <FilterButton onClick={handleBest}>BEST GAMES</FilterButton>
      )}
    </GamePageContainer>
  );
};

export default GameList;
