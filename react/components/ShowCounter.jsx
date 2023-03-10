import React, { useContext } from "react";
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

export const ShowCounter = ({ startDate, startTime, endDate, endTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(
    startDate,
    startTime,
    endDate,
    endTime
  );

  const handles = useCssHandles(CSS_HANDLES);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return startDate != undefined ? (
      <div className={handles.containerTimer}>
        <DateTimeDisplay
          value={days}
          type={"Dias"}
          className={handles.containerDays}
        />
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
