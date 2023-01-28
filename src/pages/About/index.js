import React from "react";
import { AboutMeCard } from "../../components/Cards";

const About = () => {
  return (
    <div id="about" className="bg-light2 dark:bg-dark2 w-screen h-screen pt-20">
      <div className="container px-8 mx-auto flex items-center justify-center h-full">
        <AboutMeCard
          heading="welcome to my portfolio!"
          body1="I am a software engineer based in the Midwest US! I graduated in the summer of 2022 with a degree in Media Arts and Science before deciding to pursue programming as a career. I currently work as a junior .NET backend developer focused primarily on developing APIs. I am also a hobbyist game developer, artist, and graphic designer who strives to continuously learn new technologies."
          body2="Here are a few of my favorite pastimes!"
        />
      </div>
    </div>
  );
};

export default About;
