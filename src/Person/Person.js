import React from 'react';
import "./Person.css";

// create a component (ES6)
const person = (props) => {
    return (
        <div onClick={props.click} className={"Person"}>
            <p>my name is: {props.name}</p>
            <small>I am {props.age} years old</small>
            <small>{props.children}</small>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;