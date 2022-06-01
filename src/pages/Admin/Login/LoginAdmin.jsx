import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginAdmin extends Component {
  state = {};
  render() {
    return (
      <div className="bg-gray-300">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-full md:w-1/3 bg-white rounded-lg">
            <div className="flex font-bold justify-center mt-6">
              <img
                className="h-20 w-20"
                alt=""
                src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
              />
            </div>
            <h2 className="text-3xl text-center text-gray-700 mb-4">
              Login Admin
            </h2>
            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <div className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="-mx-6 px-10  w-full border rounded py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <div className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></div>
                  <input
                    type="text"
                    placeholder="Password"
                    className="-mx-6 px-10 w-full border rounded py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <Link
                to="/error"
                className="text-xs text-gray-500 float-right mb-4"
              >
                Lupa Kata Sandi?
              </Link>
              <Link to="dashboard">
                <button
                  type="submit"
                  className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none"
                >
                  Masuk
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginAdmin;
