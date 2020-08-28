import React from "react";
import GameCover from "./GameCover";
import { Link } from "react-router-dom";

const Game = (props) => {
  const pathLink = "/jeu/screenshots/" + props.id;
  return (
    <>
      <h1 style={{ color: "white" }}>{props.name}</h1>
      <Link to={{ pathname: pathLink, state: { detail: props.screenshot } }}>
        <div>
          <GameCover src={props.cover} alt="game cover" />
        </div>
      </Link>
      <h2 style={{ color: "white" }}>note: {props.rating}</h2>
    </>
  );
};

export default Game;
