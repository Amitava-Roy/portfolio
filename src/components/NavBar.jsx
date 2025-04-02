import React, { useState } from "react";
import SvgMobileicon from "./ui/svgMobileicon";
import CrossIcon from "./ui/CrossIcon";
import MobileNavbar from "./ui/MobileNavbar";

function NavBar({ isSticky, refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const { home, about, portfolio, contact } = refs;
  console.log(isSticky);
  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-slate-50  "
          : ""
      }z-[100] flex justify-between pr-8 pl-10 py-6 md:pr-10 md:pl-12 md:py-8 text-xl tracking-wider shadow-md shadow-slate-400/100`}
    >
      <h3 className="md:justify-self-start font-bold ">
        Amitava.dev
      </h3>
      {/* {!isOpen && ( */}
      <MobileNavbar
        refs={refs}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {/* )} */}
      <ul className=" md:flex md:gap-8 cursor-pointer transition-all font-semibold text-lg  ">
        <li className="md:hidden">
          {!isOpen && <SvgMobileicon onClick={setIsOpen} />}
        </li>
        <li
          onClick={() => {
            home.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hidden md:block hover:text-blue-600/100 hover:underline underline-offset-8"
        >
          Home
        </li>
        <li
          onClick={() => {
            about.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hidden md:block hover:text-blue-600/100 hover:underline underline-offset-8"
        >
          About
        </li>
        <li
          onClick={() => {
            portfolio.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hidden md:block hover:text-blue-600/100 hover:underline underline-offset-8"
        >
          Projects
        </li>
        <li
          onClick={() => {
            contact.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="hidden md:block hover:text-blue-600/100 hover:underline underline-offset-8"
        >
          contact
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
