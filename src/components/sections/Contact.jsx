// import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center min-w-screen"
    >
      <h2 className="text-2xl font-accent">Contacto</h2>
      <form>
        <label className="text-xs font-semibold">NOMBRE</label>
        <input
          id="name"
          name=""
          className="bg-transparent p-2 border-b-2 border-b-green w-full font-semibold mb-6"
        />
        <label className="text-xs font-semibold">EMAIL</label>
        <input className="bg-transparent p-2 border-b-2 border-b-green w-full font-semibold mb-6" />
        <label className="text-xs font-semibold">MENSAJE</label>
        <textarea className="bg-transparent p-2 border-b-2 border-b-green w-full font-semibold mb-6" />
        <input
          className="transition block mx-auto mt-4 bg-pink rounded-md text-white py-2 px-10 text-xs cursor-pointer"
          type="submit"
          value="CONTACTANOS"
        />
      </form>
    </section>
  );
}

export default Contact;
