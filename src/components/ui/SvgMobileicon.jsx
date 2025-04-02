import React from "react";

function SvgMobileicon({ onClick }) {
  return (
    <div
      onClick={() => {
        onClick((state) => !state);
      }}
      className="md:hidden w-[30px] h-[30px]"
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
        className="mobile-menu"
      >
        <path d="M4 6l16 0"></path>
        <path d="M4 12l16 0"></path>
        <path d="M4 18l16 0"></path>
      </svg>
    </div>
  );
}

export default SvgMobileicon;
