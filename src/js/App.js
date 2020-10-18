import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/Home";
import ContentMain from "./routes/ContentMain";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/content" component={ContentMain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
