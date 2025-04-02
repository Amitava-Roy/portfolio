import React, { useEffect } from "react";

function Message({ setIsOpenMessage }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenMessage(false);
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, [setIsOpenMessage]);
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0  bg-neutral-50/50 backdrop-blur-sm  flex justify-center items-center ">
      <div className="bg-gray-50 p-16 border-2 border-sky-500 rounded-lg  ">
        ✔ Thank you for sending me message.🙏
      </div>
    </div>
  );
}

export default Message;
