import cn from 'classnames';
import CaretAnim from "./CaretAnim";

const Typing = ({
  userInput,
  words,
  className = "",
}: {
  userInput: string,
  words: string,
  className?: string
  }) => {

  const typedChars = userInput.split("");

  return (
    <div className={className}>
      {typedChars.map((char, index) => {
        return <Character key={`${char}_${index}`} actual={char} expected={words[index]} />
      })}
    <CaretAnim />
    </div>
  )
};

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
  const isCorrect = actual === expected;
  const isSpace = expected === " ";

  return <span className={
    cn({
      "text-red-400": !isCorrect && !isSpace,
      "text-amber-400": isCorrect && !isSpace,
      "text-red-400/50": !isCorrect && isSpace,
    })
  }>
    {expected}
  </span>
};


export default Typing;
