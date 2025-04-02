import React from "react";
import { useForm } from "react-hook-form";

function ContactMe({ setIsOpenMessage }) {
  const { register, handleSubmit, reset } = useForm();
  function onSubmit(value) {
    console.log(value);
    setIsOpenMessage(true);
    reset();
  }
  return (
    <div className="p-4 md:p-8 w-11/12 md:w-4/5 m-auto">
      <h1 className="font-bold text-lg text-slate-800 mb-4">
        Contact
        <span className="text-blue-600/100"> Me</span>
      </h1>
      <p>Hit me up 👇</p>
      <div className="mt-6 flex gap-4">
        <span className="self-center hover:text-blue-600/100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-mail"
          >
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </span>
        <div>
          <h4 className="font-bold text-slate-800">Mail</h4>
          <a
            href="mailto:ramitava007@gamil.com"
            className="hover:text-blue-600/100 cursor-pointer text-gray-600/100"
          >
            ramitava007@gamil.com
          </a>
        </div>
      </div>
      <div className="mt-3 flex gap-4">
        <span className="self-center hover:text-blue-600/100">
          <div className="mt-6 flex gap-4">
            <span className="self-center hover:text-blue-600/100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold text-slate-800">
                Call Me on
              </h4>
              <a className="hover:text-blue-600/100 cursor-pointer text-gray-600/100">
                9635883018
              </a>
            </div>
          </div>
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  w-11/12 md:w-2/3 p-6 mt-6 border-2 rounded-lg border-blue-600/100 flex flex-wrap gap-6 "
      >
        <div className="flex gap-2  ">
          <label
            htmlFor="name"
            className="font-bold text-slate-800 self-end"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            name="name"
            className="border-b-2 w-4/5 md:w-auto  border-blue-600/100 focus:outline-none focus:border-cyan-300"
            id="name"
          />
        </div>
        <div className="flex gap-2">
          <label
            className=" font-bold text-slate-800 self-end "
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            name="email"
            id="email"
            className=" w-4/5 md:w-auto border-b-2 border-blue-600/100 focus:outline-none focus:border-cyan-300"
          />
        </div>
        <div className="flex gap-2 grow">
          <label
            htmlFor="message "
            className="self-center font-bold text-slate-800 "
          >
            Messsage
          </label>
          <textarea
            {...register("message")}
            className="w-4/5 md:w-auto border-2 border-blue-600/100 rounded-xl max-h-20 grow focus:outline-none focus:border-cyan-300"
            id="message"
            name="message"
          ></textarea>
        </div>
        <div className="self-center">
          <button
            type="submit"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
