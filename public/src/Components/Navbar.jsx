import React from "react";
import "../Css/styles.css";

function Navbar() {
  return (
    <header className="titulo glow">
      <h1 id="titulo-h1">
        Cuánto falta para el Lolla <span id="location">{location}</span> ?
      </h1>
      <ul>
        <li
          onClick={() =>
            handleLocationChange(
              lollaAr,
              "Ar",
              "/src/Css/Background6.jpg",
              "https://www.lollapaloozaar.com"
            )
          }
        >
          🇦🇷
        </li>
        <li
          onClick={() =>
            handleLocationChange(
              lollaBr,
              "Br",
              "/src/Css/background.png",
              "https://www.lollapaloozabr.com"
            )
          }
        >
          🇧🇷
        </li>
        <li
          onClick={() =>
            handleLocationChange(
              lollaCl,
              "Cl",
              "/src/Css/Background3.jpg",
              "https://www.lollapaloozacl.com"
            )
          }
        >
          🇨🇱
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
