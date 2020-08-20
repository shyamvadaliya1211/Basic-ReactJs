import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";


class Navi extends Component {
  render = () => (
    <div>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  );
}

export default Navi;
