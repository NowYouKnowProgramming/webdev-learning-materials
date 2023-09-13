import React from "react";

interface ScoreModalProps {
  score: number;
  totalQuestions: number;
  onClose: () => void;
}

const ScoreModal: React.FC<ScoreModalProps> = ({
  score,
  totalQuestions,
  onClose,
}) => {
  return (
    <dialog className="border-solid	border-2 border-violet-900  rounded-2xl	bg-gradient-to-r to-grad-start from-grad-end  bg-theme-base p-10 fixed inset-0 flex justify-center z-20">
      <div className="">
        <button
          onClick={onClose}
          className=" text-white p-2 rounded text-3xl absolute top-0 right-0 m-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 64 64"
          >
            <path
              d="m16 13a1 1 0 0 0-3 3l16 16-16 16a1 1 0 0 0 3 3l16-16 16 16a1 1 0 0 0 3-3l-16-16 16-16a1 1 0 0 0-3-3l-16 16z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-white font-semibold">Quiz Completed!</h2>
        </div>
        <div className="mt-4">
          <p className="text-lg text-white">Your Score: {score}</p>
          <p className="text-lg text-white">
            Total Questions: {totalQuestions}
          </p>
        </div>
        <div className="mt-4 flex justify-end"></div>
      </div>
    </dialog>
  );
};

export default ScoreModal;
