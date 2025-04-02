import React from "react";

function CrossIcon({ onClick }) {
  return (
    <div
      onClick={() => {
        onClick((state) => !state);
      }}
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
        className="tabler-icon tabler-icon-x"
      >
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </div>
  );
}

export default CrossIcon;
