// import React from 'react'
import logo from "../assets/imgs/logo-blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="">
      <div className="flex p-8 justify-between h-[10vh] px-32">
        <div className="w-28">
          <img className="w-full" src={logo} alt="logo de ventra" />
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/ventra.ar/"
            target="_blank"
            rel="noreferrer"
            className="media"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FCFCFC", fontSize: "24px" }}
            />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="media"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: "#FCFCFC", fontSize: "24px" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
