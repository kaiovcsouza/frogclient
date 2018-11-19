import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

class SideDrawer extends Component {
  render() {
    let drawerClasses = ["sidedw"];

    if (this.props.show) {
      drawerClasses = ["sidedw", "open"];
    }

    return (
      <nav className={drawerClasses.join(" ")}>
        <ul>
          <li onClick={this.props.close}>
            <Link to="/">Home</Link>
          </li>

          <li onClick={this.props.close}>
            <Link to="/cad">Cadastro</Link>
          </li>
          <li onClick={this.props.close}>
            <Link to="/teste">Outro link</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default SideDrawer;
