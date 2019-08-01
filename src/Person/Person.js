import React from 'react';

// create a component (ES6)
const person = () => {
    return (
        <div>
            <h1>do whatever we want lmao</h1>
            <p>I'm a person bruh</p>
            <small>I am {Math.floor(Math.random() * 30)} years old</small>
        </div>
    )
};

export default person;