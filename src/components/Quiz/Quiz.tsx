import React, { useState } from "react";

import AnswerButton from './AnswerButton'
import questions from './questions/webdev.json'
import ScoreModal from './ScoreModal'; 

interface Question {
  question: string;
  options: string[];
  answer: string;
}


export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAnswerOptionClick = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1); // Here's the change
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowModal(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowModal(false);
  };


  return (
    <div className="container mx-auto p-4">
    
      <div className="question-section bg-purple-900 p-4 rounded relative"> 
      {showModal && <ScoreModal score={score} totalQuestions={questions.length} onClose={() => setShowModal(false)} />}
        <div className="question-count text-sm gradient-text font-semibold">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text text-xl mt-4">
          {questions[currentQuestion].question}
        </div>
        {/* User's score in the top-right corner */}
        <div className="absolute top-0 right-0 bg-violet-500 text-white p-2 rounded">
          Score: {score}
        </div>
      </div>
      <div className="flex-col justify-center	lg:flex-row answer-section flex mt-6 ">
        {questions[currentQuestion].options.map((option, index) => (
          <AnswerButton
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
          >
            {option}
          </AnswerButton>
        ))}
      </div>
      <div className="w-fit ml-auto">
        <AnswerButton 
          onClick={resetQuiz}>
          Reset
        </AnswerButton>
      </div>
    </div>
  );
}