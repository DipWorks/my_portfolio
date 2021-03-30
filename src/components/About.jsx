import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import backgroundImage from "../images/coffeeandlaptop.jpg";
import { urlFor } from "./../urlFor";

function About(props) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
      name, 
      bio, 
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) return <div>Loading...</div>;

  return (
    <main className="bg-blue-300 relative">
      <img
        src={backgroundImage}
        alt="a laptop on a workdesk"
        className="absolute w-full h-full border-8 border-indigo-300 rounded-3xl"
      />
      <div className="p-5 lg:pt-20 container mx-auto relative">
        <section className="bg-yellow-600 bg-opacity-95 rounded-lg shadow-2xl lg:flex lg:p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            {/* prose class is made for responsive reading 
            so can be used for block content */}
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="38yo8xqz"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
