import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar(props) {
  return (
    // this class makes background color red with darkness level 600(100 to 900)
    <header className="bg-red-600">
      {/* div is a container, margin x is auto
      is a flex container and  */}
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          {/* inline flex item, tracking widest is spacing between the letters*/}
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 
            mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Dipendra
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-4">
          <SocialIcon
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            url="https://www.facebook.com/dipu.coolboy"
          />
          <SocialIcon
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            url="https://twitter.com/Dipendr11755092"
          />
          <SocialIcon
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            url="https://www.linkedin.com/in/dipendra-bhandari-382a061a5/"
          />
          <SocialIcon
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            url="https://www.instagram.com/ibrahideep/"
          />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
