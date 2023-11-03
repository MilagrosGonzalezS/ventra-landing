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
        <ul className="nav absolute top-[25vh] left-[7vw] z-10 flex flex-col gap-10 py-8 items-center -translate-x-2/4 bg-opacity rounded-2xl p-4 mt-4">
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
      <div className="content"></div>
      <div>
        <img
          className="fixed w-4 z-15 right-[6.11vw] top-[14vh] -translate-x-2/4"
          src={arrows}
          alt="flechas de colores"
        />
      </div>

      {/* <div className="fixed top-[15vh] left-[7vw]">
        <hr className="h-[75svh] w-0 border-l-[1px] ml-7" />
        <nav className="absolute top-32">
          <ul className="flex flex-col gap-16 bg-dark py-8 items-center">
            <li className="text-light list-none">
              <a href="#home">home</a>
            </li>
            <li className="text-light list-none">
              <a href="#about">about</a>
            </li>
            <li className="text-light list-none">
              <a href="#contact">contacto</a>
            </li>
            <li className="text-light list-none">
              <a href="#">asdasd</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="fixed top-[15vh] right-[7vw]">
        <hr className=" h-[75svh] w-0 border-l-[1px] mr-7" />
      </div> */}
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
