import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

// class based component
class App extends Component {
  // first thing that runs (1)
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  // more modern syntax (same thing as putting it in the constructor)
  state = {
    persons: [
      { id: "asdf", name: "Max", age: 28 },
      { id: "sdfg", name: "Dan", age: 26 },
      { id: "dfgh", name: "Matt", age: 13 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  // runs after the constructor (2)
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    // returning the old state
    return state;
  }

  // runs after render (4)
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // disable or allow update
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");

    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // creating a new Object to not mutate the original array
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this is setting synchronously so is not guaranteed that itll be performed immediately
    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1
    // });

    // this is setting it and updating immediately
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // remove one element from array
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // runs after getDerivedStateFromProps (3)
  render() {
    console.log("[App.js] render");

    let persons = null;
    // click={() => this.deletePersonHandler(index)}
    // runs while render is running
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
