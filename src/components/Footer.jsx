import React from "react";
import { SiLeetcode } from "react-icons/si"; // ✅ Import LeetCode icon

const Footer = () => {
  return (
    <>
      <footer class="flex flex-col items-center pb-10">
        <p class="text-xs text-gray-300">Taniya Bansal © 2024</p>
        <div class="black-logo my-4"></div>
        <ul class="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
          <li>
            <a
              href="https://www.linkedin.com/in/taniyabansal24/"
              target="_blank"
            >
              <svg
                class="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/taniyabansal24"
              target="_blank"
              class="w-5 hover:text-white"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:taniya1agarwal@gmail.com" target="_blank">
              <svg
                class="w-5 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="hover:text-white">
                    <a href="https://leetcode.com/taniyabansal24">
                      <SiLeetcode className="text-[#B1B3C3] hover:text-white" /> 
                    </a>
                  </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
