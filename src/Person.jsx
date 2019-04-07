import React, { Component } from "react";

const personStyle = {
  textAlign: "center",
  padding: "5px",
  border: "1px solid blue",
  borderRadius: "4px",
  cursor: "default"
};

const removeStyle = {
  float: "right",
  backgroundColor: "red",
  color: "white",
  padding: "1px 10px",
  borderRadius: "6px"
};

class Person extends Component {
  colorStyle = () => {
    return { color: this.props.colored ? this.props.color : "black" };
  };

  render() {
    return (
      <h2 style={personStyle}>
        <span
          style={this.colorStyle()}
          onClick={this.props.handleClick.bind(this, this.props.id)}
        >
          {this.props.id}. {this.props.name}
        </span>
        <span
          style={removeStyle}
          onClick={this.props.removeClick.bind(this, this.props.id)}
        >
          X
        </span>
      </h2>
    );
  }
}

export default Person;
