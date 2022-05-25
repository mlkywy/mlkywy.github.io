import React from "react";
import { Sun, MoonStars } from "phosphor-react";
import { ThemeContext } from "../ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="px-8 lg:px-4 md:px-4 py-6 w-screen lg:w-auto md:w-auto bg-light1 dark:bg-dark1">
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-middle2 dark:text-middle text-2xl cursor-pointer"
        />
      ) : (
        <MoonStars
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-middle2 dark:text-middle text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
