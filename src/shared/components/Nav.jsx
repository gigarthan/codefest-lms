import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { signOut } from "../../modules/sign-in/redux/signin.actions";

class Nav extends Component {
  render() {
    const { token } = this.props;
    return (
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        {token && (
          <Menu.Item key="6">
            <Link to="/courses">Courses</Link>
          </Menu.Item>
        )}
        <Menu.Item key="2">About Us</Menu.Item>
        <Menu.Item key="3">Contact US</Menu.Item>
        {!token && (
          <Menu.Item key="4">
            <Link to="/signin">Sign In</Link>
          </Menu.Item>
        )}
        {!token && (
          <Menu.Item key="5">
            <Link to="/signup">Register</Link>
          </Menu.Item>
        )}
        {token && (
          <Menu.Item key="9">
            <Link to="/questions/new">Add Questions</Link>
          </Menu.Item>
        )}
        {token && (
          <Menu.Item key="5">
            <Button onClick={this.props.signOut}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

const map = ({ auth: { token, role } }) => {
  return { token, role };
};

export default connect(
  map,
  { signOut }
)(Nav);
