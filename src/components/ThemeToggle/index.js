import React from "react";
import { Sun, MoonStars } from "phosphor-react";
import { ThemeContext } from "../ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="pr-4 pl-4 pt-6 pb-6 w-screen lg:w-auto md:w-auto bg-light1 dark:bg-dark1">
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-middle dark:text-middle text-2xl cursor-pointer"
        />
      ) : (
        <MoonStars
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-middle dark:text-middle text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
