import { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import AboutMe from "./components/AboutMe";
import ScrollObserver from "./components/utils/ScrollObserver";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Message from "./components/Message";
function App() {
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const home = useRef();
  const about = useRef();
  const portfolio = useRef();
  const contact = useRef();

  return (
    <div className="font-poppins font-medium  text-slate-700">
      <nav className="">
        <NavBar
          refs={{ home, about, portfolio, contact }}
          isSticky={isSticky}
        />
      </nav>
      <main className="">
        <ScrollObserver setIsSticky={setIsSticky}>
          <div ref={home} className="bg-gray-100">
            <Body />
          </div>
        </ScrollObserver>

        <div ref={about}>
          <AboutMe />
        </div>
        <div ref={portfolio} className=" bg-gray-100">
          <Portfolio />
        </div>
        <div ref={contact}>
          <ContactMe setIsOpenMessage={setIsOpenMessage} />
        </div>
        {isOpenMessage && (
          <Message setIsOpenMessage={setIsOpenMessage} />
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14777.178935258149!2d87.98263880525498!3d22.19090274973275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d22.188458999999998!2d87.984184!5e0!3m2!1sen!2sin!4v1695313614753!5m2!1sen!2sin"
          className="w-full h-56 mb-4  "
          // style="border:0;"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Footer
          refs={{ home, about, portfolio, contact }}
        />
      </main>
    </div>
  );
}

export default App;
