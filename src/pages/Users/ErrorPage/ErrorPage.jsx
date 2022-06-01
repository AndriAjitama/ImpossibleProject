import React, { Component } from "react";
import ErrorPages from "../../../assets/errorPage.png";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <div className="flex bg-black">
        <img src={ErrorPages} alt="" className=" h-screen w-screen" />
      </div>
    );
  }
}

export default ErrorPage;
