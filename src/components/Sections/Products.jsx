import React, { Component } from "react";
// import ProjectImg1 from "../../assets/Products/komik/komik01.jpg";
// import ProjectImg2 from "../../assets/Products/komik/komik02.jpg";
// import ProjectImg3 from "../../assets/Products/komik/komik03.jpg";
// import ProjectImg4 from "../../assets/Products/komik/komik04.jpg";
// import ProjectImg5 from "../../assets/Products/komik/komik05.jpg";
// import ProjectImg6 from "../../assets/Products/komik/komik06.jpg";
// import ProductCard from "../Molecules/ProductCard";
import AddImage2 from "../../assets/Products/bukubestseller.jpg";
import Button from "../Button/Button";
import Product from "./Product";
import Product2 from "./Product2";
import Product3 from "./Product3";

class Products extends Component {
  state = {};
  render() {
    return (
      <div id="products" className="w-full">
        <div className="bg-slate-100 p-10">
          <div className="w-full max-w-[1320px] my-0 mx-auto py-0 px-[30px]">
            
            <div>
              <h1 className="font-extrabold text-5xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Buku Komik</h1>
              <p className="text-sm">
                Terdapat banyak buku komik terbaru dan lama,
                <br />
                terdapat pula komik series terlengkap.
              </p>
            </div>
            <Product3/>
            {/* <div className="text-center flex-row box-border flex flex-wrap -mr-4 -ml-4">
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg1}
                  title="Plants VS Zombies - Misteri yang Belum Terpecahkan : Geografi"
                  text="Hujan apa yang menyebabkan kebakaran? Kenapa Bermuda disebut “segitiga setan”? Tahukah kamu apa yang dimaksud “danau neraka”? Ada api di dalam laut. Kok, bisa? Bisakah kamu menjawab semua pertanyaan itu?"
                  action={() => alert("clicked")}
                  price="105000"
                />
              </div>
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg2}
                  title="Plants VS Zombies - Tubuh Manusia : Kompetisi Vitalitas yang Ekstrem"
                  text="Bonk Choy dkk menemukan selembar tiket masuk. Konon, asal bisa ke alamat yang ada di tiket itu, mereka pasti akan memenangkan pertandingan apa pun!? Waah, pas sekali! Sebentar lagi aka nada pertandingan olahraga..."
                  action={() => alert("clicked")}
                  price="110000"
                />
              </div>
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg3}
                  title="Paranoia"
                  text="Sepulangnya dari kantor yang nyaman dan ber-AC, dengan hati riang dan berencana makan malam istimewa bersama istri tercinta, Mr. Beresford malahan harus kehilangan rasa nyaman yang seharian tadi dinikmatinya sebagaimana halnya dirasakan para pria kantoran di New York pada umumnya, karena kehadiran sebuah gangguan terus-menerus dari seorang pria bertopi yang menguntitnya ke mana pun kakinya melangkah."
                  action={() => alert("clicked")}
                  price="20000"
                />
              </div>
            </div> */}
            {/* <div className="text-center flex-row box-border flex flex-wrap -mr-4 -ml-4">
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg4}
                  title="One Room of Happiness 06"
                  text="“Kami tak datang untuk memisahkan kalian!” Akhirnya Sachi dan kakak berhadapan dengan Matsubase. Setelah bentrokan sengit, mulai terjalin komunikasi di antara kedua belah pihak. Sampai kapan Sachi membiarkan detektif itu membayangi kehidupannya bersama kakak penculik?"
                  action={() => alert("clicked")}
                  price="30000"
                />
              </div>
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg5}
                  title="Kaiju No. 8 Vol. 02"
                  text="Ujian tahap akhir rekrutmen anggota pasukan pertahanan telah berakhir, namun muncul Kaiju mirip manusia yang membangkitkan Kikoru Shinomiya dan peserta ujian lainnya. Saat Kikoru berasa dalam bahaya, Kafka Hibino muncul dan berubah wujud untuk menghadapi Honju itu. Rahasia apa yang ada id balik kemunculan Kaiju mirip manusia itu!? Apa tujuannya!? Misteri semakin kental di volume kedua ini!"
                  action={() => alert("clicked")}
                  price="55000"
                />
              </div>
              <div className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]">
                <ProductCard
                  img={ProjectImg6}
                  title="The Black Detective 05"
                  text="Terbukanya satu rahasia membuat segalanya kembali ke titik nol. Babak kasus Doppelganger mencapai puncak! Seperti apakah akhir pertarungan Kuroba vs. Watarai!? Lalu, munculnya sosok seorang count dari Inggris di hadapan Kuroba mengakibatkan terbukanya tabir perkara baru."
                  action={() => alert("clicked")}
                  price="28000"
                />
              </div>
            </div> */}

            <div className="flex justify-center items-center">
              <div className="mt-10 w-52 mb-32">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>

          </div>

          <div className="w-full max-w-[1320px] my-0 mx-auto py-0 px-[30px]">
            <div>
              <h1 className="font-extrabold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Buku Teknologi Komputer</h1>
              <p className="text-sm">
                Terdapat banyak buku tentang teknologi komputer terbaru dan lama,
                <br />
                dari hardware hingga software.
              </p>
            </div>

            <Product/>

            <div className="flex justify-center items-center pb-24">
              <div className="mt-10 w-52 ">
                <Button
                  title="Lihat lebih banyak"
                  action={() => alert("clicked")}
                />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Buku Novel</h1>
              <p className="text-sm">
                Terdapat banyak buku novel terbaru dan lama,
                <br />
                dari percintaan sampai kehidupan.
              </p>
            </div>

            <Product2/>

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
