import React from "react";
import { PortfolioCard } from "../../components/Cards";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-light2 dark:bg-dark2 w-screen pt-20">
      <div className="container px-8 md:px-4 lg:px-44 mx-auto flex flex-col gap-6 h-full pt-16 pb-40">
        <PortfolioCard
          title="React Portfolio (WIP)"
          content="Personal project. Single page website created with React.js, Three.js, and Tailwind.css."
          demolink="https://alshei.github.io/"
          codelink="https://github.com/alshei/alshei.github.io"
        />
        <PortfolioCard
          title="Unsung"
          content="Spring Capstone 2022. Experimental game made in Unity, coded in C#. Features character controls, dynamic dialogue system, turn-based battles, simple quest system, saving/loading, custom artwork and music, etc. Learned to use documentation effectively and solve debugging issues in a timely manner."
          demolink="https://mlkywy.itch.io/unsung/"
          codelink="https://github.com/alshei/Unsung"
        />
        <PortfolioCard
          title="Lung Capacity Visualization"
          content="Final project for a Visualizing Information course, coded in D3.js. Features a documentation page to explain the coding process and rationale behind the design choices. Added responsiveness to the visualization; user input changes the appearance and graph headings, and CSV data is processed dynamically."
          demolink="https://alshei.github.io/D3-Final/index.html"
          codelink="https://github.com/alshei/D3-Final"
        />
        <PortfolioCard
          title="React Notes Application (WIP)"
          content="Personal project. Note-taking CRUD app created with MondoDB, Express.js, React.js, Node.js, Tailwind.css. Frontend development; coded React components with completely custom stylings. Backend development; gained a deeper understanding of API endpoints and using relational databases."
          demolink="https://github.com/alshei/notepad-v2"
          codelink="https://github.com/alshei/notepad-v2"
        />
      </div>
    </div>
  );
};

export default Portfolio;
