import React, { Component } from "react";
import AddImage2 from "../../../assets/Products/bukubestseller.jpg";
import Button from "../../../components/Button/Button";
import ProductKomputer from "./ProductKomputer";
import ProductNovel from "./ProductNovel";
import ProductKomik from "./ProductKomik";
import ProductRomance from "./ProductRomance";

class Products extends Component {
  state = {};
  render() {
    return (
      <div id="products" className="w-full">
        <div className="bg-slate-100 p-10">
          {/* <div className="w-full max-w-[1320px] my-0 mx-auto py-0 px-[30px]">
            
            

          </div> */}
          <div className="w-full max-w-[1320px] my-0 mx-auto py-0 px-[30px]">
            <div>
              <h1 className="font-extrabold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
                Buku Teknologi Komputer
              </h1>
              <p className="text-sm">
                Terdapat banyak buku tentang teknologi komputer terbaru dan
                lama,
                <br />
                dari hardware hingga software.
              </p>
            </div>

            <ProductKomputer />

            <div className="flex justify-center items-center pb-24">
              <div className="mt-10 w-52 ">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-5xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
                Buku Komik
              </h1>
              <p className="text-sm">
                Terdapat banyak buku komik terbaru dan lama,
                <br />
                terdapat pula komik series terlengkap.
              </p>
            </div>

            <ProductKomik />

            <div className="flex justify-center items-center pb-24">
              <div className="mt-10 w-52">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
                Buku Novel
              </h1>
              <p className="text-sm">
                Terdapat banyak buku novel terbaru dan lama,
                <br />
                dari percintaan sampai kehidupan.
              </p>
            </div>

            <ProductNovel />

            <div className="flex justify-center items-center pb-24">
              <div className="mt-10 w-52 ">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
                Buku Romance
              </h1>
              <p className="text-sm">
                Terdapat banyak buku romantis terbaru dan lama,
                <br />
                dari percintaan dan kesedihan yang mengharukan.
              </p>
            </div>

            <ProductRomance />

            <div className="flex justify-center items-center pb-24">
              <div className="mt-10 w-52 ">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#a19b9d]">
          <div className=" w-full max-w-[1220px] px-20 ml-20">
            <div className="flex justify-between items-center pt-16 pb-8  relative">
              <div className="relative w-1/2">
                <div className="w-full absolute top-[-300px] left-0">
                  <div className="w-full px-[15%] flex justify-center items-center">
                    <img
                      className="w-full rounded-2xl"
                      src={AddImage2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <h4 className="text-base font-semibold">
                  Buku Terlaris Bulan April
                </h4>
                <h2 className="text-5xl font-extrabold mb-5 text-yellow-300">
                  Jalan Pintas Menjadi Master ReactJS
                </h2>
                <p className="text-sm text-justify indent-8">
                  Pengen tau caranya bikin Aplikasi Zaman Now? Anda harus kenal
                  dengan ReactJS, sebuah library Javascript untuk membangun User
                  Interface yang dibuat oleh Facebook. Aplikasi yang dibuat
                  ReacJS terlihat super cepat, stabil, responsif, interaktif dan
                  cool. Buku ini diawali dengan Pengenalan ReactJS, Cara
                  Termudah Instalasi React, Dasar React (Component, Props,
                  State, Event, Router, Transition, JSON), kemudian diterapkan
                  dalam membuat proyek aplikasi nyata, seperti Aplikasi
                  Aktivitas Harian, Aplikasi Homestay dan Single Page
                  Application. Selain itu, buku disajikan dalam bentuk Langkah
                  demi Langkah disertai Visualisasi Diagram. Penjelasan tiap
                  baris code yang telah disederhanakan sedemikian rupa. Format
                  buku Full Color (semua halaman berwarna yang akan memanjakan
                  mata Anda dalam menikmati pembelajaran React). Dengan begitu,
                  buku ini sangat praktis dan aplikatif, dirancang untuk 7 jam
                  masa pembelajaran, sehingga Anda dapat menguasai ReactJS
                  dengan cepat. Untuk lebih memudahkan Anda, disertakan pula CD
                  berisi Software, Source Code dan Video Tutorial.
                </p>
                <div className="my-8 top-32 flex items-center">
                  <div className="w-48">
                    <Button title="Beli" action={() => alert("clicked")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
