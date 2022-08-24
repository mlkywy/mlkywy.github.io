import React from "react";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  GameController,
} from "phosphor-react";
import Typewriter from "typewriter-effect";

const Title = (props) => {
  return (
    <>
      <div className="w-80 text-4xl md:text-5xl lg:text-5xl p-3  text-dark1 dark:text-light1 flex flex-col items-center text-center font-monospace">
        {props.heading}
        <div className="w-full text-lg font-bold font-sans">
          <Typewriter
            options={{
              delay: 85,
            }}
            onInit={(typewriter) => {
              typewriter.start().typeString(props.subheading);
            }}
          />
        </div>
        <div className="w-40 mt-8 border-t-4 border-accent text-middle2 dark:text-middle text-3xl font-normal flex flex-row justify-between py-6">
          <a href="https://github.com/mlkywy" target="_blank">
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
          <a href="https://mlkywy.itch.io/" target="_blank">
            <GameController />
          </a>
        </div>
      </div>
    </>
  );
};

export default Title;
