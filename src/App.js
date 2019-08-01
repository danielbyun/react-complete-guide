import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 28},
            {name: "Dan", age: 26},
            {name: "Matt", age: 13}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // console.log("switch name handler clicked");
        // DONT DO THIS this.state.persons[0].name="test";
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Dan", age: 26},
                {name: "Matt", age: 27}
            ],
            otherState: 'some other state',
            showPersons: false
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Ted", age: 28},
                {name: event.target.value, age: 45},
                {name: "Robin", age: 43}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        const style = {
            backgroundColor: "#efefef",
            font: "inherit",
            borderRadius: "7px",
            padding: "8px",
            margin: "15px",
            cursor: "pointer"
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, "New Shit!")}
                        changed={this.nameChangedHandler}
                    />
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>learning react</h1>
                <button style={style} onClick={this.togglePersonsHandler}>Toggle Button</button>
                {persons}
            </div>
        )
    }
}

export default App;