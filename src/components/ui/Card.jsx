import React from "react";

function Card({ children, revarse }) {
  return (
    <div
      className={`${
        revarse ? "md:flex-row-reverse" : ""
      } w-full  h-auto bg-white shadow-md shadow-gray-400/100 rounded-lg p-8 flex flex-col md:flex md:flex-row gap-12 mb-4 md:mb-10 `}
    >
      {children}
    </div>
  );
}

export default Card;
