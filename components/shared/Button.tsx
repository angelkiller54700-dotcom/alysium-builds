import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
};

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = false,
  className,
  external = false,
  icon,
}: ButtonProps) {
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  }[variant];

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(styles, className)} {...externalProps}>
      {icon}
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
