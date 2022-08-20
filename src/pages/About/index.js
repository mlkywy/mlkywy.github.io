import React from "react";
import { AboutMeCard } from "../../components/Cards";

const About = () => {
  return (
    <div id="about" className="bg-light2 dark:bg-dark2 w-screen h-screen pt-20">
      <div className="container px-8 mx-auto flex items-center justify-center h-full">
        <AboutMeCard
          heading="Welcome to my portfolio!"
          body1="I graduated in May 2022 with a B.S. in Media Arts and Science from the School of Informatics and Computing at Indiana University-Purdue University Indianapolis. I am a software developer with a hobby for creating games. I also enjoy making art and designing graphics. I discovered my love for programming towards the end of my college experience, around the time I explored several different career avenues. I still have much to learn, but I am eager to try new things and grow!"
          body2="Here are a few of my favorite pastimes!"
        />
      </div>
    </div>
  );
};

export default About;
