import { useEffect, useState } from "react";

const useScroll = () => {
  const [offScroll, setOffScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffScroll(window.scrollY);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return offScroll;
};

export default useScroll;