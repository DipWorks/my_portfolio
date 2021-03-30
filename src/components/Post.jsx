import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import backgroundImage from "../images/workhard.jpg";

function Post(props) {
  const [postData, setPost] = useState(null);

  // useEffect is similar to componentDidMount and componentDidUpdate
  // giving a blank dependency list i.e. [] which means fetch for all the state values
  useEffect(() => {
    // we are using GROQ queries to fetch data from sanity client
    // projections in sanity are fetched using curly braces

    sanityClient
      .fetch(
        `*[_type=="post"]{
          title, 
          slug, 
          mainImage{
          asset->{
          _id,
          url
        }, 
        alt
        }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-300">
      <img
        src={backgroundImage}
        alt="work desk, work hard message"
        className="absolute object-cover w-full h-full border-8 border-indigo-300 rounded-3xl"
      />

      {/* mx-auto centers the container
      container class sets the max-width of the element to match the min-width of the 
      current breakpoint */}
      <section className="container relative mx-auto p-5 lg:p-10">
        <h1 className="text-5xl text-yellow-600 flex justify-center cursive">
          Blog Posts
        </h1>
        <h2 className="text-lg text-red-500 font-bold text-gray-600 flex justify-center mb-12 ">
          Welcome to my blog posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index}>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pd-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
