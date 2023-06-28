import React, { useEffect, useState, cloneElement, ReactElement } from "react";
import { useCssHandles } from "vtex.css-handles";
import { ShowCounter } from "./components/ShowCounter";
import { useCountdown } from "./hooks/useCountdown.jsx";
import { useRuntime } from 'vtex.render-runtime'
import "./typings/storefront";

const CSS_HANDLES = [
  "containerAll",
  "oneProduct",
  "twoProduct",
  "containerAllProduct",
  "containerOverflow",
  "containerImage",
  "containerCountdown",
  "titleCountdown",
  "titleCountdownOne",
  "titleCountdownOneHours",
  "titleCountdownTwo",
  "titleCountdownStrong",
  "containerTimer",
  "solox",
  "imperdible",
  "containerCountdownTwoProduct",
  "containerCountdownNew"
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
  const runtime = useRuntime()
  const countdown = days + hours + minutes + seconds <= 0 ? false : true;

  useEffect(() => { console.log("aaaa", runtime) }, [children, isActive, productCard, hours, minutes, runtime]);

  return (
    <>
      {!runtime?.deviceInfo?.isMobile && isActive && countdown && productCard.length == 1 && (
        <div className={`${handles.containerAll} ${handles.oneProduct}`}>
          <div className={handles.containerCountdown}>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownTwo}`}
            >
              IMPERDIBLE
              <strong className={handles.titleCountdownStrong}></strong>
            </h3>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
            >
              SOLO<strong className={handles.titleCountdownStrong}>X</strong>
            </h3>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne} ${handles.titleCountdownOneHours}`}
            >
              {horas}
            </h3>
          </div>
          <div className={handles.containerAllProduct}>
            <ShowCounter
              startDate={startDate}
              startTime={startTime}
              endDate={endDate}
              endTime={endTime}
              handle={handles}
            />
            {productCard.map((child, index) => {
              return child;
            })}
          </div>
          <div className={handles.containerImage}>
            {productCard.map((child, index) => {
              return child;
            })}
          </div>
        </div>
      )}
      {runtime?.deviceInfo?.isMobile && isActive && countdown && productCard.length == 1 && (
        <div className={`${handles.containerAll} ${handles.oneProduct}`}>
          <div className={handles.containerCountdown}>
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
              <strong className={handles.titleCountdownStrong}></strong>
            </h3>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
            >
              SOLO<strong className={handles.titleCountdownStrong}>X</strong>
            </h3>
            <h3
              className={`${handles.titleCountdown} ${handles.titleCountdownOne} ${handles.titleCountdownOneHours}`}
            >
              {horas}
            </h3>
          </div>
          <div className={handles.containerAllProduct}>
            {productCard.map((child, index) => {
              return child;
            })}
          </div>
        </div>
      )}
      {!runtime?.deviceInfo?.isMobile && isActive && countdown && productCard.length == 2 && (
        <div className={`${handles.containerAll} ${handles.twoProduct}`}>
          <div className={handles.containerCountdown}>
            <span className={handles.solox}>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
              >
                SOLO<strong className={handles.titleCountdownStrong}>X</strong>
              </h3>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne} ${handles.titleCountdownOneHours}`}
              >
                {horas}
              </h3>
            </span>
            <ShowCounter
              startDate={startDate}
              startTime={startTime}
              endDate={endDate}
              endTime={endTime}
              handle={handles}
            />
            <span className={handles.imperdible}>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownTwo}`}
              >
                IMPERDIBLE
                <strong className={handles.titleCountdownStrong}></strong>
              </h3>
            </span>

          </div>
          <div className={handles.containerAllProduct}>

            {productCard.map((child, index) => {
              return child;
            })}
          </div>
        </div>
      )}
      {runtime?.deviceInfo?.isMobile && runtime?.deviceInfo?.type == "tablet" && isActive && countdown && productCard.length == 2 && (
        <div className={`${handles.containerAll} ${handles.twoProduct}`}>
          <div className={handles.containerCountdown}>
            <span className={handles.solox}>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
              >
                SOLO<strong className={handles.titleCountdownStrong}>X</strong>
              </h3>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne} ${handles.titleCountdownOneHours}`}
              >
                {horas}
              </h3>
            </span>
            <ShowCounter
              startDate={startDate}
              startTime={startTime}
              endDate={endDate}
              endTime={endTime}
              handle={handles}
            />
            <span className={handles.imperdible}>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownTwo}`}
              >
                IMPERDIBLE
                <strong className={handles.titleCountdownStrong}></strong>
              </h3>
            </span>

          </div>
          <div className={handles.containerAllProduct}>

            {productCard.map((child, index) => {
              return child;
            })}
          </div>
        </div>
      )}
      {runtime?.deviceInfo?.isMobile && runtime?.deviceInfo?.type != "tablet" && isActive && countdown && productCard.length == 2 && (
        <div className={`${handles.containerAll} ${handles.twoProduct}`}>
          <div className={`${handles.containerCountdown} ${handles.containerCountdownTwoProduct}`}>
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
              <strong className={handles.titleCountdownStrong}></strong>
            </h3>
            <div className={handles.containerCountdownNew}>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne}`}
              >
                SOLO<strong className={handles.titleCountdownStrong}>X</strong>
              </h3>
              <h3
                className={`${handles.titleCountdown} ${handles.titleCountdownOne} ${handles.titleCountdownOneHours}`}
              >
                {horas}
              </h3>
            </div>
          </div>
          <div className={handles.containerOverflow}>
            <div className={handles.containerAllProduct}>

              {productCard.map((child, index) => {
                return child;
              })}
            </div>
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
