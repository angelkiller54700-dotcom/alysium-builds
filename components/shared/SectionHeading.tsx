import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  icon: LucideIcon;
  eyebrow: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
};

export default function SectionHeading({
  icon: Icon,
  eyebrow,
  viewAllHref,
  viewAllLabel = "View all",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4",
        className
      )}
    >
      <div className="eyebrow">
        <Icon className="h-4 w-4 text-accent-400" />
        {eyebrow}
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="btn-ghost group">
          {viewAllLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
