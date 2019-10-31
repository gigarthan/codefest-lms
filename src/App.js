import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { configureStore } from "./store/index";
import { Layout, Menu, Typography } from "antd";
import { connect } from "react-redux";
import SignInContainer from "./modules/sign-in/components/SignInContainer";
import SignUpContainer from "./modules/sign-up/components/SignUpContainer";
import CourseContainer from "./modules/courses/components/CourseContainer";
import CourseListContainer from "./modules/courses/components/CourseListContainer";
import AddCourseContainer from "./modules/add-course/components/AddCourseContainer";
import AddQuestionsContainer from "./modules/add-questions/components/AddQuestionsContainer";
import QuizContainer from "./modules/quiz/components/QuizContainer";
import Nav from "./shared/components/Nav";

const store = configureStore();

const { Title } = Typography;
const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Header style={{ backgroundColor: "#fff" }}>
              <span>
                <Title style={{ display: "inline" }}>SKILLO</Title>
              </span>
              <Nav />
            </Header>
            <Content>
              <div className="App">
                <header className="App-header"></header>
                <main>
                  <Switch>
                    <Route path={"/signin"} component={SignInContainer} />
                    <Route path={"/signup"} component={SignUpContainer} />
                    <Route
                      path={"/courses/id/quiz/id"}
                      component={QuizContainer}
                    />
                    <Route path={"/courses/id"} component={CourseContainer} />
                    <Route
                      path={"/courses/new"}
                      component={AddCourseContainer}
                    />
                    <Route
                      path={"/questions/new"}
                      component={AddQuestionsContainer}
                    />
                    <Route path={"/courses"} component={CourseListContainer} />
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
}

function mapStateToProps({ auth: { token, role } }) {
  return { token, role };
}

export default App;
