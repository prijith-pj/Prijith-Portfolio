import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title=" Smart 24x7 Using Machine Learning Machine learning-"
          main={
            <>
          
              <ul className="list-disc list-inside">
                <li>A machine learning-based complaint registration system.</li>
                <li>Developed algorithms to efficiently sort and prioritize complaints.</li>
                <li>Implemented performance monitoring with ongoing system improvements.</li>
              </ul>
            </>
          }
        />
        <ProjectCard
          title="Verkkotesti"
          main={
            <>
            
              <ul className="list-disc list-inside">
                <li>Built an online platform for students.</li>
                <li>Designed with ease and accessibility in mind.</li>
                <li>Gained hands-on experience in writing clean code following software design principles.</li>
              </ul>
            </>
          }
        />
        {/*<ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />*/}
      </div>
    </div>
  );
};

export default Projects;
