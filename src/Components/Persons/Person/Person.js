import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");

    // runs after Persons.js [the parent component]
    return (
      //           isAuth={this.props.isAuthenticated}

      <Aux>
        <div className="Person">
          <AuthContext.Consumer>
            {context =>
              context.authenticated ? (
                <p>authenticated</p>
              ) : (
                <p>Please log in</p>
              )
            }
          </AuthContext.Consumer>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            // ref={inputEl => {
            //   this.inputElement = inputEl;
            // }}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

// give you a warning if you pass in an incorrect types
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
