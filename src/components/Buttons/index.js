import React from "react";
import { Link } from "react-scroll";

export const NavLink = (props) => {
  return (
    <Link to={props.link}>
      <button className="w-screen lg:w-auto md:w-auto flex items-center px-8 lg:px-4 md:px-4 py-6 font-bold bg-light1 dark:bg-dark1 text-middle2 dark:text-middle focus:text-dark1 focus:dark:text-light2 focus:border-b-4 focus:pb-5 border-accent">
        {props.option}
      </button>
    </Link>
  );
};

export const TextButton = (props) => {
  return (
    <div class="inline-flex mr-2 items-center text-center justify-center px-2 py-1 text-xs lg:text-sm md:text-sm font-semibold leading-none text-white bg-accent rounded-full mb-6">
      {props.option}
    </div>
  );
};

export const ProjectButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button class="inline-flex mr-2 items-center text-center justify-center w-20 px-3 py-2 font-semibold leading-none text-white bg-accent rounded-full mb-3">
        {props.option}
      </button>
    </a>
  );
};

export const ContactButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button class="inline-flex mr-2 items-center text-center justify-center w-32 px-3 py-3 font-semibold leading-none text-white bg-middle2 dark:bg-middle text-lg rounded mb-3">
        {props.option}
      </button>
    </a>
  );
};
