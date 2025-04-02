import React from "react";
import hero from "../assets/hero.png";
import wave from "../assets/waving.png";
import style from "./Body.module.css";
function Body() {
  return (
    <section className="w-screen  md:w-10/12 lg:w-9/12 m-auto grid grid-cols-1 md:grid-cols-2   ">
      {/* <div className="flex flex-col md:flex-row"> */}
      <div className=" md:pt-16 md:pb-8  md:pl-8 text-center md:text-start ">
        <h1 className=" text-[2rem]  leading-[3rem] md:text-[3.5rem] tracking-wide md:leading-[4rem] font-extrabold mb-8">
          <span>Full-Stack</span>
          <br />
          <span className="text-blue-600/100">Developer</span>
          <span>
            <img
              className="ml-3 inline-block h-8 w-8"
              src={wave}
              alt="waving"
            />
          </span>
        </h1>
        <p className="p-4 md:p-0 tracking-wider md:tracking-wide text-xl font-sans font-semibold mb-4 md:mb-8 ">
          Hi, I'm Amitava Roy .A passionate Full-Stack Developer based in
          Haldia, West Bengal.
        </p>
        <div className=" justify-center md:justify-normal flex gap-4 mb-6 md:mb-2">
          <a
            href="https://www.linkedin.com/in/amitava-roy-19026915b/"
            target="blank"
            className="hover:text-blue-600/100 self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
          <a
            href="https://github.com/Amitava-Roy"
            className="hover:text-blue-600/100 self-center"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a
            download
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/16o3fVjKwIXtP-qwf6aEtvS-xgGYFsCyG/view?usp=sharing"
            type="button"
            className="text-white cursor-pointer bg-blue-600/100 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
      <div className="pt-10 pb-10 justify-self-center md:pt-16 md:pb-8  row-start-1 row-span-1 md:col-start-2 md:col-span-1 ">
        <div
          style={{
            backgroundImage: `url(${hero})`,
          }}
          className={`${style.animate} border-2 shadow-md shadow-sky-400/100 border-sky-600/100  w-56 h-56 md:w-60 md:h-60 bg-cover bg-[50%] bg-no-repeat`}
        ></div>
        {/* <img src={image} /> */}
      </div>
      {/* </div> */}
      <div className="md:col-span-2 font-semibold text-lg md:pl-8">
        <div className="flex-col md:flex-row flex gap-4 mb-8 text-center">
          <h4 className="inline self-center">Front-End |</h4>
          <div className="flex justify-center gap-3 md:gap-8">
            <img
              className=" hover:-translate-y-2 transition-transform"
              src="https://skillicons.dev/icons?i=html"
            />
            <img
              className="hover:-translate-y-2 transition-transform"
              src="https://skillicons.dev/icons?i=css"
            />
            <img
              src="https://skillicons.dev/icons?i=js"
              className="hover:-translate-y-2 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              className="hover:-translate-y-2 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pb-8  text-center">
          <h4 className="inline self-center">Back-End |</h4>
          <div className="flex justify-center gap-4 md:gap-8">
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              className="hover:-translate-y-2 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=express"
              className="hover:-translate-y-2 transition-transform"
            />
            <img
              src="https://skillicons.dev/icons?i=mongodb"
              className="hover:-translate-y-2 transition-transform"
            />
            {/* <img src="https://skillicons.dev/icons?i=" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
