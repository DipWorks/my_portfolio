import React from "react";
import backgroundImage from "../images/bulb.jpg";

function Resume(props) {
  return (
    <div className="container min-h-screen min-w-screen">
      <img
        src={backgroundImage}
        alt="work desk, work hard message"
        className="absolute opacity-90 object-cover w-full h-full border-8 border-gray-500 rounded-3xl"
      />
      <section className="relative flex  justify-around flex-col gap-10 lg:flex-row pt-5 lg:pt-12 px-8 object-contain">
        <article className="flex-initial">
          <h1 className="text-6xl text-gray-500 font-bold cursive leading-none lg: leading-snug">
            Languages
          </h1>
          <ul className="text-xl text-gray-600 font-bold leading-none lg:leading-snug">
            <li>Java </li>
            <li>JavaScript</li>
            <li>HTML </li>
            <li>CSS </li>
          </ul>
        </article>
        <article className="flex-initial">
          <h1 className="text-6xl text-gray-500 font-bold cursive leading-none lg: leading-snug">
            Qualifications
          </h1>
          <ul className="text-xl text-gray-600 font-bold leading-none lg:leading-snug">
            <li>
              Master of Information Techonology <br />
              (Major: Software Design and Development){" "}
            </li>
            <br />
            <li>
              Bachelors in Electronics and Communication <br />
              Engineering
            </li>
          </ul>
        </article>
        <article className="flex-initial">
          <h1 className="text-6xl text-gray-500 font-bold cursive leading-none lg: leading-snug">
            Frameworks
          </h1>
          <ul className="text-xl text-gray-600 font-bold leading-none lg:leading-snug">
            <li>Spring Boot </li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Resume;
