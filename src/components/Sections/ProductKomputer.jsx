import React, { Component } from "react";
import Button from "../Button/Button";

class ProductKomputer extends Component {
  buku = [
    {
      id: 1,
      image: "komputer01",
      title: "Sistem Operasi",
      desc: "Sistem operasi merupakan kompetensi dasar yang harus dimiliki oleh pengembang atau pencipta di bidang teknologi informasi. Operasional komputer sebagai perangkat utama pendukung teknologi informasi sangat tergantung pada sistem operasi. Sistem operasi sudah mengalami perkembangan sejalan dengan pemanfaatan komputer sebagai pendukung teknologi informasi. Berbagai produk sistem operasi sudah pernah ada, seperti CP/M, DOS, UNIX, Windows, Linux, sampai Android sebagai pendukung teknologi mobile",
      price: "90000",
    },
    {
      id: 2,
      image: "komputer02",
      title: "Coreldraw 2019 Untuk Pemula",
      desc: "Buku ini disusun dengan pola pembahasan yang simpel, ringan, dan tidak bertele-tele, sehingga menjadikan buku ini mudah untuk dipelajari dan sangat pas jadi teman belajar yang asyik dan menyenangkan. Setiap pokok bahasan disertai dengan contoh latihan yang akan membantu Anda dalam memahami isi materi dan pengaplikasiannya.",
      price: "89000",
    },
    {
      id: 3,
      image: "komputer03",
      title: "PHP Edisi Lengkap",
      desc: "PHP merupakan pemrograman wajib bagi para web developer. Buku ini menjelaskan PHP dari dasar hingga pemrograman web berbasis database. Bahasan di dalam buku ini meliputi: • Persiapan pemrograman PHP • Pengenalan terhadap variabel dan tipe data • Memanfaatkan array dalam pemrograman • Kondisional dan perulangan • Pengenalan function dan memanfaatkan built-in function pada PHP • Form dan pemrograman PHP • Pentingnya session dan cookies dalam pemrograman web • Pemrograman database • Mengenal berbagai macam query untuk database • Pengenalan user privilege dalam pemrograman database • Manajemen database • Pemrograman PHP berbasis object • Access Modifier, Method, dan Properties Buku ini menyediakan hampir sebagian besar teori yang Anda butuhkan untuk mengenal PHP dan segala kemampuannya. Dengan demikian, Anda bisa mengenali PHP secara cepat dan langsung mempraktikkannya untuk membuat aplikasi website",
      price: "100000",
    },
    {
      id: 4,
      image: "komputer04",
      title: "Pemrograman Android Dengan Flutter Edisi 2",
      desc: "Buku ini berisi teknik-teknik yang diperlukan untuk membuat aplikasi Android menggunakan Flutter, salah satu framework atau Software Development Kit SDK untuk pengembangan aplikasi mobile yang dapat berjalan di sistem operasi iOS dan Android. Meskipun Flutter dapat digunakan untuk membuat aplikasi untuk iOS, namun buku ini hanya membahas tentang penggunaan Flutter untuk Android.",
      price: "135000",
    },
    {
      id: 5,
      image: "komputer05",
      title: "Belajar Kilat Adobe Photoshop Langsung Bisa!",
      desc: "Belajar Kilat Adobe Photoshop Langsung Bisa! Cara cepat menguasai Photoshop Berlaku untuk semua versi Photoshop Banyak orang yang ingin belajar Photoshop langsung ke tingkat mahir dengan mengikuti tutorial di internet dan Youtube. Ketika mengikuti langkah-langkah yang diajarkan ternyata berhasil, namun ketika mengulang atau berhadapan dengan kasus lain terasa sulit. Ini karena kita hanya mengikuti langkah-langkah instan tanpa tahu dasar fungsi dan teknik yang digunakan. Bukan langkah tepat untuk belajar Photoshop! Para pemula perlu belajar Photoshop dari awal, mulai dari fungsi menu, teknik seleksi, hingga penggunaan efek dalam Photoshop. Dengan belajar secara berurutan, pemula akan lebih cepat menguasai Photoshop. Buku ini mengupas Photoshop dari nol hingga tingkat menengah bahkan mahir",
      price: "53000",
    },
    {
      id: 6,
      image: "komputer06",
      title: "Belajar Sendiri Adobe Photoshop CC 2015-2019",
      desc: "Hampir setiap tahun Adobe memperbarui versi Photoshop Creative Cloud mulai dari 2015, 2017, 2018, dan 2019. Oleh karena itu, jika Anda memiliki salah satunya maka buku ini cocok dibaca di saat mempelajari Photoshop untuk mengedit foto maupun membuat desain. Pembahasan Photoshop di dalam buku ini memang ditujukan untuk pengguna pemula. Namun, topik-topik tingkat menengah seperti seleksi, mask, dan channel ikut pula dibahas sehingga pembaca dapat langsung naik-level ke tingkat menengah dalam waktu cepat.",
      price: "89000",
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
                    src={require("../../assets/Products/komputer/" +
                      dataBuku.image +
                      ".jpg")}
                    alt=""
                  />
                </div>
                <h3 className="pb-3 text-xl max-w-[350px] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible text-blue-500">
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

export default ProductKomputer;
