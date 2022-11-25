/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import Card from "../Card/Card";
import "./CardsLibrary.css";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";

function CardsLibrary({ choose, choosedBackground, selected }) {
  const backgroundsArr = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="cards-library">
      {backgroundsArr.map((background, index) => {
        return (
          <div
            className={
              choosedBackground === background
                ? "chosed-background"
                : "not-chosed"
            }
            onClick={() => choose(background)}
          >
            {" "}
            <Card
              key={index}
              id={index + 1}
              background={background}
              selected={selected}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardsLibrary;
