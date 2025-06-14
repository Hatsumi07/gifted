import clsx from 'clsx';
import { lato, raleway } from '@/app/ui/fonts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `${lato.className} flex h-10 items-center justify-center rounded-lg bg-[#4fc3f7] border-solid border-1 border-[#39a4d4] shadow-[0_2px_0_0_#39a4d4] px-4 text-sm font-medium transition-colors hover:bg-[#4fc3f7]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[#4fc3f7] aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        className,
      )}
    >
      {children}
    </button>
  );
}
