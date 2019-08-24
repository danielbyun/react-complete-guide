import React, { useEffect } from "react";
import classes from "./Cockpit.css";
import "./Cockpit.css";

// const cockpit = (props) => {

// };

// functional component
function Cockpit(props) {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    const timer = setTimeout(() => {
      // faking http request
      alert("saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // control when this executes

  // has no 2nd argument, will run every update cycle
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";

  console.log(props.showPersons);

  if (props.showPersons) {
    btnClass = "Red";
  }
  if (props.persons.length <= 2) {
    assignedClasses.push("Red");
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>why ain't you working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}

export default React.memo(Cockpit);
