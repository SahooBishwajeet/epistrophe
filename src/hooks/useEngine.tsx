import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utils/helpers";
import useCountDown from "./useCountDown";
import useTypings from "./useTypings";
import useWords from "./useWords";

export type State = "start" | "running" | "finished";

const NUM_WORDS = 15;
const COUNTDOWN = 20;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUM_WORDS);
  const { timeLeft, startCountDown, resetCountDown } = useCountDown(COUNTDOWN);

  const { cursor, typed, typedTotal, clearTyped, resetTotalTyped } = useTypings(state !== "finished");

  const [errors, setErrors] = useState(0);

  const isStart = state === "start" && cursor > 0;
  const isComplete = cursor === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(words.length, cursor));
    setErrors((prevErrors) => prevErrors + countErrors(wordsReached, typed));
  }, [cursor, typed, words]);

  useEffect(() => {
    if (isStart) {
      setState("running");
      startCountDown();
    }
  }, [isStart, startCountDown]);

  useEffect(() => {
    if (!timeLeft && state === "running") {
      setState("finished");
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);

  useEffect(() => {
    if (isComplete) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [cursor, isComplete, updateWords, sumErrors]);

  const restart = useCallback(() => {
    resetCountDown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, resetTotalTyped, resetCountDown, updateWords]);

  return { state, words, timeLeft, typed, restart, errors, typedTotal };
};

export default useEngine;
