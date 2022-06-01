import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import LoginIlustrasi from "../../../assets/Ilustrasi/login.jpg";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="h-screen flex">
        <div className="w-1/2 bg-[#6b5b95] h-screen">
          <img src={LoginIlustrasi} alt="" />
        </div>
        <div className="w-1/2 bg-[#12130f] px-16 py-10 overflow-hidden">
          <div className="flex justify-end mb-12">
            <Link
              to="/login"
              className="py-3 px-7 cursor-pointer text-sm border-none outline-none inline-block no-underline bg-[#6b5b95] text-white rounded-tl-3xl rounded-bl-3xl"
            >
              Login
            </Link>
            <Link
              exact
              to="/register"
              className="bg-[#40434e] text-[#9da6b1] py-3 px-7 cursor-pointer text-sm border-none outline-none inline-block no-underline rounded-tr-3xl rounded-br-3xl"
            >
              Register
            </Link>
          </div>

          <div className="text-[#707c8b] font-light mb-14">
            <Link
              to="/login"
              className="no-underline inline-block text-3xl mr-2 pb-1 text-white border-b-2 border-solid border-x-[#6b5b95]"
            >
              Login
            </Link>{" "}
            or{" "}
            <Link
              exact
              to="/register"
              className="text-[#707c8b] no-underline inline-block text-3xl ml-2 pb-1"
            >
              Register
            </Link>
          </div>

          <div className="mb-24">
            <form className="mb-10" onSubmit={this.handleSubmit}>
              <div className="mb-10">
                <label
                  className="block uppercase text-base text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[85%] bg-transparent text-white outline-none text-base font-light pb-3 mt-3 border-b-2 border-b-solid border-[#445366]"
                  placeholder="Masukan Password Anda"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-10">
                <label
                  className="block uppercase text-base text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-[85%] bg-transparent text-white outline-none text-base font-light pb-3 mt-3 border-b-2 border-b-solid border-[#445366]"
                  placeholder="Masukan Password Anda"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-10">
                <Link to="/user">
                  <button className="bg-[#6b5b95] text-white border-none outline-none rounded-3xl py-4 px-16 text-sm font-medium">
                    Login
                  </button>{" "}
                </Link>
                <Link
                  to="/register"
                  className="text-[#66707d] no-underline inline-block border-b-2 border-solid border-[#6b5b95] pb-1 ml-2"
                >
                  Buat Akun Baru
                </Link>
              </div>

              <div className="pt-2 pr-24 pb-3 pl-0">
                <div className=" mb-3">
                  <GoogleLoginButton onClick={() => alert("Hello")}>
                    <span>Login Dengan Google</span>
                  </GoogleLoginButton>
                </div>

                <div className=" mb-3">
                  <FacebookLoginButton onClick={() => alert("Hello")}>
                    <span>Login Dengan Facebook</span>
                  </FacebookLoginButton>
                </div>

                <div className="">
                  <InstagramLoginButton onClick={() => alert("Hello")}>
                    <span>Login Dengan Instagram</span>
                  </InstagramLoginButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
