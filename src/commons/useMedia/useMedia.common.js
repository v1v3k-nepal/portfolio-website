import { useState, useEffect } from "react";

export const useMedia = () => {
  const [breakpoints, setBreakpoints] = useState({
    sm: false,
    md: false,
    lg: false,
    xlg: false,
    xxl: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      setBreakpoints({
        sm: windowWidth < 576,
        md: windowWidth >= 576 && windowWidth < 768,
        lg: windowWidth >= 768 && windowWidth < 992,
        xlg: windowWidth >= 992 && windowWidth < 1200,
        xxl: windowWidth >= 1200,
      });
    };

    // Initial call to set breakpoints on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoints;
};
