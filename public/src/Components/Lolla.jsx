import React, { useEffect, useState } from "react";
import "../Css/styles.css";
import Navbar from "./Navbar";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countDownDate, setCountDownDate] = useState(0);
  const [location, setLocation] = useState("Ar");

  const lollaAr = new Date("Mar 15, 2024 00:00:00").getTime();
  const lollaCl = new Date("Mar 17, 2024 00:00:01").getTime();
  const lollaBr = new Date("Mar 22, 2024 00:00:01").getTime();

  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(x);
        showModal();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [countDownDate]);

  const handleLocationChange = (
    lollaDate,
    locationName,
    backgroundUrl,
    link
  ) => {
    setCountDownDate(lollaDate);
    setLocation(locationName);
    document.body.style.backgroundImage = `url(${backgroundUrl})`;
    document.getElementById("infoBtn").href = link;
  };

  const showModal = () => {
    const productModal = document.getElementById("productModal");
    productModal.style.display = "block";
    productModal.classList.add("slide-in-bottom");
  };

  const closeModal = () => {
    const productModal = document.getElementById("productModal");
    productModal.style.display = "none";
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="countDown">
          <div className="timer" id="dias">
            {days}
          </div>
          <span>D</span>
          <div className="timer" id="horas">
            {hours}
          </div>
          <span>Hs</span>
          <div className="timer" id="minutos">
            {minutes}
          </div>
          <span>M</span>
          <div className="timer" id="segundos">
            {seconds}
          </div>
          <span>S</span>
        </section>
        <div className="button">
          <a
            id="infoBtn"
            target="_blank"
            href="https://www.lollapaloozaar.com/information"
          >
            <button>Toda la info</button>
          </a>
          {/* Select different lolla paloozas and trigger JS <button></button> */}
        </div>
      </main>

      {/* MODAL PARA LOS PRODUCTOS */}
      <div id="productModal" className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content-product">
            <h3 id="errorMessage">El Lollapalooza ya pasó!</h3>
          </div>
          <a
            className="modalButton"
            href="https://mpago.la/1LpUKMU"
            target="_blank"
          >
            Apoya mis futuros proyectos!
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
