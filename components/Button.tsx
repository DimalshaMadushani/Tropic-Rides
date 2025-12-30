import Link from "next/link";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  target,
  rel,
}: PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}>) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50";
  const styles: Record<Variant, string> = {
    primary:
      "bg-ocean-600 text-white shadow-soft hover:bg-ocean-700 active:translate-y-[1px]",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 shadow-soft hover:bg-sand-100 active:translate-y-[1px]",
    ghost:
      "bg-transparent text-slate-900 hover:bg-sand-100 ring-1 ring-transparent hover:ring-slate-200",
  };

  const cn = clsx(base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={cn} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
