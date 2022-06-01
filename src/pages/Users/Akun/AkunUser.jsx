import React, { Component } from "react";
import AkunUsers from "../../../assets/akunUser.jpg";
import Header from "../PageUser/Header";

class AkunUser extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <img src={AkunUsers} alt="" className="w-screen h-screen" />
        </div>
      </div>
    );
  }
}

export default AkunUser;
