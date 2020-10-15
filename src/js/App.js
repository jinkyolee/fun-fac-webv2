import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
