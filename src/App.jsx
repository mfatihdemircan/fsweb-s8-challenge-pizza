import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./pages/anasayfa";
import SiparisSayfasi from "./pages/siparissayfasi";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/siparis" component={SiparisSayfasi} />
      </Switch>
    </Router>
  );
}

export default App;