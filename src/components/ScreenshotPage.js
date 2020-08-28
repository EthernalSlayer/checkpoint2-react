import React from "react";
import { Link } from "react-router-dom";

const ScreenshotPage = (props) => {
  console.log(props.location.state.detail);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SCREENSHOTS</h1>
      <div>
        <Link to="/">Retour à l'accueil</Link>
      </div>
      {props.location.state.detail.map((item) => {
        return (
          <img
            style={{ width: "500px" }}
            src={item.image}
            alt="game screenshot"
          />
        );
      })}
    </div>
  );
};

export default ScreenshotPage;
