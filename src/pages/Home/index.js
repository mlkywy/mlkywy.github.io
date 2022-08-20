import Title from "../../components/Title";
import React from "react";
import { ShapeCanvas } from "../../threejs/3DShape";

const Home = () => {
  return (
    <div id="home" className="bg-light1 dark:bg-dark1 w-screen h-screen">
      <div className="container px-8 mx-auto flex flex-col items-center lg:flex-row md:flex-row lg:justify-center md:justify-center h-full">
        <div className="container flex items-center justify-center mt-24 lg:mt-0 md:mt-0">
          <Title
            heading={"Hi, I'm Alina!"}
            subheading={"Software && game developer. "}
          />
        </div>

        <div className="container h-full flex items-center justify-center overflow-hidden">
          <ShapeCanvas />
        </div>
      </div>
    </div>
  );
};

export default Home;
