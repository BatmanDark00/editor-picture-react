import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {   
    const isDarkLocalStorage = localStorage.getItem("isDark");
    return isDarkLocalStorage === "true";
  });

  useEffect(() => {    
    const isDarkLocalStorage = localStorage.getItem("isDark");
    setIsDark(isDarkLocalStorage === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
     
      localStorage.setItem("isDark", newIsDark.toString());

      document.body.dataset.theme = newIsDark ? "dark" : "light";   



      return newIsDark;
    });
  };

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
