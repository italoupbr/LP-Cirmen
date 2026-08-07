import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "salmon" | "brown";
  className?: string;
};

export default function Tag({ children, tone = "brown", className = "" }: Props) {
  const color = tone === "salmon" ? "text-salmon" : "text-brown";

  return (
    <p className={`font-body text-xs font-black tracking-[8.88px] uppercase ${color} ${className}`}>
      {children}
    </p>
  );
}
