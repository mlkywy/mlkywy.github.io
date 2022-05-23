import React from "react";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const Title = () => {
  return (
    <>
      <div className="w-80 text-5xl p-3  text-dark1 dark:text-light1 flex flex-col items-center text-center font-monospace">
        Hi, I'm Alina!
        <div className="w-full text-lg font-bold font-sans">
          I'm a recent graduate and aspiring software developer, based in the
          US.
        </div>
        <div className="w-28 mt-8 border-t-4 border-accent text-middle text-3xl font-normal flex flex-row justify-between py-6">
          <a href="https://github.com/alshei" target="_blank">
            <GithubLogo />
          </a>
          <a
            href="https://linkedin.com/in/alina-sheikh-a59a4518a"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
          <a href="https://twitter.com/wymlky" target="_blank">
            <TwitterLogo />
          </a>
        </div>
      </div>
    </>
  );
};

export default Title;
