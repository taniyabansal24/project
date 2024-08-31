import React, { useState } from "react";
import Circular from "./Circular";
import arrow from "../assets/right-arrow.png";
import Modal from "./Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row items-center text-white font-['Numito'] h-[66%]">
      <div className="content z-10">
        <h1 className="text-[40px] md:text-[50px] lg:text-[64px] font-['Spartan']">
          Taniya Bansal
        </h1>
        <p className="font-['Merriweather'] italic mb-[30px]">
          MERN Stack Developer
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"
        >
          About Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 100 100"
            className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
          >
            <g transform="translate(0,-952.36218)">
              <path
                d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                fill="#fff"
                fillOpacity="1"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Circular />
      <ul className="text-4xl mt-[46px] sm:mt-0 sm:ml-auto text-[#b0b3c3] sm:space-y-6 sm:right-5 md:right-11 flex sm:flex-col gap-[30px] absolute sm:gap-0 bottom-[108px] sm-bottom-auto ">
        <li className="hover:text-white">
          <a href="www.linkedin.com/in/taniyabansal24">
            <i className="bx bxl-linkedin"></i>
          </a>
        </li>
        <li className="hover:text-white">
          <a href="https://github.com/taniyabansal24">
            <i className="bx bxl-github"></i>
          </a>
        </li>
        <li className="hover:text-white">
          <a href="mailto:taniya1agarwal@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </li>
        <li className="hover:text-white">
          <a href="https://www.instagram.com/taniyabansal24?igsh=dmd3ZndtMTdkZmF3">
            <i className="bx bxl-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;



