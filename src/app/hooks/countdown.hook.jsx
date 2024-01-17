import React from 'react';

const useCountdownHook = (input) => {
  const [date, setDate] = React.useState(null);

  const countdown = (interval) => {
    const countDownDate = new Date(input).getTime();

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const twoDigitDays = days < 10
      ? `0${days}`
      : days;
    const twoDigitHours = hours < 10
      ? `0${hours}`
      : hours;
    const twoDigitMinutes = minutes < 10
      ? `0${minutes}`
      : minutes;
    const twoDigitSeconds = seconds < 10
      ? `0${seconds}`
      : seconds;

    setDate(`${twoDigitDays}:${twoDigitHours}:${twoDigitMinutes}:${twoDigitSeconds}`);

    if (distance < 0) {
      clearInterval(interval);
      setDate('done');
      console.log('Launch!')
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      countdown(interval);
    }, 1000);

    countdown(interval);

    return () => clearInterval(interval);
  }, []);

  return {
    date,
  }
};

export default useCountdownHook;
