import { useState, useEffect } from "react";

const Timer = ({ duration, style }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={style}>
      {timeLeft > 0 ? <>{timeLeft / 1000} segundos</> : <>¡Tiempo agotado!</>}
    </div>
  );
};
export default Timer;
