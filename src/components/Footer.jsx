import React from "react";

function Footer({ refs }) {
  const { home, about, portfolio, contact } = refs;
  console.log(home);

  return (
    <div className="p-10 md:p-20 w-full bg-slate-800 text-white tracking-wide text-center">
      <div className="flex gap-6  md:w-1/3 mb-4 m-auto">
        <button
          onClick={() => {
            home.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hover:text-blue-400/100 transition-colors duration-300"
        >
          Home
        </button>
        <button
          onClick={() => {
            about.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hover:text-blue-400/100 transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => {
            portfolio.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hover:text-blue-400/100 transition-colors duration-300"
        >
          Portfolio
        </button>
        <button
          onClick={() => {
            contact.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hover:text-blue-400/100 transition-colors duration-300"
        >
          Contact
        </button>
      </div>
      <h4>
        © Copyright by
        <a
          className="font-bold text-lg mr-2 ml-2 "
          target="_blank"
          href="https://twitter.com/jonasschmedtman"
        >
          Amitava Roy
        </a>
        All rights are reserved Don't claim as your own
        product.
      </h4>
    </div>
  );
}

export default Footer;
