import React from "react";
import { PortfolioCard } from "../../components/Cards";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-light2 dark:bg-dark2 w-screen pt-20">
      <div className="container px-8 md:px-4 lg:px-44 mx-auto flex flex-col gap-6 h-full pt-16 pb-40">
        <PortfolioCard
          title="mlkywy.net"
          content="Personal project. You're looking at it! Single page portfolio website created with ReactJS, Three.js, and Tailwind CSS. EmailJS was used to handle the contact form."
          demolink="https://mlkywy.github.io/"
          codelink="https://github.com/mlkywy/mlkywy.github.io"
        />
        <PortfolioCard
          title="unsung (prologue)"
          content="Spring Capstone 2022. Experimental game made in Unity, coded in C#. Features character controls, dynamic dialogue system, turn-based battles, simple quest system, saving/loading, custom artwork and music, etc."
          demolink="https://mlkywy.itch.io/unsung/"
          codelink="https://github.com/mlkywy/Unsung"
        />
        <PortfolioCard
          title="songshuttle"
          content="Personal project. A simple application that makes use of the Spotify API to search for songs, find recommendations, and create playlists. (WIP)"
          demolink="https://mlkywy.net/songshuttle/"
          codelink="https://github.com/mlkywy/songshuttle"
        />
        <PortfolioCard
          title="lung capacity visualization"
          content="Final project for a Visualizing Information course, created with D3.js. Features a documentation page to explain the coding process and rationale behind the design choices. Added responsiveness to the visualization; user input changes the appearance and graph headings, and CSV data is processed dynamically."
          demolink="https://mlkywy.github.io/D3-Final/index.html"
          codelink="https://github.com/mlkywy/D3-Final"
        />
      </div>
    </div>
  );
};

export default Portfolio;
