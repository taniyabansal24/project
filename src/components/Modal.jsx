import React from "react";
import image from "../assets/developer.png";
import "./Modal.css";

export default function Modal({isOpen, setIsOpen}) {
  return (
    <div className={`fixed z-10 inset-0 flex items-center justify-center px-4 bg-black/40 ${isOpen ? '' : 'hidden'}`}>
      <div className="about-section flex flex-col md:flex-row rounded-lg grow relative max-w-[60rem] bg-[#191919] p-4 shadow-lg h-fit md:h-[700px]">
        <div onClick={()=>setIsOpen(false)} className="x-icon bg-[#27292d] rounded-[50%] absolute w-8 h-8 right-[15px] top-[15px] text-white flex items-center justify-center">
          <i className="bx bx-x"></i>
        </div>
        <div className="about-me w-full flex items-center">
          <div className="about-me-text w-[98%] sm:w-[80%] my-0 mx-auto">
            <h2 className=".about-me-title text-[#1788ae] text-xl font-['Spartan'] mb-3">
              ABOUT ME
            </h2>
            <p className="about-me-detail text-white text-sm md:text-base mb-0 sm:mb-5">
              I help business owners and busy web developers to design &amp;
              develop creative websites that fits their vision and attracts the
              visitors to stay for ever. Technologies and tools that I use to
              create such awesome websites.
            </p>

            <ul className="about-me-detail flex flex-wrap text-[0.85em] text-white">
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #javascript
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #react.js
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #redux
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #node.js
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #express.js
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #mongoDB
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #mongoose
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #ejs
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #html
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #css
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #sass
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #bootstrap
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #tailwind
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #git
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #github
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #terminal
              </li>
              <li className=" py-[0.4em] px-[0.8em] rounded-[50px] mb-[0.5em] mr-[0.5em] border border-gray-700 ">
                #figma
              </li>
            </ul>
            <div className="tooltip">
              <h2 className="mern mb-[2.2em] mt-[2em] text-[#1788ae] font-['Spartan']">
                MERN STACK
              </h2>
              <div className="top-skills-icons flex relative mt-[3rem] md:mt-[4rem] gap-12 md:gap-16">
                <div className="mongodb-icon cursor-default flex flex-col items-center gap-5 relative">
                  <div className="tooltip opacity-0  absolute text-white text-sm md:text-base bg-[#47a248] md:right-[-23px] rounded-3xl py-1 md:py-2 px-[10px] md:px-[14px] top-[-10px] transition-all duration-200 ease-in-out ">
                    <span className="relative z-[1] ">mongoDB</span>
                  </div>

                  <svg className="z-10 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#47A248"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"></path>
                  </svg>
                  <h2 className="text-[#47a248] text-2xl md:text-3xl font-bold font-['Spartan']">
                    M
                  </h2>
                </div>
                <div className="express-icon cursor-default flex flex-col items-center gap-5 relative">
                  <div className="tooltip opacity-0  absolute bg-white text-black text-sm md:text-base rounded-3xl py-1 md:py-2 px-[10px] md:px-[14px] top-[-10px] transition-all duration-200 ease-in-out ">
                    <span className="relative z-[1]">Express.JS</span>
                  </div>
                  <svg className="z-10 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    
                  >
                    <g fill="#ffff">
                      <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path>
                    </g>
                  </svg>
                  <h2 className="text-white text-2xl md:text-3xl font-bold font-['Spartan']">
                    E
                  </h2>
                </div>

                <div className="react-icon cursor-default flex flex-col items-center gap-5 relative">
                  <div className="tooltip absolute bg-[#61dafb] rounded-3xl text-black text-sm md:text-base opacity-0 py-1 md:py-2 px-[10px] md:px-[14px] top-[-10px] transition-all duration-200 ease-in-out ">
                    <span className="relative z-[1]">React.JS</span>
                  </div>

                  <svg className="z-10 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    viewBox="175.7 78 490.6 436.9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#61dafb">
                      <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path>
                      <circle cx="420.9" cy="296.5" r="45.7"></circle>
                    </g>
                  </svg>
                  <h2 className="text-[#61dafb] text-2xl md:text-3xl font-bold font-['Spartan']">
                    R
                  </h2>
                </div>

                <div className="node-icon cursor-default flex flex-col items-center gap-5 relative">
                  <div className="tooltip absolute right-[-16px] text-black bg-[#8cc84b] text-sm md:text-base rounded-3xl py-1 md:py-2 px-[10px] md:px-[14px] top-[-10px] transition-all duration-200 ease-in-out opacity-0 ">
                    <span className="relative z-[1]">Node.JS</span>
                  </div>

                  <svg className="z-10 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                    viewBox="0 0 256 282"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <g fill="#8CC84B">
                      <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"></path>
                      <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"></path>
                    </g>
                  </svg>
                  <h2 className="text-[#8cc84b] text-2xl md:text-3xl font-bold font-['Spartan']">
                    N
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration hidden sm:flex w-full mt-8 md:mt-0 items-center text-center justify-center">
          <img className="w-[40%] md:w-[60%]" src={image} alt="programming" />
        </div>
      </div>
    </div>
  );
}
