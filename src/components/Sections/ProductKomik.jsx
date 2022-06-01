import React, { Component } from "react";
import Button from "../Button/Button";

class ProductKomik extends Component {
  buku = [
    {
      id: 1,
      image: "komik01",
      title: "Plants VS Zombies - Misteri yang Belum Terpecahkan : Geografi",
      desc: "Hujan apa yang menyebabkan kebakaran? Kenapa Bermuda disebut “segitiga setan”? Tahukah kamu apa yang dimaksud “danau neraka”? Ada api di dalam laut. Kok, bisa? Bisakah kamu menjawab semua pertanyaan itu?",
      price: "105000",
    },
    {
      id: 2,
      image: "komik02",
      title:
        "Plants VS Zombies - Tubuh Manusia : Kompetisi Vitalitas yang Ekstrem",
      desc: "Bonk Choy dkk menemukan selembar tiket masuk. Konon, asal bisa ke alamat yang ada di tiket itu, mereka pasti akan memenangkan pertandingan apa pun!? Waah, pas sekali! Sebentar lagi aka nada pertandingan olahraga...",
      price: "110000",
    },
    {
      id: 3,
      image: "komik03",
      title: "Paranoia",
      desc: "Sepulangnya dari kantor yang nyaman dan ber-AC, dengan hati riang dan berencana makan malam istimewa bersama istri tercinta, Mr. Beresford malahan harus kehilangan rasa nyaman yang seharian tadi dinikmatinya sebagaimana halnya dirasakan para pria kantoran di New York pada umumnya, karena kehadiran sebuah gangguan terus-menerus dari seorang pria bertopi yang menguntitnya ke mana pun kakinya melangkah.",
      price: "200000",
    },
    {
      id: 4,
      image: "komik04",
      title: "One Room of Happiness 06",
      desc: "“Kami tak datang untuk memisahkan kalian!” Akhirnya Sachi dan kakak berhadapan dengan Matsubase. Setelah bentrokan sengit, mulai terjalin komunikasi di antara kedua belah pihak. Sampai kapan Sachi membiarkan detektif itu membayangi kehidupannya bersama kakak penculik?",
      price: "30000",
    },
    {
      id: 5,
      image: "komik05",
      title: "Kaiju No. 8 Vol. 02",
      desc: "Ujian tahap akhir rekrutmen anggota pasukan pertahanan telah berakhir, namun muncul Kaiju mirip manusia yang membangkitkan Kikoru Shinomiya dan peserta ujian lainnya. Saat Kikoru berasa dalam bahaya, Kafka Hibino muncul dan berubah wujud untuk menghadapi Honju itu. Rahasia apa yang ada id balik kemunculan Kaiju mirip manusia itu!? Apa tujuannya!? Misteri semakin kental di volume kedua ini!",
      price: "55000",
    },
    {
      id: 6,
      image: "komik06",
      title: "The Black Detective 05",
      desc: "Terbukanya satu rahasia membuat segalanya kembali ke titik nol. Babak kasus Doppelganger mencapai puncak! Seperti apakah akhir pertarungan Kuroba vs. Watarai!? Lalu, munculnya sosok seorang count dari Inggris di hadapan Kuroba mengakibatkan terbukanya tabir perkara baru.",
      price: "28000",
    },
  ];

  state = {};
  render() {
    return (
      <div className="text-center flex-row box-border flex flex-wrap -mr-4 -ml-4">
        {this.buku.map((dataBuku) => {
          return (
            <div
              key={dataBuku.id}
              className="box-border flex-auto px-4 basis-1/3 max-w-[1/3]"
            >
              <div className="w-full mt-8 px-3 overflow-hidden hover:scale-110 transition duration-300">
                <div
                  className="cursor-pointer ease-in duration-300 bg-transparent border-0 outline-none p-0 m-0"
                  onClick={this.props.action ? () => this.props.action() : null}
                >
                  <img
                    className="w-full h-[350px] mp-5 mb-3 rounded-2xl hover:opacity-50 object-contain bg-slate-400"
                    src={require("../../assets/Products/komik/" +
                      dataBuku.image +
                      ".jpg")}
                    alt=""
                  />
                </div>
                <h3 className="pb-3 text-xl max-w-[350px] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible ">
                  {dataBuku.title}
                </h3>
                <p className="text-sm text-justify max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible">
                  {dataBuku.desc}
                </p>
                <p className="pt-3 text-[#f2b300] font-extrabold text-2xl text-left">
                  Rp. {dataBuku.price}
                </p>
                <div className="max-w-[120px] mt-5 mb-0 ml-auto mr-auto pb-5">
                  <Button title="Beli" action={() => alert("clicked")} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductKomik;
