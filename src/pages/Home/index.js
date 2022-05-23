import React from "react";
import { Canvas } from "@react-three/fiber";
import Content from "../../three/Scene";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div id="home" className="bg-light1 dark:bg-dark1 w-screen h-screen -mt-6">
      <div className="container px-8 mx-auto flex flex-col items-center lg:flex-row md:flex-row lg:justify-center md:justify-center h-full">
        <div className="container flex items-center justify-center mt-24 lg:mt-0 md:mt-0">
          <Title
            heading={"Hi, I'm Alina!"}
            subheading={"Recent graduate and web developer. "}
          />
        </div>

        <div className="container h-full flex items-center justify-center">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10] }}>
            <pointLight color="red" />
            <pointLight position={[10, 10, -10]} color="#718096" />
            <pointLight position={[-10, -10, 10]} color="#F2718C" />
            <Content />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
