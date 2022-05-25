import React from "react";
import { FadingImageCanvas } from "../../threejs/FadingImage";
import { TextButton } from "../Buttons";

export const AboutMeCard = (props) => {
  return (
    <div
      id="about"
      className="w-full h-auto lg:w-2/3 flex flex-col items-center bg-light2 dark:bg-dark2 md:bg-light1 md:dark:bg-dark1 lg:bg-light1 lg:dark:bg-dark1 md:p-12 lg:p-12"
    >
      <div className="w-full text-3xl px-3 text-middle2 dark:text-middle flex justify-center font-monospace">
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
