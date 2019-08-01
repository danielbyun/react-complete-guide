import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
    const [personsState, setPersonsState] = useState(
        {
            persons: [
                {name: "Max", age: 28},
                {name: "Dan", age: 26},
                {name: "Matt", age: 13}
            ],
            otherState: 'some other value'
        }
    );

    const [otherState, setOtherState] = useState('some new shit');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // console.log("switch name handler clicked");
        // DONT DO THIS this.state.persons[0].name="test";
        setPersonsState({
            persons: [
                {name: "Max", age: 28},
                {name: "Dan", age: 26},
                {name: "Matt", age: 27}
            ],
            otherState: personsState.otherState
        })
    };

    return (
        <div className="App">
            <h1>i'm learning react</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    )
};

export default App;