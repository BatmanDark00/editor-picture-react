import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { setThemeMode } from "@/states/themeModeSlice";

const useDarkMode = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkLocalStorage = localStorage.getItem("isDark");
    dispatch(setThemeMode(isDarkLocalStorage === "true" ? "dark" : "light"));
  });

  const toggleDarkMode = () => {
    const isDarkLocalStorage = localStorage.getItem("isDark");
    const isDark = isDarkLocalStorage === "true";

    localStorage.setItem("isDark", (!isDark).toString());
    dispatch(setThemeMode(isDark ? "light" : "dark"));
    document.body.dataset.theme = isDark ? "light" : "dark";
  };

  return { toggleDarkMode };
};

export default useDarkMode;
