"use client";

import { cn } from "@/lib/utils";

interface AppIconProps {
  name: string;
  color: string;
  lightColor: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AppIcon({
  name,
  color,
  lightColor,
  size = "md",
  className,
}: AppIconProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white",
        sizeClasses[size],
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${lightColor} 200%)`,
        fontFamily: "var(--font-plus-jakarta)",
      }}
    >
      {initial}
    </div>
  );
}
