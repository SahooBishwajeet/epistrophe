import { useState } from "react";
import useCountDown from "./useCountDown";
import useTypings from "./useTypings";
import useWords from "./useWords";

export type State = "start" | "running" | "finished";

const NUM_WORDS = 10;
const COUNTDOWN = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUM_WORDS);
  const { timeLeft, startCountDown, resetCountDown } = useCountDown(COUNTDOWN);

  const { cursor, typed, typedTotal, clearTyped, resetTotalTyped } = useTypings(state !== "finished");

  return { state, words, timeLeft, typed };
};

export default useEngine;
