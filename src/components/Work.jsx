import React, { forwardRef } from 'react';
import lazarev from "../assets/lazarev.webp";
import urbanNest from "../assets/urbannest.webp";
import ochi from "../assets/ochi.webp";
import tax from "../assets/tax.webp";
import country from "../assets/country-api.webp";


const Work = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="max-w-screen-xl mt-12 sm:mt-0 mx-auto px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://taniyabansal24.github.io/Lazarev-Clone/"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={lazarev}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Lazarev
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Lazarev
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">
              (Website Clone)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              A visually captivating clone of the Lazarev Name website,
              featuring intricate animations and transformations, crafted using
              HTML, CSS, and JavaScript.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #swiper.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-40 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
              UrbanNest
            </h3>
            <span className="text-[#ffe578] text-base md:text-lg">
              (E-commerce Website)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              Fully responsive e-commerce clothing website built with React and
              backend database integration. Seamlessly combines design elegance
              with robust functionality for an immersive shopping experience.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #express.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #node.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #swiper.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoDB
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoose
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://www.youtube.com/watch?v=p6w6b2R2vkQ"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={urbanNest}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                UrbanNest
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                alt=""
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-40 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
              Countries-api
            </h3>
            <span className="text-[#ffe578] text-base md:text-lg">
              (Countries Details)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              Our React-based web application provides comprehensive country
              data with features like search, dynamic routing, multiple fetch
              requests, dark-light mode, and seamless data handling using hooks,
              Context API, React Router, and dark functionality.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://react-country-api-project.netlify.app/"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={country}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Countries-api
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-40 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#FF5653] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#FF5653] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://taniyabansal24.github.io/Tax-Calculator/"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={tax}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#FF5653] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Tax Calculator
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <h3 className="text-[#FF5653] font-bold text-2xl md:text-4xl">
              Tax Calculator
            </h3>
            <span className="text-[#FF5653] text-base md:text-lg">
              (Calculator)
            </span>
            <p className="text-justify text-sm md:text-base mt-2 text-white">
              This is a web application designed to simplify the process of
              calculating taxes based on user-provided financial information.
              Developed using a combination of HTML, CSS, JavaScript, and
              Bootstrap show my javascript knowledge
            </p>

            <ul className="flex flex-wrap gap-2 mt-2 text-white">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
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
