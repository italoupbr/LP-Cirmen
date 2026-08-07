import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import arrowWhite from "../../assets/icons/icon-arrow-white.svg";
import arrowBrown from "../../assets/icons/icon-arrow-brown.svg";
import arrowWhite2 from "../../assets/icons/icon-arrow-white-2.svg";

type Variant = "gradient" | "outline-brown" | "outline-white";

const VARIANT_CLASSES: Record<Variant, string> = {
  gradient:
    "bg-gradient-to-r from-terracotta-dark to-terracotta-light text-white shadow-btn hover:brightness-105",
  "outline-brown": "border border-brown bg-white text-brown hover:bg-brown/5",
  "outline-white": "border border-white bg-transparent text-white hover:bg-white/10",
};

const VARIANT_ICON: Record<Variant, string> = {
  gradient: arrowWhite,
  "outline-brown": arrowBrown,
  "outline-white": arrowWhite2,
};

type CommonProps = {
  variant: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonAsButton | ButtonAsAnchor;

export default function Button({ variant, className = "", children, ...rest }: Props) {
  const classes = `group inline-flex h-[35px] items-center gap-2 rounded-full pl-[3px] pr-6 font-body text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-px active:translate-y-0 active:duration-100 ${VARIANT_CLASSES[variant]} ${className}`;

  const content = (
    <>
      <span className="flex size-[29px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-[-8deg]">
        <img src={VARIANT_ICON[variant]} alt="" className="size-[29px] -rotate-90" />
      </span>
      <span>{children}</span>
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
