import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import backgroundImage from "../images/unsplash.jpg";
import { urlFor } from "./../urlFor";

function About(props) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
      name, 
      email,
      mobileNumber,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative mx-auto">
      <img
        src={backgroundImage}
        alt="a laptop on a workdesk"
        className="absolute w-full h-full"
      />
      <div className="lg:p-10 container relative">
        <section className="bg-yellow-700 bg-opacity-95 flex flex-col justify-center rounded-lg shadow-2xl lg:flex p-20">
          <div className="flex justify-center">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
              alt={author.name}
            />
          </div>
          <div className="text-lg flex flex-col text-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              <span className="text-green-200">{author.name}</span>
            </h1>
            {/* prose class is made for responsive reading 
            so can be used for block content */}

            <div className="cursive text-2xl text-green-300">
              Email: <span className=" text-green-100">{author.email} </span>
            </div>
            <div className="cursive text-2xl text-green-300">
              Mobile Number:{" "}
              <span className="text-green-100">{author.mobileNumber} </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
