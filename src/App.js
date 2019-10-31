import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { configureStore } from "./store/index";
import { Layout, Menu, Typography } from "antd";

const store = configureStore();

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header style={{ backgroundColor: "#fff" }}>
            <span>
              <Title style={{ display: "inline" }}>SKILLO</Title>
            </span>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px", float: "right" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About Us</Menu.Item>
              <Menu.Item key="3">Contact US</Menu.Item>
              <Menu.Item key="4">Sign In / Register</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <div className="App">
              <header className="App-header"></header>
              <main>
                <Switch>
                  <Route path={"/"} render={() => <h1>Heloo</h1>} />
                </Switch>
              </main>
            </div>
          </Content>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
