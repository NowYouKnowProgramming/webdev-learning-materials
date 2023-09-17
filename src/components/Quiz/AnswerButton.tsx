import type { ReactNode } from 'react';

interface AnswerButtonProps {
  children: ReactNode;
  onClick: () => void;
  gradient: string;
}

export const AnswerButton = ({
  children,
  onClick,
  gradient,
}: AnswerButtonProps) => {
  return (
    <button className='m-5 relative group' onClick={onClick}>
      <div className='absolute left-0 top-0 w-full h-full group-hover:opacity-50 motion-safe:transition-opacity opacity-0 scale-y-125 scale-x-110 pointer-events-none rounded-md duration-700 motion-reduce:duration-0 saturate-200 brightness-125 blur'></div>
      <div
        className={` group relative block  ${gradient}  rounded-md font-bold motion-safe:hover:scale-10`}
      >
        <span className='rounded-md py-3 px-8 text-center group-hover:bg-gradient-to-br  ease-out block motion-safe:transition text-white group-hover:text-black'>
          {children}
        </span>
      </div>
    </button>
  );
};
