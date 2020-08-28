import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GameList from "./components/GameList";
import ScreenshotPage from "./components/ScreenshotPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/jeu/screenshots/:id" component={ScreenshotPage} />
      </Switch>
    </Router>
  );
}

export default App;
