import React, { useEffect, useState, cloneElement, ReactElement } from "react";
import { useCssHandles } from "vtex.css-handles";
import { ShowCounter } from "./components/ShowCounter";
import { useCountdown } from "./hooks/useCountdown.jsx";
import "./typings/storefront";

const CSS_HANDLES = [
  "containerAll",
  "containerAllProduct",
  "containerCountdown",
  "titleCountdown",
  "titleCountdownOne",
  "titleCountdownTwo",
  "titleCountdownStrong",
  "containerTimer",
];

const PromotionalCountdown = ({
  isActive,
  children,
  date,
}: PromotionalCountdown) => {
  const handles = useCssHandles(CSS_HANDLES);
  const productCard = children as ReactElement[];
  const [days, hours, minutes, seconds] = useCountdown(date);
  const countdown = days + hours + minutes + seconds <= 0 ? false : true;

  useEffect(() => {
    console.log("isActive: ", isActive, children, productCard, date);
  }, [children, isActive, productCard, date]);

  /*const renderStrong = (text: string) => {
    for (let index = 0; index < text.length; index++) {
      console.log("renderStrong index", text[index])
      if( text[index].indexOf("*") != -1){
        console.log("index sisi", text[index].indexOf("*"))
      }

    }
    console.log("renderStrong", text.split('*'))
  }*/

  return (
    <>
      {isActive && countdown && (
        <div className={handles.containerAll}>
          <div className={handles.containerCountdown}>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
            >
              SOLO<strong className={handles.titleCountdownStrong}>X</strong>
              48HRS
            </h3>
            <ShowCounter targetDate={date} handle={handles} />
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownTwo}`}
            >
              IMPERDIBLE
              <strong className={handles.titleCountdownStrong}>!</strong>
            </h3>
          </div>
          <div className={handles.containerAllProduct}>
            {productCard.map((child, index) => {
              return child;
            })}
          </div>
        </div>
      )}
    </>
  );
};

PromotionalCountdown.schema = {
  title: "Promotional Countdown",
  description: "Promotional Countdown props",
  type: "object",
  properties: {
    isActive: {
      title: "Activar Contador",
      type: "boolean",
    },
    date: {
      title: "Fecha de stop",
      description: "ejemplo: 2023-02-24T20:29",
      type: "string",
    },
  },
};

export default PromotionalCountdown;
