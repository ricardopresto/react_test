import React, { Component } from "react";
import Person from "./Person";

class Personlist extends Component {
  render() {
    return this.props.names.map(person => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        color={person.color}
        colored={person.colored}
        handleClick={this.props.handleClick}
        removeClick={this.props.removeClick}
      />
    ));
  }
}

export default Personlist;
