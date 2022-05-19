import React, { Component } from "react";
import HeaderImage from "../../assets/Products/coverbuku.jpg";
import QuotesIcon from "../../assets/SVG/Quotes";
import Dots from "../../assets/SVG/Dots";
import Button from "../Button/Button";
import { Link } from "react-scroll/modules";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div id="hero" className="bg-slate-200 w-full">
        <div className="flex pt-5 w-[95%] m-auto p-8 items-center">
          <div className="w-1/2 h-full flex justify-center items-center ">
            <div>
              <h1 className="text-[55px] leading-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 hover:from-pink-700 hover:to-yellow-500">
                Toko Buku Terpercaya
              </h1>
              <div className="max-w-md p-5 leading-6 font-semibold text-sm">
                Banyak buku yang tersedia pada toko kami mulai dari buku
                pelajaran, komik, novel, dongeng, dan masih banyak lagi
              </div>
              <Link to="products" spy={true} smooth={true} offset={-60}>
                <div className="max-w-[150px]">
                  <Button title="Get Started" />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="flex justify-end relative z-10 ">
              <img
                src={HeaderImage}
                alt=""
                className="z-10 h-[607px] w-[426px] rounded-2xl"
              />
              <div className="absolute left-10 bottom-12 max-w-[330px] p-8 z-10 flex justify-center items-center bg-[#0b093b] rounded-2xl">
                <div className="absolute -left-5 -top-3">
                  <QuotesIcon />
                </div>
                <div>
                  <p className="text-base white text-white">
                    <em>
                      Buku adalah sumber ilmu terbaik bagi siapa pun yang
                      membacanya dan sahabat paling setia, ia rela mendampingi
                      di mana pun dan kapan pun tanpa pernah memikirkan dirinya
                      karena sebaik-baik teman sepanjang zaman adalah buku
                    </em>
                  </p>
                  <p className="mt-3 text-sm text-[#f2b300] text-right">
                    Andri Ajitama
                  </p>
                </div>
              </div>
              <div className="absolute right-[-55px] bottom-24 z-2">
                <Dots />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
