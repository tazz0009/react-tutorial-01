import React, { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(null);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return document.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll(e) {
      setScrollPosition(window.scrollY);
  }

  return scrollPosition;
}
