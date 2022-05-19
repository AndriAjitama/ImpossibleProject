import React, { Component } from "react";
class Button extends Component {
  state = {};
  render() {
    return (
      <div
        className="cursor-pointer rounded-2xl ease-in duration-300 border-3 border-solid  w-full p-3 outline-none bg-blue-700 hover:bg-blue-800"
        onClick={this.props.action ? () => this.props.action() : null}
      >
        <div className="text-white text-center font-semibold text-base">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Button;
