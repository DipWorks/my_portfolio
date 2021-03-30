import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-red-500 block text-center">
      <div className="text-xl text-white pt-4 text-bold cursive">
        Find me on Social Media {"&"} GitHub
      </div>
      <div className="lg:inline-flex py-4">
        <SocialIcon
          className="m-1"
          target="_blank"
          fgColor="#fff"
          url="https://www.facebook.com/dipu.coolboy"
        />
        <SocialIcon
          className="m-1"
          target="_blank"
          fgColor="#fff"
          url="https://twitter.com/Dipendr11755092"
        />
        <SocialIcon
          className="m-1"
          target="_blank"
          fgColor="#fff"
          url="https://www.linkedin.com/in/dipendra-bhandari-382a061a5/"
        />
        <SocialIcon
          className="m-1"
          target="_blank"
          fgColor="#fff"
          url="https://www.instagram.com/ibrahideep/"
        />
        <SocialIcon
          className="m-1"
          target="_blank"
          fgColor="#fff"
          url="https://github.com/DipWorks"
        />
      </div>
    </footer>
  );
};

export default Footer;
