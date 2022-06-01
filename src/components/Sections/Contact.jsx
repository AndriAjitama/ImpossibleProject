import React, { Component } from "react";
import ContactImg1 from "../../assets/Products/komputer/komputer02.jpg";
import ContactImg2 from "../../assets/Products/komik/komik01.jpg";
import ContactImg3 from "../../assets/Products/bukubestseller.jpg";
import Button from "../Button/Button";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="contact" className="w-full">
        <div className="bg-[#f5f5f5]">
          <div className="w-full max-w[1220px] pl-32">
            <div className="pt-16 ml-8">
              <h1 className="text-4xl font-extrabold text-gray-600">
                Contact Dewa Buku
              </h1>
              <p className="text-sm">
                Hubungi kami untuk menanyakan ketersediaan Buku
                <br />
                kami akan membalas dengan secepat mungkin. Kepuasan Anda
                Kebahasian Kami.
              </p>
            </div>
            <div className="pb-8 flex box-border flex-row mx-4">
              <div className="box-border px-4 basis-full max-w-full">
                <div className="pt-14">
                  <label className="text-sm">Nama Lengkap:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="h-8 mb-8 text-lg font-light w-full bg-transparent border-0 outline-none shadow-none border-b-2 border-[#707070]"
                  />
                  <label className="text-sm">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="h-8 mb-8 text-lg font-light w-full bg-transparent border-0 outline-none shadow-none border-b-2 border-[#707070]"
                  />
                  <label className="text-sm">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="h-8 mb-8 text-lg font-light w-full bg-transparent border-0 outline-none shadow-none border-b-2 border-[#707070]"
                  />
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="message"
                    name="message"
                    className="h-8 mb-8 text-lg font-light w-full bg-transparent border-0 outline-none shadow-none border-b-2 border-[#707070] min-h-[100px]"
                  />
                </div>
                <div className="max-w-[220px] mt-5">
                  <Button title="Kirim Pesan" action={() => alert("clicked")} />
                </div>
              </div>
              <div className="box-border mr-36 basis-full max-w-full flex">
                <div className="w-1/2 flex items-center flex-col">
                  <div className="max-w-[180px] self-end mb-6 mr-14">
                    <img
                      src={ContactImg1}
                      alt="office"
                      className="w-36 h-56 rounded-xl"
                    />
                  </div>
                  <div className="max-w-[200px] self-end mb-3 mr-8">
                    <img
                      src={ContactImg2}
                      alt="office"
                      className="w-52 h-72 rounded-xl"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mt-24">
                    <img
                      src={ContactImg3}
                      alt="office"
                      className="w-60 h-96 rounded-xl"
                    />
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

export default Contact;
