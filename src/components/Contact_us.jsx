import React, { useRef } from "react";
import TechStack from "./TechStack";
import img from "../assets/contact-me.png"
import emailjs from "@emailjs/browser";

const Contact_us = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   const email = {
  //     name: form.current.name.value,
  //     email: form.current.email.value,
  //     message: form.current.message.value,
  //   };
  //   console.log(email);
  //   emailjs
  //     .sendForm(
  //       "service_vfuwm4g",
  //       "template_ln5kjsf",
  //       form.current,
  //       "-uRTj-QzlmTcPJ8v9"
  //     )
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         alert("Email sent successfully!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //         alert("Failed to send the email. Please try again later.");
  //       }
  //     );      
  // };

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 pb-12">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
          Let's Connect
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-6 justify-between">
          <div className="w-[60%]">
          <img src={img} alt="phone" />
          </div>
          <form  className="email-form w-[40%]">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="user_name"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="user_email"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                rows="8"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact_us;
