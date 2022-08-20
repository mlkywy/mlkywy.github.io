import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bottom-0 w-full flex flex-wrap items-center justify-between bg-light2 dark:bg-dark2 h-20 z-10">
        <div className="container lg:px-8 md:px-8 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center lg:w-auto md:w-auto">
            <p className="text-xs text-accent">Made with ♡ by Alina!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
