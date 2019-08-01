import React from 'react';

// create a component (ES6)
const person = (props) => {
    return (
        <div>
            <p>my name is: {props.name}</p>
            <small>I am {props.age} years old</small>
            <small>{props.children}</small>
        </div>
    )
};

export default person;