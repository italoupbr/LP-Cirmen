import type { ElementType, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`motion-reduce:!translate-y-0 motion-reduce:!opacity-100 transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
