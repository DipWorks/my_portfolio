import React from "react";
import backgroundImage from "../images/theme1.jpg";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

function Home(props) {
  function handleContactButton(event) {
    event.preventDefault();
    props.setContactMe(true);
  }

  if (props.contactMe) {
    return <ContactMe />;
  } else {
    return (
      <React.Fragment>
        <main className="bg-gradient-to-r from-yellow-500 via-purple-200 to-yellow-500">
          <div className="container min-h-screen min-w-screen">
            {/* absolute makes it position fixed */}
            <img
              src={backgroundImage}
              alt="work desk, work hard message"
              className="absolute object-cover w-full h-full border-8 border-blue-300 rounded-3xl "
            />
            {/* relative to the things around it 
      can be done responsive styling within class name such as lg for large screen*/}
            <section className="relative text-center pt-12 lg:pt-64 px-8">
              <h1 className="text-6xl text-green-300 font-bold cursive leading-none lg:leading-snug home-name">
                Hi, I am Dipendra.
              </h1>
              <button
                onClick={handleContactButton}
                className=" text-3xl bg-yellow-500 bg-opacity-90 rounded m-5 text-white cursive p-2"
              >
                Contact me
              </button>
            </section>
          </div>
          <Resume />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
