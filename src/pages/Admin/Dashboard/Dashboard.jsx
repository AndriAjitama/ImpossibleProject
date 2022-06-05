import React, { Component } from "react";
import ilustasi from "../../../assets/ilustrasiDashboard.png";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={ilustasi} alt="" />
      </div>
    );
  }
}

export default Dashboard;
