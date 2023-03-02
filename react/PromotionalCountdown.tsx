import React, { useEffect, useState, cloneElement, ReactElement } from "react";
import { useCssHandles } from "vtex.css-handles";
import { ShowCounter } from "./components/ShowCounter";
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

  const slides = children as ReactElement[];

  useEffect(() => {
    console.log("isActive: ", isActive, children, slides, date);
  }, [children, isActive, slides, date]);

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
      {isActive && (
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
            {slides.map((child, index) => {
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
