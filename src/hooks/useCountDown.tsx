import { useCallback, useEffect, useRef, useState } from 'react';

const useCountDown = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const isEnded = timeLeft <= 0;
  const isRunning = intervalRef.current !== null;

  const startCountDown = useCallback(() => {
    if (!isEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }
  }, [setTimeLeft, isEnded, isRunning]);

  const resetCountDown = useCallback(() => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (isEnded) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
  }, [isEnded]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  return { timeLeft, startCountDown, resetCountDown };
};

export default useCountDown;
