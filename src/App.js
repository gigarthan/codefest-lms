import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Router>
          <Switch>
            <Route path={"/"} render={() => <h1>Heloo</h1>} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
