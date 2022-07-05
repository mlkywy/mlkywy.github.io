import React, { useRef, useState } from "react";
import { ContactButton } from "../Buttons";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setShowSuccess(false);
    setShowError(false);

    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        form.current,
        process.env.REACT_APP_USERID
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess(true);
          setShowError(false);
        },
        (error) => {
          console.log(error.text);
          setShowSuccess(false);
          setShowError(true);
        }
      );

    // clear all input values in the form
    e.target.reset();
  };
  return (
    <>
      <form ref={form} className="w-full max-w-lg" onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-accent text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-light2 dark:bg-dark2 text-dark2 dark:text-light2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black text-sm lg:text-base md:text-base"
              id="firstname"
              name="firstname"
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
              className="appearance-none block w-full bg-light2 dark:bg-dark2 text-dark2 dark:text-light2 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black text-sm lg:text-base md:text-base"
              id="lastname"
              name="lastname"
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
              className="appearance-none block w-full bg-light2 dark:bg-dark2 text-dark2 dark:text-light2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black text-sm lg:text-base md:text-base"
              id="email"
              name="email"
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
              for="grid-message"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-light2 dark:bg-dark2 text-dark2 dark:text-light2 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black h-48 resize-none text-sm lg:text-base md:text-base"
              id="message"
              name="message"
              placeholder="Let me know what you think!"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <ContactButton option="submit" type="submit" />
          </div>
          {showSuccess && (
            <div className="text-sm md:text-base lg:text-base text-accent">
              <i>Your message was sent successfully!</i>
            </div>
          )}
          {showError && (
            <div className="text-sm md:text-base lg:text-base text-accent">
              <i>Uh, oh! Something went wrong.</i>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
