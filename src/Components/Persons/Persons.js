import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js[ constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
    return true; // if should continue updating
  }

  // get this for componentWillReceiveProps
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  // used after the update is finished
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log(Snapshot);
    console.log("[Persons.js] componentDidUpdate");
  }

  // cleaning up stuff
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    // runs inside render
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
