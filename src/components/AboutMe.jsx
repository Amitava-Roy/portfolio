import React from "react";
import styles from "./AboutMe.module.css";
import images from "../assets/Vectordad.png";

function AboutMe() {
  return (
    <div className=" flex flex-col w-5/6 m-auto gap-6 md:flex md:flex-row md:w-3/4 md:mt-4 md:justify-between md:gap-10 md:pb-12 md:pt-14 pt-8 pb-8    ">
      <div className=" rounded-md  self-center relative z-[-100]  ">
        <img
          className="h-auto w-auto object-contain rounded-md "
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <span className=" hidden md:block absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]  w-20 h-20 ">
          <img className={styles.animate} src={images} />
        </span>
      </div>
      <div className="text-center md:text-start md:w-2/3">
        <h3 className="text-lg text-blue-600/100 font-bold tracking-wider pb-4 md:pb-6 ">
          About Me
        </h3>
        <p className=" tracking-wider text-md text-slate-600">
          As a Full-Stack Developer who specializes in
          Front-End technologies, I possess an impressive
          arsenal of skills in HTML, CSS, JavaScript, React,
          Tailwind in Front-End . I also have knowledge of
          Node,Express,MongoDb,Mongoose and capabl of
          building responsive full-stack websites that offer
          a smooth user experience.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
