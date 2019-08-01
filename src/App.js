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

    switchNameHandler = () => {
        // console.log("switch name handler clicked");
        // DONT DO THIS this.state.persons[0].name="test";
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: "Dan", age: 26},
                {name: "Matt", age: 27}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>i'm learning react</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }
}

export default App;