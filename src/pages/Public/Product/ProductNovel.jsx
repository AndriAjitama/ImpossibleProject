import React, { Component } from "react";
import Button from "../../../components/Button/Button";

class ProductNovel extends Component {
  buku = [
    {
      id: 1,
      image: "novel01",
      title: "Novel Bedebah Di Ujung Tanduk",
      desc: "Di Negeri Para Bedebah, pencuri, perampok, bagai musang berbulu domba. Di depan, wajah mereka tersenyum penuh pencitraan. Di belakang penuh tipu-tipu.Di Negeri di Ujung Tanduk, pencuri, perampok, berkeliaran menjadi penegak hukum. Di depan, di belakang, mereka tidak malu-malu lagi.",
      price: "89000",
    },
    {
      id: 2,
      image: "novel02",
      title: "Novel Ancika: Dia Yang Bersamaku Tahun 1995",
      desc: "Ancika ini, pacarnya Dilan. Mereka saling mengenal setelah Dilan sudah tidak lagi sama Lia. Ya, gitu deh, drama kehidupan namanya juga. Mau bagaimana lagi? Kita ini hanya manusia. Pokoknya, baca aja, deh. Mudah-mudahan menyenangkan.",
      price: "98000",
    },
    {
      id: 3,
      image: "novel03",
      title: "Novel The Shark Caller: Sang Pemanggil Hiu",
      desc: "Aku ingin bisa memanggil hiu. Kumohon ajari aku mantranya dan tunjukkan caranya!” Di tengah keputusasaannya menjadi pemanggil hiu untuk membalaskan kematian orangtuanya, Blue Wing terpaksa berteman dengan pendatang baru yang amat menjengkelkan, Maple Hamelin. Awalnya mereka bak air dan minyak, susah sekali akrab. Namun ketika air pasang mengembuskan kasak-kusuk adanya harta karun, mereka pun mencoba menaklukkan perbedaan dan menantang hiu paling mematikan di lautan. Keduanya berkelana di antara deburan ombak, menjalin persahabatan, memupuk keberanian, dan menguatkan hati untuk memaafkan. Semuanya terjadi di tepi pantai indah Papua Nugini.",
      price: "110000",
    },
    {
      id: 4,
      image: "novel04",
      title: "Cadl-Sebuah Novel Tanpa Huruf E",
      desc: "Jika kusisipkan Huruf Itu di antara huruf D dan huruf L, maka kita akan ingat pada orang-orang yang tak mampu lafalkan huruf R. Itu jugalah yang dialami warga Wiranacita. Namun, alih-alih huruf R, yang jadi tumbal adalah Huruf Itu. Lidah kami bukan lidah pilihan. Lidah rakyat sudah dilumpuhkan habis-habisan. Tak salah lagi: C-A-D-dan-L ini pastilah satu kata utuh. Ini bukan judul hasil cocok-cocokan atau akronim asal-asalan. Ini judul yang disiapkan baik-baik.",
      price: "88000",
    },
    {
      id: 5,
      image: "novel05",
      title: "Novel Autumn In Paris",
      desc: "Tara Dupont menyukai Paris dan musim gugur. Ia mengira sudah memiliki segalanya dalam hidup… sampai ia bertemu Tatsuya Fujisawa yang susah ditebak dan selalu membangkitkan rasa penasarannya sejak awal. Tatsuya Fujisawa benci Paris dan musim gugur. Ia datang ke Paris untuk mencari orang yang menghancurkan hidupnya. Namun ia tidak menduga akan terpesona pada Tara Dupont, gadis yang cerewet tapi bisa menenangkan jiwa dan pikirannya... juga mengubah dunianya. Tara maupun Tatsuya sama sekali tidak menyadari benang yang menghubungkan mereka dengan masa lalu, adanya rahasia yang menghancurkan segala harapan, perasaan, dan keyakinan.",
      price: "79000",
    },
    {
      id: 6,
      image: "novel06",
      title: "Novel Bersyukur Tanpa Libur",
      desc: "Arswendo Atmowiloto, sang empu “jurus” Mengarang Itu Gampang, selalu mengasah kesaktiannya dengan menulis kapan pun, di mana pun… dengan coretan tangan, mesin tik, hingga komputer. Inilah kumpulan tulisannya mengenai memaknai hidup dengan terus bersyukur, yang berserakan tertinggal di komputernya---tentang awal kehidupannya di Solo, kehangatan keluarga yang dicintainya, kiprahnya di rimba “persilatan” media hingga penjara; dilengkapi dengan tulisan-tulisan mereka yang paling dekat, para sahabatnya dari berbagai kalangan.",
      price: "140000",
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
                    src={require("../../../assets/Products/novel/" +
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

export default ProductNovel;
