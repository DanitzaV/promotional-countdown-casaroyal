import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = [
  "containerTimer",
  "dateTime",
  "containerDays",
  "containerHours",
  "containerMinutes",
  "containerSeconds",
  "time",
  "typeofTime",
];

export const ShowCounter = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const handles = useCssHandles(CSS_HANDLES);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return targetDate != undefined ? (
      <div className={handles.containerTimer}>
        {/*

        <DateTimeDisplay
          value={days}
          type={"Dias"}
          className={handles.containerDays}
        /> */}
        <DateTimeDisplay
          value={hours}
          type={"Horas"}
          className={handles.containerHours}
        />
        <DateTimeDisplay
          value={minutes}
          type={"Minutos"}
          className={handles.containerMinutes}
        />
        <DateTimeDisplay
          value={seconds}
          type={"Segundos"}
          className={handles.containerSeconds}
        />
      </div>
    ) : (
      <></>
    );
  }
};

const DateTimeDisplay = ({ value, type, className }) => {
  const handles = useCssHandles(CSS_HANDLES);
  return (
    <div className={className}>
      <p className={handles.time}>{value}</p>
      <span className={handles.typeofTime}>{type}</span>
    </div>
  );
};
