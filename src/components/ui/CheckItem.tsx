import type { ReactNode } from "react";
import checkboxIcon from "../../assets/icons/icon-checkbox.svg";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function CheckItem({ children, className = "" }: Props) {
  return (
    <li className={`flex items-center gap-2 ${className}`}>
      <img src={checkboxIcon} alt="" className="size-6 shrink-0" />
      <span className="font-body text-base text-black/50">{children}</span>
    </li>
  );
}
