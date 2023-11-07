// import React from "react";
import ventra from "/src/assets/imgs/logo-blanco.png";
import instagram from "/src/assets/imgs/logo-ig.png";
function Footer() {
  return (
    <footer className="py-8 flex justify-center items-center bg-dark">
      <div className="flex">
        <div>
          <img className="w-1/4" src={ventra} alt="logo de ventra" />
          <strong className="font-extralight text-sm">
            Tu destino para eventos y entradas
          </strong>
        </div>

        <div className="flex items-center gap-x-3">
          <img className="w-1/6" src={instagram} alt="logo de ventra" />
          <p>ventra.ar</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
