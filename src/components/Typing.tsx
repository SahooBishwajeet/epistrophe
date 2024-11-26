import CaretAnim from "./CaretAnim";

const Typing = ({
  userInput,
  className,
}: {
  userInput: string,
  className?: string
  }) => {

  const typedChars = userInput.split("");

  return (
    <div className={className}>
      {typedChars.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />
      })}
    <CaretAnim />
    </div>
  )
};

const Character = ({ char }: { char: string }) => {
  return <span className="text-amber-400">{char}</span>
};


export default Typing;
