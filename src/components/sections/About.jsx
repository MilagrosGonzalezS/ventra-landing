// import React from 'react'
import phone from "/src/assets/imgs/phone-qr.png";
import {
  faBinoculars,
  faGem,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center min-w-screen"
    >
      <article className="flex  items-center gap-20">
        <img className="w-1/3" src={phone} alt="dibujo 3D de un telefono" />
        <p className="text-sm">
          Presentamos <span className="text-pink">Ventra</span>, una aplicación
          que transformará la manera en que planificás y disfrutás tus eventos.
          Una herramienta para la creación de experiencias únicas, ya sea para
          una reunión íntima entre amigos o un evento público emocionante. Desde
          la organización hasta la comunicación, te ofrece todo lo que necesitás
          para hacer de tu evento un éxito memorable. Ventra tiene como objetivo
          que, aquel que tenga
          <span className="text-pink"> la iniciativa de crear un evento</span>,
          tenga todo a su disposición para crearlo, durante absolutamente todo
          el proceso desde la preproducción y hasta el post evento.
        </p>
      </article>

      <div className="flex gap-6 justify-center mt-5">
        <div class="cardBlur w-[250px] flex flex-col items-center h-[250px] p-3 rounded-3xl justify-center">
          <FontAwesomeIcon icon={faHeart} className="text-[40px] mb-4" />
          <h2 className="text-lg text-center font-accent mt-1 text-green font-semibold">
            MISIÓN
          </h2>
          <p className="text-xs text-center p-2 text-light">
            Facilitar la organización de eventos y mejorar la experiencia de
            compra en actividades culturales.
          </p>
        </div>
        <div class="cardBlur w-[250px] flex flex-col items-center h-[250px] p-3 rounded-3xl justify-center">
          <FontAwesomeIcon icon={faBinoculars} className="text-[40px] mb-4" />
          <h2 className="text-lg text-center font-accent mt-1 text-orange font-semibold">
            VISIÓN
          </h2>
          <p className="text-xs text-center p-2 text-light">
            Ser la elección principal para comprar entradas o crear eventos, sin
            importar su tamaño y complejidad.
          </p>
        </div>
        <div class="cardBlur w-[250px] flex flex-col items-center h-[250px] p-3 rounded-3xl justify-center">
          <FontAwesomeIcon icon={faGem} className="text-[40px] mb-4" />
          <h2 className="text-lg text-center font-accent mt-1 text-pink font-semibold">
            VALOR
          </h2>
          <p className="text-xs text-center p-2 text-light">
            Proporcionar herramientas intuitivas para planificar eventos de
            cualquier tamaño y gestionar invitaciones.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
