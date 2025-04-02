import React, { useEffect, useRef } from "react";

function ScrollObserver({ children, setIsSticky }) {
  const ref = useRef();
  let x;
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        if (!entry.isIntersecting) {
          setIsSticky(true);
          console.log("observed");
          // sectionObserver.unobserve(ref.current);
        } else {
          setIsSticky(false);
        }
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0,
      }
    );
    sectionObserver.observe(ref.current);
    return () => {
      if (ref.current) {
        sectionObserver.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

export default ScrollObserver;
