import React from "react";
import "./welcome.css";

export const Welcome = () => {
  return (
    <section className="content-welcome animate__animated animate__fadeInUp">
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="49px"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <g fill="#b4c5d5">
            <path
              d="M1280 3.4C1050.59 18 1019.4 84.89 734.42 84.89c-320 0-320-84.3-640-84.3C59.4.59 28.2 1.6 0 3.4V140h1280z"
              fillOpacity=".3"
            ></path>
            <path
              d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V140H0z"
              fillOpacity=".5"
            ></path>
            <path d="M1280 51.76c-201 12.49-242.43 53.4-513.58 53.4-320 0-320-57-640-57-48.85.01-90.21 1.35-126.42 3.6V140h1280z"></path>
          </g>
        </svg>
        <aside className="title">
          <h1 className="animate__animated animate__fadeInUp">Mr/ Mrs/ Ms</h1>
          <h1 className="animate__animated animate__fadeInUp">
            Family and Friends
          </h1>
        </aside>
        <aside className="text">
          <p className="animate__animated animate__fadeInUp">
            We are pleased to announce and invite you to our wedding. We
            sincerely hope that you will be able to attend and pray directly on
            our wedding day. Your presence will mean a lot to us.
          </p>
        </aside>
      </footer>
    </section>
  );
};
