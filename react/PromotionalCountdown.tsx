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
  startDate,
  startTime,
  endDate,
  endTime,
  horas,
}: PromotionalCountdown) => {
  const handles = useCssHandles(CSS_HANDLES);
  const productCard = children as ReactElement[];
  const [days, hours, minutes, seconds] = useCountdown(
    startDate,
    startTime,
    endDate,
    endTime
  );
  const countdown = days + hours + minutes + seconds <= 0 ? false : true;

  useEffect(() => {}, [children, isActive, productCard, hours, minutes]);

  return (
    <>
      {isActive && countdown && (
        <div className={handles.containerAll}>
          <div className={handles.containerCountdown}>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
            >
              SOLO<strong className={handles.titleCountdownStrong}>X</strong>
              {horas}
            </h3>
            <ShowCounter
              startDate={startDate}
              startTime={startTime}
              endDate={endDate}
              endTime={endTime}
              handle={handles}
            />
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
    startDate: {
      title: "Fecha de Inicio",
      description: "ejemplo: 2023-02-24",
      type: "string",
    },
    startTime: {
      title: "Hora de Inicio",
      description: "ejemplo: 20:29",
      type: "string",
    },
    endDate: {
      title: "Fecha de Termino",
      description: "ejemplo: 2023-02-24",
      type: "string",
    },
    endTime: {
      title: "Hora de Termino",
      description: "ejemplo: 20:29",
      type: "string",
    },
    horas: {
      title: "Duracion de Promocion",
      description: "Ejemplo: 48HRS",
      type: "string",
    },
  },
};

export default PromotionalCountdown;
