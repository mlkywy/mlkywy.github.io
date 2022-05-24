import React from "react";
import { FadingImageCanvas } from "../../threejs/FadingImage";

export const AboutMeCard = (props) => {
  return (
    <div
      id="about"
      className="w-full h-auto lg:w-2/3 flex flex-col items-center bg-light2 dark:bg-dark2 md:bg-light1 md:dark:bg-dark1 lg:bg-light1 lg:dark:bg-dark1 md:p-12 lg:p-12"
    >
      <div className="w-full text-3xl px-3 text-middle flex justify-center font-monospace">
        {props.heading}
      </div>

      <div className="w-full text-sm md:text-base lg:text-base p-3 text-dark1 dark:text-light1 flex flex-col">
        <div className="py-2">{props.body1}</div>
        <div className="py-2">{props.body2}</div>
        <div className="pt-2">
          <FadingImageCanvas />
        </div>
      </div>
    </div>
  );
};
