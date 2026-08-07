import type { ReactNode } from "react";
import Tag from "./Tag";

type Props = {
  tag: string;
  heading: ReactNode;
  subheading?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  headingColor?: string;
  className?: string;
};

export default function SectionHeading({
  tag,
  heading,
  subheading,
  align = "left",
  tone = "dark",
  headingColor,
  className = "",
}: Props) {
  const alignClasses = align === "center" ? "items-center text-center" : "items-start text-left";
  const defaultHeadingColor = tone === "dark" ? "text-black" : "text-white";
  const subColor = tone === "dark" ? "text-black/40" : "text-white/40";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses} ${className}`}>
      <Tag tone={tone === "dark" ? "brown" : "salmon"}>{tag}</Tag>
      <h2
        className={`max-w-2xl font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.04em] sm:text-[32px] lg:text-[36px] ${headingColor ?? defaultHeadingColor}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className={`max-w-xl font-body text-base leading-relaxed ${subColor}`}>{subheading}</p>
      )}
    </div>
  );
}
