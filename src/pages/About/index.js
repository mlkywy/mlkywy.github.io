import React from "react";
import { AboutMeCard } from "../../components/Cards";

const About = () => {
  return (
    <div id="about" className="bg-light2 dark:bg-dark2 w-screen h-screen pt-20">
      <div className="container px-8 mx-auto flex items-center justify-center h-full ">
        <AboutMeCard
          heading="Hello, World!"
          body1="I am a University graduate interested in working in software development with a hobby for creating games! I also enjoy making art and designing graphics. I first discovered my love for programming towards the end of my college experience, where I explored several different career avenues. I still have much to learn, but I am eager to try new things and grow!"
          body2="Below are a few of my favorite pastimes!"
        />
      </div>
    </div>
  );
};

export default About;
