/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    return (
      <div>
        <p className="text-2xl font-bold">Login Page {this.props.popupProps}</p>
        <button>Go to Register</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
});

export default connect(reduxState)(Login);
