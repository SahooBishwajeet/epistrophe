import { faker } from '@faker-js/faker';
import { useState } from 'react';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import Typing from './components/Typing';

const words = faker.word.words(10);

function App() {
  const [words, setWords] = useState(faker.word.words(10));

  const handleRestart = () => {
    const newWords = faker.word.words(10);
    setWords(newWords);
  }

  return (
    <>
      <CountDownTimer seconds={60} />
      <WordsConatiner>
        <GeneratedWords words={words} />
        <Typing userInput={words} className={"absolute inset-0"} />
      </WordsConatiner>
      <RestartButton onRestart={handleRestart} className={"mx-auto mt-10 text-slate-500"} />
      <Results errors={5} accuracyPercent={90} total={100} className={"mx-auto mt-10"} />
    </>
  );
}

const WordsConatiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative max-w-xl mt-3 text-3xl leading-relaxed break-all'>
      {children}
    </div>
  )
}

const GeneratedWords = ({ words }: { words: string[] }) => {
  return (
    <div className='text-slate-500'>
      {words}
    </div>
  )
}

const CountDownTimer = ({ seconds }: { seconds: number }) => {
  return (
    <h2 className='font-medium text-amber-400'>
      Time Left : {seconds}
    </h2>
  )
}

export default App
