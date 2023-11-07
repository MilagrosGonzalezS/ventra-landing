// import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import arrows from "../assets/imgs/recurso-colores.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <>
      <nav className="fixed">
        <ul className="nav absolute top-[23vh] left-[7vw] z-10 flex flex-col gap-10 py-8 items-center -translate-x-2/4 bg-opacity rounded-2xl p-4 mt-4">
          <li className="flex flex-col items-center justify-center text-light list-none tracking-wider font-extralight text-2xl relative">
            <a href="#home" className="home-icon">
              <FontAwesomeIcon icon={faHouse} />
            </a>
            <p className="home-text">Inicio</p>
          </li>
          <li className="flex flex-col items-center justify-center text-light list-none tracking-wider font-extralight text-2xl">
            <a href="#about" className="home-icon">
              <FontAwesomeIcon icon={faUsers} />
            </a>
            <p className="home-text">Nosotros</p>
          </li>
          <li className="flex flex-col items-center justify-center text-light list-none tracking-wider font-extralight text-2xl">
            <a href="#contact" className="home-icon">
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
            <p className="home-text">Contacto</p>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img
          className=" w-4 fixed right-[7vw] translate-x-2/4 z-20 top-[14vh]"
          src={arrows}
          alt="flechas de colores"
        />
      </div>

      <main className="min-h-screen flex flex-col justify-center items-center px-[300px]">
        <Home />
        <About />
        <Contact />
        <Footer />
      </main>

    </>
  );
}

export default Main;
