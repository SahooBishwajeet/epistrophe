import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButton';

const words = faker.word.words(10);

function App() {
  return (
    <>
      <CountDownTimer seconds={60} />
      <GeneratedWords words={words} />
      <RestartButton onRestart={() => {}} className={"mx-auto mt-10 text-slate-500"}/>
    </>
  );
}

const GeneratedWords = ({ words }: { words: string[] }) => {
  return (
    <div className='text-4xl text-center text-slate-500'>
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
