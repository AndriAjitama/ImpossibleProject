import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="flex items-center bg-slate-300 rounded-full h-9 justify-center w-full pl-3 focus:border-blue-500">
        <MdSearch className="" size="1.3em" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none bg-transparent w-full focus:outline-none p-3 "
        />
      </div>
    );
  }
}

export default Search;
