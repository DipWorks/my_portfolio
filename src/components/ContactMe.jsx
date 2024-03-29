import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import backgroundImage from "../images/theme1.jpg";
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
    <main className="relative bg-gray-600 min-w-screen min-h-screen">
      <img
        src={backgroundImage}
        alt="a laptop on a workdesk"
        className="absolute object-cover w-full h-full border-8 border-gray-500 rounded-3xl "
      />
      <div className="p-5 lg:p-10 container relative">
        <section className="bg-gray-600 bg-opacity-75 flex flex-col justify-center rounded-lg shadow-2xl lg:flex p-5">
          <div className="flex justify-center">
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
              alt={author.name}
            />
          </div>
          <div className="text-lg flex flex-col text-center">
            <h1 className="cursive text-6xl text-white mb-4">
              <span className="text-green-300">{author.name}</span>
            </h1>
            {/* prose class is made for responsive reading 
            so can be used for block content */}

            <div className="cursive text-2xl text-green-300">
              Email: <span className=" text-green-100 ">{author.email} </span>
            </div>
            <div className="cursive text-2xl text-green-300">
              Mobile Number:{" "}
              <span className="text-green-100">0{author.mobileNumber} </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
