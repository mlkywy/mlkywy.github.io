import React from "react";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-light1 dark:bg-dark1 w-screen h-screen -mb-20"
    >
      <div className="container px-8 mx-auto flex items-center justify-center h-full">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
