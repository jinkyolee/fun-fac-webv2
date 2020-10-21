import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/Home/Home";
import {
  ContentMain,
  ContentPalace,
  ContentGame,
} from "./routes/ContentMain/ContentMain";
import Novel from "./routes/Novel";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/content">
          <Route path="/content/main" component={ContentMain} />
          <Route path="/content/palace" component={ContentPalace} />
          <Route path="/content/game" component={ContentGame} />
          <Route path="/content/novel" component={Novel} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
