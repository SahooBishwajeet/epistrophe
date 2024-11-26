import GeneratedWords from './components/GeneratedWords';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import Typing from './components/Typing';
import useEngine from './hooks/useEngine';
import { calculateAccuracy } from './utils/helpers';

function App() {
  const { state, words, timeLeft, typed, restart, errors, typedTotal, wpm } = useEngine();

  return (
    <>

      <CountDownWPMContainer>
        <CountDownTimer seconds={timeLeft} />
        <WPM wpm={wpm} />
      </CountDownWPMContainer>

      <WordsConatiner>
        <GeneratedWords words={words} />
        <Typing words={words} userInput={typed} className={"absolute inset-0"} />
      </WordsConatiner>

      <RestartButton onRestart={restart} className={"mx-auto mt-10 text-slate-500"} />

      <Results state={state} errors={errors} accuracyPercent={calculateAccuracy(typedTotal, errors)} total={typedTotal} className={"mx-auto mt-10"} />

    </>
  );
}

const WordsConatiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative max-w-2xl mt-3 text-3xl leading-relaxed break-all'>
      {children}
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

const WPM = ({ wpm }: { wpm: number }) => {
  return (
    <h2 className='font-medium text-amber-400'>
      WPM: {wpm}
    </h2>
  )
}

const CountDownWPMContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      {children}
    </div>
  )
}

export default App
