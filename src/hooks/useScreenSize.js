import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth || document.documentElement.clientWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  return { screenSize };
}
