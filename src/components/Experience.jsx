import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import websquard from "../assets/websquad_solution_private_limited_logo.jpeg";
import core_ai from "../assets/school_of_core_ai_logo.jpeg";
import photo from "../assets/photo.jpeg";

const Experience = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto pb-12">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
          Experience
        </h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div className="swiper mySwiper !py-14">
            <div className="swiper-wrapper items-center">
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="my-20 flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={websquard}
                      alt="testimonial 3"
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2 text-white">
                        "As a React Website Developer at Web Squad Solution
                        Private Limited since April 2024, I develop responsive
                        web applications using React.js and Tailwind CSS. I
                        collaborate with design teams to create user-friendly
                        interfaces and work with backend developers to integrate
                        APIs. My role includes code reviews, debugging, and
                        optimizing performance while staying updated with
                        industry trends to deliver innovative solutions and
                        improve development processes."
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-3xl">
                        React.js Developer
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        Intern
                      </h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="my-20 flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={photo}
                      alt="testimonial 3"
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2 text-white">
                        "I served as Frontend Website Developer at Photo Rishta
                        Company, I created dynamic, responsive web interfaces
                        using HTML, CSS, and JavaScript. I collaborated with
                        design teams, optimized website performance, debugged
                        issues, and maintained code quality, enhancing my web
                        development skills and contributing effectively to
                        projects."
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-3xl">
                        Frontent Website Developer
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        Intern
                      </h5>
                      <div className="flex items-baseline justify-end ">
                        <ul className="flex flex-wrap gap-2 mt-2 text-white">
                          <a href="https://drive.google.com/file/d/1MFA3aRG-sSp1SRybzpIplHbcKuvXqlpZ/view?usp=drive_link">
                            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] ">
                              #certificate{" "}
                            </li>
                          </a>
                          <a href="https://photorishta.com/">
                            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] ">
                              #website{" "}
                            </li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide px-4">
                  <div className="my-20 flex flex-col md:flex-row max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                    <img
                      className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                      src={core_ai}
                      alt=""
                    />
                    <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                      <p className="text-sm md:text-base mb-2 text-white">
                        “I served as a website developer in school of core ai,
                        specializing in creating websites utilizing WordPress.
                        My responsibilities included designing and developing
                        websites, customizing themes, and ensuring functionality
                        and user experience optimization.”
                      </p>
                      <h2 className="text-right text-[#459bd5] font-bold text-xl md:text-3xl">
                        Wordpress Developer
                      </h2>
                      <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                        Intern
                      </h5>
                      <div className="flex items-baseline justify-end ">
                        <ul className="flex flex-wrap gap-2 mt-2 text-white">
                          <a href="https://drive.google.com/file/d/1avbBe7Qixykiu555E8gj4402winxpTw3/view?usp=drive_link">
                            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] ">
                              #certificate{" "}
                            </li>
                          </a>
                          <a href="https://schoolofcoreai.com/">
                            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] ">
                              #website{" "}
                            </li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default Experience;
