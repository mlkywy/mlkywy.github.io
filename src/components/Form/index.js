import React, { useState } from "react";
import { ContactButton } from "../Buttons";

const Form = () => {
  return (
    <>
      <form className="w-full max-w-lg" onSubmit="">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-light2 text-dark2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm lg:text-base md:text-base"
              id="firstname"
              type="text"
              placeholder="First"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-light2 text-dark2 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-sm lg:text-base md:text-base"
              id="lastname"
              type="text"
              placeholder="Last"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              for="grid-email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-light2 text-dark2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-sm lg:text-base md:text-base"
              id="email"
              type="email"
              placeholder="email@address.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-light2 text-dark2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none text-sm lg:text-base md:text-base"
              id="message"
              placeholder="Let me know what you think!"
              required
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <ContactButton
              link=""
              option="submit"
              type="submit"
            ></ContactButton>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </>
  );
};

export default Form;
