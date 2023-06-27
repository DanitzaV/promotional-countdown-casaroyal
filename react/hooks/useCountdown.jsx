import { useEffect, useState, useContext } from "react";

const useCountdown = (startDate, startTime, endDate, endTime) => {
  const countDownStartDate = new Date(`${startDate}T${startTime}`).getTime();

  const countDownEndDate = new Date(`${endDate}T${endTime}`).getTime();
  const [countDown, setCountDown] = useState(
    countDownEndDate - new Date().getTime()
  );
  const [countDownStart, setCountDownStart] = useState(
    countDownStartDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownEndDate - new Date().getTime());
      setCountDownStart(countDownStartDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownEndDate, countDownStartDate]);
  return getReturnValues(countDown, countDownStart);
};

const getReturnValues = (countDown, countDownStart) => {
  // calculate time left

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  if (countDownStart < 0 && countDown < 0) {
    return [0, 0, 0, 0];
  } else if (countDownStart > 0 && countDown > 0) {
    return [0, 0, 0, 0];
  } else {
    return [days, hours, minutes, seconds];
  }
};

export { useCountdown };
