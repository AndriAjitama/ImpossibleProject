import React, { Component } from "react";
import Button from "../Button/Button";

class ProductRomance extends Component {
  buku = [
    {
      id: 1,
      image: "romance01",
      title: "The Dark Tower#3: Negeri Petaka (The Waste Lands)",
      desc: "Negeri Petaka merupakan buku ketiga dalam seri The Dark Tower. Di buku ini, Roland dan rekan-rekan perjalanannya, Eddie dan Susannah Dean, menemukan Jalur Jari-Jari yang akan menuntun mereka menuju Menara Gelap. Dalam perjalanan, Roland menambahkan dua anggota baru ke ka-tet (kelompok yang bersatu demi tujuan tertentu) mereka. Kemudian, di sebuah kota yang membusuk, Lud, mereka menemui bahaya lain, satu di antaranya adalah kereta yang entah bagaimana hidup dan kehilangan akal sehat.",
      price: "185000",
    },
    {
      id: 2,
      image: "romance02",
      title: "Catatan Juang",
      desc: "Suar, sang tokoh utama dalam buku ini, adalah seorang karyawan swasta yang melupakan mimpinya hingga menemukan buku sampul merah ini. Buku yang ia sebut 'obat kuat' berisi goresan tinta seorang pria bernama Juang di tiap lembar buku, membuka cakrawala pengetahuan, dan menemani tiap langkah kehidupan Suar. Catatannya sarat akan unsur humanisme, nasionalisme, mimpi, hingga cinta.",
      price: "75000",
    },
    {
      id: 3,
      image: "romance03",
      title: "LO TUNANGAN GUE",
      desc: "Fani nggak pernah berpikir akan dijodohkan oleh kedua orangtuanya dengan seorang cowok yag tidak ia kenal. Rencana ini berusaha ditolaknya mentah-mentah meski nggak akan berhasil, apalagi Fani memiliki seseorang yang sedang ditunggunya. Seorang cowok bernama Dylan yang membawa hatinya dan menghilang selama tiga tahun tanpa kabar.",
      price: "65000",
    },
    {
      id: 4,
      image: "romance04",
      title: "The Coldest Boyfriend",
      desc: "Kenarya Hechira jatuh hati kepada Sena Putra Dirmaga, siswa yang paling 'dingin’ seantero sekolah. Mereka sangat bertolak belakang, yang satu menghangatkan karena keramahannya, yang satu penyendiri karena sifatnya yang dingin kepada orang-orang.",
      price: "99000",
    },
    {
      id: 5,
      image: "romance05",
      title: "Hidden",
      desc: "Ceye melakukan kesalahan terbesar sebagai seorang idol! Hal itu membuatnya harus diasingkan untuk sementara waktu dari publik. Pria itu memilih kembali ke desa kelahirannya yang nyaris 7 tahun tak pernah ia kunjungi. Di sana, Ceye mendapatkan cinta dari semua orang, kecuali dari Gwen. Wanita itu membenci Ceye setengah mati tanpa alasan yang jelas. Ceye pun mencari tahu alasan yang Gwen sembunyikan, yang justru berpotensi membuat kariernya sebagai idol terancam.",
      price: "80000",
    },
    {
      id: 6,
      image: "romance06",
      title: "Loveliest Misfortune",
      desc: "Siapa pun pasti setuju bahwa LDR yang kemudian berkembang menjadi LDM (Long Distance Marriage) adalah salah satu bentuk hubungan paling tidak ideal dan membutuhkan perjuangan. Jenis hubungan yang disematkan rumus apa pun, dikali dan dibagi, tambah, kurang, pangkat dua dan akar maka hanya akan menciptakan banyak LDR lain seperti Lemah Disiksa Rindu, Lelah Dan Rawan, Lebih Dari Rumit dan sederet singkatan-singkatan konyol lainnya.",
      price: "86000",
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
                    src={require("../../assets/Products/romance/" +
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

export default ProductRomance;
