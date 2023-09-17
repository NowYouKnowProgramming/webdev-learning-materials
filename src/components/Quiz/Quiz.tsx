import { useState } from 'react';
import { AnswerButton } from './AnswerButton';
import questionsJson from './questions/webdev.json';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = (questionsJson as unknown) as Question[];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const currentQ = questions[currentQuestion];

  const handleAnswerOptionClick = (answer: string) => {
    if (!currentQ) {
      console.error('Invalid question data.');
      return;
    }

    if (answer === currentQ.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      return; 
    }
    
    setCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className='w-full max-w-7xl px-8 m-auto py-8 container p-4'>
      {completed ? (
        <div className='completed-section p-2 rounded-lg question-section bg-gradient-to-r from-grad-start/30 from-grad-start/10 to-grad-end/10 p-4 rounded relative'>
          <h2 className='p-5 font-[600] text-2xl'>Quiz Completed!</h2>
          <p className='py-2 pl-5 text-theme-muted'>Your Score: <span className='font-[600]'>{score}</span></p>
          <p className='py-2 pl-5 text-theme-muted'>Total Questions: {questions.length}</p>
          <div className='w-fit ml-auto'>
            <AnswerButton
              gradient={
                ' bg-gradient-to-l from-grad-start/90 from-grad-start/10  to-grad-end/60  '
              }
              onClick={resetQuiz}
            >
              Reset
            </AnswerButton>
          </div>
        </div>
      ) : (
        <>
          <div className='p-2 rounded-lg question-section bg-gradient-to-r from-grad-start/30 from-grad-start/10 to-grad-end/10 p-4 rounded relative'>
            <div className='question-count text-sm gradient-text font-semibold'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text text-xl mt-4'>
            {currentQ?.question}
            </div>

            <div className='absolute top-0 right-0 bg-gradient-to-r from-grad-start/80 to-grad-end/90 text-white p-2 rounded'>
              Score: {score}
            </div>
          </div>
          <div className='flex-col justify-center	lg:flex-row answer-section flex mt-6 '>
            {currentQ?.options.map((option, index) => (
              <AnswerButton
                key={index}
                gradient={' bg-gradient-to-r from-grad-start to-grad-end '}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </AnswerButton>
            ))}
          </div>
          <div className='w-fit ml-auto'>
            <AnswerButton
              gradient={
                ' bg-gradient-to-l from-grad-start/90 from-grad-start/10  to-grad-end/60  '
              }
              onClick={resetQuiz}
            >
              Reset
            </AnswerButton>
          </div>
        </>
      )}
    </div>
  );
}
