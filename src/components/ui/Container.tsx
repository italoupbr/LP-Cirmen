import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-0 ${className}`}>{children}</div>;
}
