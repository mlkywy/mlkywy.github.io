import React, { useState } from "react";
import { FadingImageCanvas } from "../../threejs/FadingImage";
import { TextButton, ProjectButton } from "../Buttons";

export const AboutMeCard = (props) => {
  return (
    <div
      id="about"
      className="w-full rounded h-auto lg:w-2/3 flex flex-col items-center md:drop-shadow-md lg:drop-shadow-md bg-light2 dark:bg-dark2 md:bg-light1 md:dark:bg-dark1 lg:bg-light1 lg:dark:bg-dark1 md:p-12 lg:p-12"
    >
      <div className="w-full text-2xl px-3 text-middle2 dark:text-middle flex justify-center font-monospace">
        {props.heading}
      </div>

      <div className="w-full text-sm md:text-base lg:text-base py-3 text-dark1 dark:text-light1 flex flex-col items-center">
        <div className="py-2">{props.body1}</div>
        <div className="py-2">{props.body2}</div>

        <div className="py-2 flex flex-row">
          <TextButton option="digital art" />
          <TextButton option="creative writing" />
          <TextButton option="video games" />
          <TextButton option="3D printing" />
        </div>

        <div className="cursor-pointer w-28 -my-2">
          <FadingImageCanvas />
        </div>
      </div>
    </div>
  );
};

export const ResumeCard = (props) => {
  return (
    <div className="w-full flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between py-6">
      <div className="w-full py-6 md:p-8 lg:p-12">
        <h1 className="text-dark1 dark:text-light1 text-2xl font-bold">
          {props.role}
        </h1>
        <h2 className="text-accent italic text-xl font-semibold pb-3">
          {props.company}
        </h2>
        <h3 className="text-middle2 dark:text-middle pt-3 border-t-4 border-middle2 dark:border-middle text-sm w-36">
          {props.date}
        </h3>
      </div>
      <ul className="w-full py-6 md:py-8 lg:py-12 list-none">{props.body}</ul>
    </div>
  );
};

export const PortfolioCard = (props) => {
  const [showNote, setShowNote] = useState(false);
  const handleClick = () => {
    setShowNote(!showNote);
  };

  return (
    <div>
      {/* title section */}
      <button
        className="w-full h-auto rounded-t p-6 bg-light1 dark:bg-dark1 hover:dark:bg-accent hover:bg-accent drop-shadow-md text-white flex justify-between"
        onClick={handleClick}
      >
        <p className="text-dark1 dark:text-light1 text-xl md:text-2xl lg:text-2xl text-left font-monospace">
          {props.title}
        </p>
      </button>
      {/* card expanded / content section */}
      {!showNote && (
        <div className="w-full rounded-b p-6 bg-light1 dark:bg-dark1 hover:bg-light2 hover:dark:bg-dark2 drop-shadow-md text-white flex flex-col">
          <p className="mb-6 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
            {props.content}
          </p>
          <div className="flex flex=row justify-start">
            <ProjectButton link={props.demolink} option="demo" />
            <ProjectButton link={props.codelink} option="code" />
          </div>
        </div>
      )}
    </div>
  );
};
