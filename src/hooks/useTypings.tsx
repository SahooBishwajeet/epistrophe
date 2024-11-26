import { useCallback, useEffect, useRef, useState } from "react";

const isTypingAllowed = (key: string) => {
  return (
    key.startsWith("Key") ||
    key.startsWith("Digit") ||
    key === "Space" ||
    key === "Backspace"
  );
};

const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState<string>("");
  const typedTotal = useRef(0);

  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isTypingAllowed(code)) {
        return;
      }

      if (code === "Backspace") {
        setTyped((prevTyped) => prevTyped.slice(0, -1));
        setCursor(cursor - 1);
        typedTotal.current -= 1;
        return;
      } else {
        setTyped((prevTyped) => prevTyped + key);
        setCursor(cursor + 1);
        typedTotal.current += 1;
      }
    },
    [cursor, enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    typedTotal.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return {
    cursor,
    typed,
    typedTotal: typedTotal.current,
    clearTyped,
    resetTotalTyped,
  };
};

export default useTypings;
