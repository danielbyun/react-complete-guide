import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";

// const cockpit = (props) => {

// };

// functional component
function Cockpit(props) {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // const timer = setTimeout(() => {
    //   // faking http request
    //   console.log("saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click(); // can be placed here bc useEffect() runs after the render()

    return () => {
      // clearTimeout(timer);
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Cockpit);
