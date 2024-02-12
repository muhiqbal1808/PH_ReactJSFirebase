/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { actionUserName } from "../../../config/redux/action";

class Login extends React.Component {
  changeUser = () => {
    this.props.changeUserName();
  };
  render() {
    return (
      <div>
        <p className="text-2xl font-bold">Login Page {this.props.userName}</p>
        <div className="flex">
          <button onClick={this.changeUser} className="btn">
            Change User Name
          </button>
          <button className="btn">Go to Dashboard</button>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
  userName: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName()),
});

export default connect(reduxState, reduxDispatch)(Login);
