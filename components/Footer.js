import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Footer() {
  return (
    <div>
      <footer
        className="bg-gray-900 
             text-2xl text-black text-center
             fixed
             inset-x-0
             bottom-0
             "
      >
        <div className=" text-center text-white pb-3 ">

          <Link passHref={true} href="/https://github.com/mrinmay7875/next-mongodb-app">

          <div className="text-white pt-0.5 text-sm inline mr-20 absolute left-20">
            <button className="p-1 border-1 rounded-sm mt-1 border-white opacity-60 hover:bg-white hover:text-black ">
              Github{" "}
              <FontAwesomeIcon
                style='padding-left:"10px"'
                icon={faExternalLinkAlt}
              ></FontAwesomeIcon> 
            </button>
          </div>

          </Link>
          <Link passHref={true} href="/">
            <a className="hover:opacity-90 opacity-50 inline  font-semibold text-base ">
              Home
            </a>
          </Link>

          <div className="relative inline">
            <div className="absolute text-5xl px-1 bottom-0 left-0 opacity-60">
              <p>.</p>
            </div>
          </div>
          <Link passHref={true} href="/feed">
            <a className="hover:opacity-90 opacity-50 inline px-5 font-semibold text-base ">
              Feed
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
