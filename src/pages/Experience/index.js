import React from "react";
import { ResumeCard } from "../../components/Cards";

const Experience = () => {
  const jobText1 = [
    "* Company formerly known as Bottom-Line Performance before acquisition by Tier1 Performance in Sept 2019.",
    "Worked with experienced graphic artists, programmers, technical writers, instructional designers, and project managers to develop client projects and innovative learning solutions; used Agile methodology.",
    "Designed full mockups and graphics for eLearning courses, websites, apps, print materials, and marketing presentations.",
    "Consistently met tight deadlines, scheduled and attended meetings with coworkers, mentors, and clients.",
    "Responded well to criticism and showed growth and improvement from regular group sessions that involved giving each other feedback.",
  ];

  const jobText2 = [
    "Developed and applied uses for 3D printing and digital technologies in healthcare.",
    "Worked with scanning and anatomical modeling, medical / assistive devices and prosthesis, educational and training tools, and more.",
    "Attended meetings with supervisors, doctors, staff, patients, to discuss projects; assisted student groups.",
    "Used relevant software to create and clean up models (CAD), slice models for printing, and design marketing materials.",
    "Assembled, used, and maintained various types of 3D printers.",
    "Studied the feasibility of 3D printing in radiation shielding with supervisor and physicist at the hospital; wrote up an abstract + poster for the research.",
  ];

  const jobText3 = [
    "Helped students learn how to use equipment such as microscopes and pipettes.",
    "Answered questions and offered assistance in the laboratory.",
    "Created Canvas page with tips and resources for incoming students.",
  ];

  const jobText4 = [
    "Contributed to the development of the prototype in Unity and built upon the work of the previous student group.",
    "Worked in a team setting through a collaborative process and gained experience in version control methods.",
    "Added content and atmospheric elements to the prototype, such as lighting, sound, assets, etc.",
    "Wrote scripts in C# for the movement of car assets in the scenes, practiced object-oriented programming.",
    "Presented prototype with team members for client, instructors, and peers with the use of a live VR demonstration.",
  ];

  const jobText5 = [
    "Wrote Apex classes to handle backend functionality. e.g. Retrieved data from REST and SOAP API requests in Marketing Cloud, integrated Apex Actions (invocable methods) with Flows in Salesforce.",
    "Created test classes for all code and performed tests to ensure total code coverage.",
    "Gained experience with frontend technologies like Lightning Web Components using JavaScript.",
    "Imported, exported, and cleaned data using Data Loader and created custom fields (columns), records (rows), on objects (database tables) as necessary in the dev environment.",
  ];

  const jobText6 = [
    "Design, build, and maintain efficient, reusable, and reliable C# code with an emphasis on API development.",
  ];

  return (
    <div id="experience" className="bg-light1 dark:bg-dark1 w-screen py-20">
      <div className="container px-8 md:px-4 lg:px-32 mx-auto flex flex-col h-full ">
        <ResumeCard
          role="Software Engineer"
          company="Lockstep"
          date="Sept 2022 — Present"
          body={jobText6.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
        <ResumeCard
          role="Application Developer"
          company="DB Services"
          date="June 2022 — Aug 2022"
          body={jobText5.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
        <ResumeCard
          role="Unity Developer"
          company="University of Arizona - College of Humanities"
          date="Sep 2021 — Dec 2021"
          body={jobText4.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
        <ResumeCard
          role="Biology Lab Teaching Assistant"
          company="Indiana University-Purdue University Indianapolis"
          date="Aug 2021 — Dec 2021"
          body={jobText3.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
        <ResumeCard
          role="3D Innovations Lab Intern"
          company="Indiana University Health"
          date="Sep 2020 — May 2021"
          body={jobText2.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
        <ResumeCard
          role="Multimedia Developer"
          company="Bottom-Line Performance"
          date="May 2019 — Aug 2019"
          body={jobText1.map((text) => (
            <li className="pb-3 text-dark1 dark:text-light1 text-sm md:text-base lg:text-base">
              {text}
            </li>
          ))}
        />
      </div>
    </div>
  );
};

export default Experience;
