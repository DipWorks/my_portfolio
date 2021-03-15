import React from "react";
import backgroundImage from "../images/theme1.jpg";

function Home(props) {
  return (
    <main>
      {/* absolute makes it position fixed */}
      <img
        src={backgroundImage}
        alt="work desk, work hard message"
        className="absolute object-cover w-full h-full"
      />
      {/* relative to the things around it 
      can be done responsive styling within class name such as lg for large screen*/}
      <section className="relative flex justify-center pt-12 lg: pt-64 px-8">
        <h1 className="text-6xl text-green-300 font-bold cursive leading-none lg: leading-snug home-name">
          Hi, I am Dipendra.
        </h1>
      </section>
    </main>
  );
}

export default Home;
