import "./styles.css";
import React from "react";

export default class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address: null,
      email: null,
      valid: false
    };
  }

  // componentDidMount
  // componentWillUnmount
  // render

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  validator = () => {
    if (this.state.name && this.state.email && this.state.address) {
      this.setState({
        valid: true
      });
    } else {
      this.setState({ valid: false });
    }
  };

  render() {
    return (
      <div className={this.state.valid ? "valid" : "error"}>
        Name:{" "}
        <input onChange={this.handleNameChange} value={this.state.name}></input>
        <br />
        <br />
        Address:{" "}
        <input
          onChange={this.handleAddressChange}
          value={this.state.address}
        ></input>
        <br />
        <br />
        Email:{" "}
        <input
          onChange={this.handleEmailChange}
          value={this.state.email}
        ></input>
        <br />
        <br />
        <button onClick={this.validator}>Sign Up</button>
      </div>
    );
  }
}
