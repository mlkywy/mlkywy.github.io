import React from "react";
import { PortfolioCard } from "../../components/Cards";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-light2 dark:bg-dark2 w-screen pt-20">
      <div className="container px-8 md:px-4 lg:px-44 mx-auto flex flex-col gap-6 h-full pt-16 pb-40">
        <PortfolioCard
          title="React Portfolio"
          content="Personal project. You're looking at it! Single page website created with ReactJS, Three.js, and Tailwind CSS. EmailJS was used to handle the contact form."
          demolink="https://mlkywy.github.io/"
          codelink="https://github.com/mlkywy/mlkywy.github.io"
        />
        <PortfolioCard
          title="Unsung"
          content="Spring Capstone 2022. Experimental game made in Unity, coded in C#. Features character controls, dynamic dialogue system, turn-based battles, simple quest system, saving/loading, custom artwork and music, etc. Learned to use documentation effectively and solve debugging issues in a timely manner."
          demolink="https://mlkywy.itch.io/unsung/"
          codelink="https://github.com/mlkywy/Unsung"
        />
        <PortfolioCard
          title="Lung Capacity Visualization"
          content="Final project for a Visualizing Information course, coded in D3.js. Features a documentation page to explain the coding process and rationale behind the design choices. Added responsiveness to the visualization; user input changes the appearance and graph headings, and CSV data is processed dynamically."
          demolink="https://mlkywy.github.io/D3-Final/index.html"
          codelink="https://github.com/mlkywy/D3-Final"
        />
        <PortfolioCard
          title="React Notes Application"
          content="Personal project. Note-taking CRUD app created with MondoDB, ExpressJS, ReactJS, Node.js, Tailwind CSS. Frontend development; coded React components with custom stylings. Backend development; gained a deeper understanding of API endpoints and using non-relational databases. (WIP)"
          demolink="https://github.com/mlkywy/notepad-v2"
          codelink="https://github.com/mlkywy/notepad-v2"
        />
      </div>
    </div>
  );
};

export default Portfolio;
