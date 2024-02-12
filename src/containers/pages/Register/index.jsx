import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./Register.scss";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log("Data sebelum dikirim :", email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("Success", userCredential);
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <input
            className="input"
            type="text"
            id="email"
            placeholder="Email"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChangeText}
          />
          <button className="btn" onClick={this.handleRegisterSubmit}>
            Register
          </button>
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
