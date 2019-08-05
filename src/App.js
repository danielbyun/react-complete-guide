import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: "asdf", name: "Max", age: 28},
            {id: "sdfg", name: "Dan", age: 26},
            {id: "dfgh", name: "Matt", age: 13}
        ],
        otherState: 'some other value'
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.userId === id;
        });

        // creating a new Object to not mutate the original array
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1); // remove one element from array
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        let persons = null;
        let btnClass = "";

        // click={() => this.deletePersonHandler(index)}
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <Person
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        return (
            <div className="App">
                <h1>learning react</h1>
                <button className={btnClass}
                        onClick={this.togglePersonsHandler}>Toggle Button
                </button>
                {persons}
            </div>
        )
    }
}

export default App;