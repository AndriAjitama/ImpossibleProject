import React, { Component } from "react";
import { Link } from "react-scroll";
import LogoImg from "../../assets/Logo/ImposibleProject.png";

class Footer extends Component {
  state = {};
  render() {
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };

    return (
      <div>
        <div className="bg-[#0b093b]">
          <div className="w-full max-w-[1220px] m-auto ">
            <div className="py-6 flex justify-between items-center">
              <Link
                className="flex justify-center items-center ease-in duration-300 cursor-pointer"
                to="hero"
                smooth={true}
                offset={-80}
              >
                <img src={LogoImg} className="h-10 w-10" alt="" />
                <h1 className="ml-2 mt-1 text-base text-[#fff] font-extrabold">
                  .Dewa Buku
                </h1>
              </Link>
              <div className="text-[#fff] text-sm">
                © {getCurrentYear()} - Hak Cipta
                <span className="text-sm text-[#7620ff] "> Dewa Buku</span>
              </div>
              <Link
                className="text-[#fff] text-sm ease-in duration-300 cursor-pointer"
                to="hero"
                smooth={true}
                offset={-80}
              >
                Kembali Ke Atas
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
