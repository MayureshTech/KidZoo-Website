"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-medium tracking-widest uppercase",
            dark ? "text-pink-light" : "text-pink-primary"
          )}
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight tracking-tight",
          dark ? "text-white" : "text-gray-900"
        )}
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            dark ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
