import { useEffect, useState } from 'react';

export const CountDownTimer = ({targetDate}) => {
  const countDownDate = targetDate;

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountDown = countDownDate - new Date().getTime();
      setCountDown(newCountDown > 0 ? newCountDown : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div>
      {hours}:{minutes}:{seconds} left
    </div>
  );
};

