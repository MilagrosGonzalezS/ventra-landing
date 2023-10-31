// import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import arrows from "../assets/imgs/recurso-colores.png";

function Main() {
  return (
    <>
      <nav className="fixed">
        <ul className="absolute top-[25vh] left-[7vw] z-10 flex flex-col gap-6 py-8 items-center -translate-x-2/4">
          <li className="text-light list-none tracking-wider font-extralight text-lg">
            <a href="#home">home</a>
          </li>
          <li className="text-light list-none tracking-wider font-extralight text-lg">
            <a href="#about">about</a>
          </li>
          <li className="text-light list-none tracking-wider font-extralight text-lg">
            <a href="#contact">contacto</a>
          </li>
          <li className="text-light list-none tracking-wider font-extralight text-lg">
            <a href="#">asdasd</a>
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
