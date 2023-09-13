import React, { ReactNode } from 'react';

interface AnswerButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function AnswerButton({ children, onClick }: AnswerButtonProps) {
  return (
    <div className="m-5 relative group" onClick={onClick}>
      <div className="bg-gradient-to-r to-grad-start from-grad-end absolute left-0 top-0 w-full h-full group-hover:opacity-50 motion-safe:transition-opacity opacity-0 scale-y-125 scale-x-110 pointer-events-none rounded-md duration-700 motion-reduce:duration-0 saturate-200 brightness-125 blur"></div>
      <a className="transition ease-out group relative block bg-gradient-to-r from-grad-start to-grad-end rounded-md font-bold motion-safe:hover:scale-10">
        <span className="rounded-md py-3 px-8 text-center group-hover:bg-white ease-out block motion-safe:transition text-white group-hover:text-black">
          {children}
        </span>
      </a>
    </div>
  );
}
