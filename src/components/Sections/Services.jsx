import React, { Component } from "react";

import AddImage1 from "../../assets/Products/bukubestseller.jpg";
import AddImage2 from "../../assets/Products/bukubestseller2.png";
import AddImage3 from "../../assets/Products/bukubestseller3.jpg";
import AddImage4 from "../../assets/Products/bukubestseller4.jpg";
import imgBook from "../../assets/Products/icons/book.png";
import ServicesCard from "../Molecules/ServiceCard";
import Slider from "../Molecules/Slider";
import Button from "../Button/Button";

class Services extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="services" className="w-full">
          <div className="py-4 bg-[#0b093b]">
            <div className="w-full max-w[1220px] px-8 ">
              <Slider/>
            </div>
          </div>
          <div className="py-16 bg-[#f5f5f5]">
            <div className="w-full max-w[1220px] px-8 mb-20 ">
              <div className="ml-[75px]">
                <h1 className="text-4xl font-extrabold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-black">Kategori Buku</h1>
                <p className="text-sm">
                  Terdapat berbagai macam kategori buku yang tersedia
                  <br />
                  yang bisa anda dapatkan di Dewa Buku
                </p>
              </div>
              <div className="flex px-10 justify-center">
                <div className="w-[20%] mr-[5%] py-20">
                  <ServicesCard
                    img={imgBook}
                    title="Novel"
                    desc="Novel adalah salah satu jenis karya sastra yang berbentuk prosa. Kisah di dalam novel merupakan hasil karya imajinasi yang membahas tentang permasalahan kehidupan seseorang atau berbagai tokoh"
                  />
                </div>
                <div className="w-[20%] mr-[5%] py-20">
                  <ServicesCard
                    img={imgBook}
                    title="Komik"
                    desc="Novel adalah salah satu jenis karya sastra yang berbentuk prosa. Kisah di dalam novel merupakan hasil karya imajinasi yang membahas tentang permasalahan kehidupan seseorang atau berbagai tokoh."
                  />
                </div>
                <div className="w-[20%] mr-[5%] py-20">
                  <ServicesCard
                    img={imgBook}
                    title="Pelajaran"
                    desc="Novel adalah salah satu jenis karya sastra yang berbentuk prosa. Kisah di dalam novel merupakan hasil karya imajinasi yang membahas tentang permasalahan kehidupan seseorang atau berbagai tokoh."
                  />
                </div>
                <div className="w-[20%] py-20 ">
                  <ServicesCard
                    img={imgBook}
                    title="Bahasa"
                    desc="Novel adalah salah satu jenis karya sastra yang berbentuk prosa. Kisah di dalam novel merupakan hasil karya imajinasi yang membahas tentang permasalahan kehidupan seseorang atau berbagai tokoh"
                  />
                </div>
              </div>
            </div>
            <div className="text-slate-100 bg-gray-500 h-[85vh]">
              <div className="w-full max-w[1220px] my-0 mx-auto py-0 px-8">
                <div className="flex justify-between items-center mx-24 my-0 py-24 px-0 relative">
                  <div className="w-1/2 max-w-[500px]">
                    <h4 className="text-base font-semibold">
                      Paket Buku Sedang Diskon
                    </h4>
                    <h2 className="font-extrabold text-5xl mb-6">
                      Jalan Pintas Menjadi Master ReactJS
                    </h2>
                    <p className="text-sm">
                      Paket buku keluaran terbaru, dengan membeli satu paket
                      anda bisa menjadi seorang master pada bahasa pemrograman
                      JavaScript dengan framework ReactJS
                    </p>
                    <div className="max-w-[150px] m-36">
                      <Button title="Beli" action={() => alert("clicked")}/>
                    </div>
                  </div>
                  <div className="w-1/2 absolute top-[-70px] right-0">
                    <div className="w-full">
                      <div className="flex items-center">
                        <div className="flex justify-center items-center w-[48%] mr-10 mb-0 mt-3 ml-[6%]">
                          <img
                            src={AddImage1}
                            alt="office"
                            className="w-full h-auto rounded-2xl"
                          />
                        </div>
                        <div className="w-[30%] ml-[5%]">
                          <img
                            src={AddImage2}
                            alt="office"
                            className="w-full h-auto rounded-2xl"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-[20%] ml-[40%]">
                          <img
                            src={AddImage3}
                            alt="office"
                            className="w-full h-auto rounded-2xl"
                          />
                        </div>
                        <div className="w-[30%] ml-[5%]">
                          <img
                            src={AddImage4}
                            alt="office"
                            className="w-full h-auto rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
