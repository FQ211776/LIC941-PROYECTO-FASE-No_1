import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] hover:scale-125 transition duration-500 outline-none ${styles}`}
  >
    ¡Descarga la App de PokemonBank ya!
  </button>
);

export default Button;
