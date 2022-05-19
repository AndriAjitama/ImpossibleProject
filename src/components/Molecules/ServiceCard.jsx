import React, { Component } from "react";

class ServicesCard extends Component {
  state = {};
  render() {
    return (
      <div className="w-full flex flex-col">
        <img src={this.props.img} alt="" className="h-[60px] w-[60px]"></img>
        <div className="w-full max-w-[300px] py-4  text-xl font-extrabold">
          {this.props.title}
        </div>
        <div className="text-xs font-medium w-full max-w-[300px] mx-0 my-auto leading-loose font-sans text-justify">
          {this.props.desc}
        </div>
      </div>
    );
  }
}

export default ServicesCard;
