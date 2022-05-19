import React, { Component } from "react";
import Button from "../Button/Button";

class ProductCard extends Component {
  state = {};
  render() {
    return (
      <div className="w-full mt-8 px-3 overflow-hidden hover:scale-110 transition duration-300">
        <div
          className="cursor-pointer ease-in duration-300 bg-transparent border-0 outline-none p-0 m-0"
          onClick={this.props.action ? () => this.props.action() : null}
        >
          <img
            className="w-full h-[350px] mp-5 mb-3 rounded-2xl hover:opacity-50 object-contain bg-slate-400"
            src={this.props.img}
            alt=""
          ></img>
        </div>
        <h3 className="pb-3 text-xl max-w-[350px] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible">
          {this.props.title}
        </h3>
        <p className="text-sm text-justify max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible">
          {this.props.text}
        </p>
        <p className="pt-3 text-[#f2b300] font-extrabold text-2xl text-left">
          Rp. {this.props.price}
        </p>
        <div className="max-w-[120px] mt-5 mb-0 ml-auto mr-auto pb-5">
          <Button title="Beli" action={this.props.action} />
        </div>
      </div>
    );
  }
}

export default ProductCard;
