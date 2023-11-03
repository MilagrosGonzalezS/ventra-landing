// import React from 'react'
import qr from "/src/assets/imgs/qr!.png";
import logo from "/src/assets/imgs/logo-blanco.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[90vh] mt-[10vh] flex justify-evenly items-center"
    >
      <div>
        <h2 className="font-accent text-6xl mb-10 leading-loose">Descubre</h2>
        <h1>
          <img src={logo}></img>
        </h1>
        <p className="text-xl mt-8">Tu destino para eventos y entradas</p>
      </div>

      <div className="w-96 mb-10">
        <img className="w-full" src={qr}></img>
      </div>
    </section>
  );
}

export default Home;
