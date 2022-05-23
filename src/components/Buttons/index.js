import React from "react";
import { Link } from "react-scroll";

export const NavLink = (props) => {
  return (
    <Link to={props.link}>
      <button className="w-screen lg:w-auto md:w-auto flex items-center px-4 py-6 font-bold bg-light1 dark:bg-dark1 text-middle focus:text-dark1 focus:dark:text-light2 focus:border-b-4 focus:pb-5 border-accent">
        {props.option}
      </button>
    </Link>
  );
};
