import React, { Component } from "react";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import { signIn } from "../redux/signin.actions";

class SignInContainer extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push("/");
    }
  }

  render() {
    return <SignIn onSignIn={this.props.signIn} />;
  }
}

function mapStateToProps({ auth: { token } }) {
  return { token };
}

const withState = connect(
  mapStateToProps,
  { signIn }
)(SignInContainer);

export default withState;
