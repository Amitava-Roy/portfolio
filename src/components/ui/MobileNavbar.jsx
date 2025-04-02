import React from "react";
import CrossIcon from "./CrossIcon";

function MobileNavbar({ isOpen, setIsOpen, refs }) {
  const { home, about, portfolio, contact } = refs;

  function handleClose() {
    setIsOpen((state) => !state);
  }
  const state = !isOpen
    ? "translate-x-[-100%]  opacity-0"
    : "translate-x-[0%] opacity-1";
  return (
    <div
      className={`${state}  absolute w-screen h-screen  bg-slate-50/100 top-0 left-0 transition-all ease-linear duration-300  `}
    >
      <div className="top-[1.5rem] right-[2.5rem] absolute">
        <CrossIcon onClick={setIsOpen} />
      </div>

      <ul className="mt-20 flex flex-col gap-8 justify-betwen items-center cursor-pointer ">
        <li
          onClick={() => {
            home.current.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
            handleClose();
          }}
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
            handleClose();
          }}
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
            handleClose();
          }}
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
            handleClose();
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
