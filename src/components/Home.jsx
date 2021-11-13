import React from "react";
import backgroundImage from "../images/benchAccounting.jpg";
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
        <main className="bg-gradient-to-r from-gray-600 via-purple-200 to-gray-600">
          <div className="container min-h-screen min-w-screen">
            {/* absolute makes it position fixed */}
            <img
              src={backgroundImage}
              alt="work desk, work hard message"
              className="absolute opacity-90 object-cover w-full h-full border-8 border-gray-500 rounded-3xl "
            />
            {/* relative to the things around it 
      can be done responsive styling within class name such as lg for large screen*/}
            <section className="relative text-center pt-5 lg:pt-12 px-8">
              <div className="p-3 rounded-lg bg-opacity-25">
                <h1 className="text-gray-500 font-bold cursive leading-none lg:leading-snug home-name">
                  Dipendra Bhandari
                </h1>
                <span className="text-5xl text-gray-600 font-bold cursive leading-none lg:leading-snug">
                  Sofware Developer at DCS, NSW Government
                </span>
              </div>

              <h1>
                <button
                  onClick={handleContactButton}
                  className=" text-3xl bg-gray-600 bg-opacity-90 rounded m-5 text-white cursive p-2"
                >
                  Contact me
                </button>
              </h1>
            </section>
          </div>
          <Resume />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
