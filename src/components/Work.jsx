import React, { forwardRef } from 'react';
import veerRaghav from "../assets/veerraghav.png";
import ochi from "../assets/ochi.webp";
import cafeFlow from "../assets/cafeFlow.png"; // You'll need to add this image

const Work = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="max-w-screen-xl mt-12 sm:mt-0 mx-auto px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>
        
        {/* CafeFlow Project - Added First */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#D4A76A] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://cafe-order-system-smoky.vercel.app/"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={cafeFlow} // Add your CafeFlow image
                alt="CafeFlow Order System"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#D4A76A] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                CafeFlow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#D4A76A] font-bold text-2xl md:text-4xl">
              CafeFlow
            </h3>
            <span className="text-[#D4A76A] text-base md:text-lg">
              (Cafe Order Management System)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              A modern cafe order management system built with Next.js that streamlines the ordering process. Features include real-time order tracking, menu management, customer queue system, and analytics dashboard. Designed to enhance cafe operations with an intuitive interface for both staff and customers.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #next.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwindcss
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #typescript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #nodejs
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #realtime
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongodb
              </li>
            </ul>
          </div>
        </div>

        {/* Veer Raghav Project - Moved to Second */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-40 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Veer Raghav
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">
              (Hotel Booking Website)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              A fully functional hotel booking platform built using Next.js and Tailwind CSS. This website allows users to seamlessly browse available rooms, check details, and book their stay at Veer Raghav Hotel. With a clean and responsive UI, the platform ensures a smooth and user-friendly experience.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #next.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwindcss
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #shadcn
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #nodejs
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://veerraghav.com/"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={veerRaghav}
                alt="Veer Raghav Hotel"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Veer Raghav
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Ochi Project - Kept as Third */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-40 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://ochi-website-clone.netlify.app/"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={ochi}
                alt="Ochi Website Clone"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Ochi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">Ochi</h3>
            <span className="text-[#47afa1] text-base md:text-lg">
              (Clone Website)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              React front-end clone project showcasing design skills and UI
              replication without back-end functionality.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #swiper.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
            </ul>
          </div>
        </div>

        <div
          className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
        ></div>
      </section>
    </>
  );
});

export default Work;