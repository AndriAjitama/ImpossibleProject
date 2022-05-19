import React, { Component } from "react";
import { Link } from "react-scroll/modules";
import Search from "../Button/Search";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-between p-3 px-10 bg-gray-800 place-items-center sticky top-0 z-50">
        <div className="place-items-center flex w-1/2">
          <img
            src={require("../../assets/Logo/ImposibleProject.png")}
            alt=""
            style={{ height: "50px", width: "50px" }}
            className="flex"
          />
          <p className="self-center text-xl font-semibold whitespace-nowrap text-white pr-48 cursor-pointer">
            .DewaBuku
          </p>
          <Search />
        </div>
        <div className=" flex space-x-8 cursor-pointer font-semibold text-base">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-60}
            activeClass=" border-b-4 border-[#7620ff] text-blue-500"
            className=" text-blue-300 hover:text-blue-500 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110"
          >
            Beranda
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
            activeClass=" border-b-4 border-[#7620ff] text-blue-500"
            className=" text-blue-300 hover:text-blue-500 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110"
          >
            Kategori
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-60}
            activeClass=" border-b-4 border-[#7620ff] text-blue-500"
            className=" text-blue-300 hover:text-blue-500 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110"
          >
            Buku
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            activeClass=" border-b-4 border-[#7620ff] text-blue-500"
            className=" text-blue-300 hover:text-blue-500 hover:transition hover:duration-300 hover:ease-in-out hover:scale-110"
          >
            Kontak
          </Link>
        </div>

        <div className="place-items-center cursor-pointer font-semibold space-x-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center"
          >
            Login
          </button>

          <Link to="products" spy={true} smooth={true} offset={-60}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 "
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
