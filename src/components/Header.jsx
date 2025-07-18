import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="filter invert-[1] flex justify-between items-center text-3xl sm:pt-4">
      <img src={logo} alt="Logo" className="w-[7rem] h-[2rem] sm:w-auto sm:h-auto" />
      <a
        href="https://drive.google.com/file/d/1XxlPduFo9da8UfxC1aPO6gshVNKKyBf7/view?usp=sharing" // Update this with the correct resume path
        download
        className="bg-blue-600 text-white px-4 py-2 text-lg rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
