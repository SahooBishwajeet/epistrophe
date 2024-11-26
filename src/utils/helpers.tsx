export const numberToPercent = (percentage: number) => {
  return `${percentage.toFixed(0)}%`;
};

export const countErrors = (actual: string, expected: string) => {
  const expectedChars = expected.split("");

  return expectedChars.reduce((errors, expectedChar, index) => {
    const actualChar = actual[index];

    if (actualChar !== expectedChar) {
      errors++;
    }

    return errors;
  }, 0);
};

export const calculateAccuracy = (total: number, errors: number) => {
  if (total === 0) return 0;

  return ((total - errors) / total) * 100;
};

const isTypingAllowed = (key: string) => {
  return (
    key.startsWith("Key") ||
    key.startsWith("Digit") ||
    key === "Space" ||
    key === "Backspace"
  );
};
