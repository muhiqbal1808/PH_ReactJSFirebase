/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { loginUserAPI } from "../../../config/redux/action";

import Button from "../../../components/atom/Button";
import Input from "../../../components/atom/Input";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    redirect: false,
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .loginAPI({
        email: email,
        password: password,
      })
      .catch((err) => err);
    if (res) {
      console.log("Login Success");
      this.setState({
        email: "",
        password: "",
      });
      this.setState({
        redirect: true,
      });
    } else {
      console.log("Login Failure");
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" replace={true} />;
    } else {
      return (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="border border-[#bfbfbf] p-4 rounded-xl shadow-lg shadow-gray-500/25">
            <p className="m-0 font-bold text-2xl text-[#2196f3] mb-4">
              Login Page
            </p>
            <Input
              style="block min-w-[300px] mt-3"
              type="text"
              id="email"
              placeholder="Email"
              onChange={this.handleChangeText}
              value={this.state.email}
              loading={this.props.isLoading}
            />
            <Input
              style="block min-w-[300px] mt-3 input-disabled"
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChangeText}
              value={this.state.password}
              loading={this.props.isLoading}
            />
            <Button
              style="block mx-auto bg-[#2196f3] text-white min-w-[200px] text-md font-bold uppercase mt-4 hover:bg-[#1873bb]"
              onClick={this.handleLoginSubmit}
              title="Login"
              loading={this.props.isLoading}
            />
          </div>
        </div>
      );
    }
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
