import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { configureStore } from "./store/index";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
