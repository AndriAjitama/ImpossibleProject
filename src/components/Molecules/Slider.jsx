import React, { Component } from "react";
import Logo1 from "../../assets/Logo/gramedia.png";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div className="flex">
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
        <div className="flex justify-center items-center w-full h-24 cursor-pointer">
          <img className="w-full h-full p-[10%]" src={Logo1} alt="" />
        </div>
      </div>
    );
  }
}

export default Slider;
