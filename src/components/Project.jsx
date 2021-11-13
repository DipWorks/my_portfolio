import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import backgroundImage from "../images/bulb.jpg";

function Project(props) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      projectType,
      frameworks,
      description,
      sourceCode,
      link,
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-600 relative">
      <div className="container min-h-screen">
        <img
          src={backgroundImage}
          alt="coffee and laptop, programmer work desk"
          className="absolute object-cover w-full h-full border-8 border-gray-500 rounded-3xl"
        />
        <section className="relative container mx-auto p-10">
          <h1 className="text-5xl text-gray-600 flex justify-center cursive">
            My Projects
          </h1>
          <h2 className="text-xl text-gray-500 font-bold flex justify-center mb-12">
            Welcome to my Projects page!
          </h2>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                <article
                  key={index}
                  className="relative rounded-lg shadow-xl bg-white bg-opacity-90 lg:p-8 p-5 mt-5 transition duration-500 ease-in-out hover:bg-gray-300 transform hover:translate-y-3 hover:scale-110 "
                >
                  <h3 className="text-3xl font-bold mb-2 hover:text-yellow-500">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      // it is recommended to use rel=noopener on any external links due to security reasons
                      // no referrer show the link as direct link to the opening website instead of referal link
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-s space-x-2">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Frameworks</strong>:{" "}
                      {project.frameworks}
                    </span>
                    <span></span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                    <p className="my-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex justify-around">
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-bold hover:no-underline hover:underline hover:text-yellow-500 text-xl"
                      >
                        Project Demo{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                      <a
                        href={project.sourceCode}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-bold hover:no-underline hover:underline hover:text-yellow-500 text-xl"
                      >
                        View Source Code{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </div>
    </main>
  );
}

export default Project;
