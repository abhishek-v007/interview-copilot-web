import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-white",
} as const;

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
}

export function Button({ href, children, variant = "primary", className, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
