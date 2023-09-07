import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ThemeSelector = () => {
  const setRootTheme = (theme) => {
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    setRootTheme(localStorageTheme);
  }, []);

  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default ThemeSelector;
