import React, { Component } from "react";
import Personlist from "./Personlist";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Marieke", color: "pink", colored: false },
      { id: 2, name: "Ricardo", color: "blue", colored: false },
      { id: 3, name: "Asshooooole", color: "brown", colored: false }
    ]
  };

  handleClick = index => {
    this.setState({
      people: this.state.people.map(person => {
        if (person.id === index) {
          person.colored = !person.colored;
        }
        return person;
      })
    });
  };

  removeClick = id => {
    this.setState({
      people: this.state.people.filter(person => {
        return person.id !== id;
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <Personlist
          names={this.state.people}
          handleClick={this.handleClick}
          removeClick={this.removeClick}
        />
      </React.Fragment>
    );
  }
}

export default App;
