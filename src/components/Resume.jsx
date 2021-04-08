import React from "react";
import backgroundImage from "../images/bulb.jpg";

function Resume(props) {
  return (
    <div className="container min-h-screen min-w-screen">
      <img
        src={backgroundImage}
        alt="work desk, work hard message"
        className="absolute object-cover w-full h-full border-8 border-indigo-300 rounded-3xl"
      />
      <section className="relative flex  justify-around flex-col gap-10 lg:flex-row pt-12 lg:pt-64 px-8 object-contain">
        <article className="flex-initial">
          <h1 className="text-6xl text-blue-600 font-bold cursive leading-none lg: leading-snug">
            Languages
          </h1>
          <ul className="text-xl text-red-500 font-bold leading-none lg:leading-snug">
            <li>Java </li>
            <li>JavaScript</li>
            <li>HTML </li>
            <li>CSS </li>
            <li>Python </li>
          </ul>
        </article>
        <article className="flex-initial">
          <h1 className="text-6xl text-blue-600 font-bold cursive leading-none lg: leading-snug">
            Qualifications
          </h1>
          <ul className="text-xl text-red-500 font-bold leading-none lg:leading-snug">
            <li>Master of Information Techonology </li>
            <li>Mastering React</li>
          </ul>
        </article>
        <article className="flex-initial">
          <h1 className="text-6xl text-blue-600 font-bold cursive leading-none lg: leading-snug">
            Frameworks
          </h1>
          <ul className="text-xl text-red-500 font-bold leading-none lg:leading-snug">
            <li>React </li>
            <li>Django</li>
            <li>NodeJs</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Resume;
