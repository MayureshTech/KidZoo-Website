"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AppIconProps {
  name: string;
  color: string;
  lightColor: string;
  logoPath?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AppIcon({
  name,
  color,
  lightColor,
  logoPath,
  size = "md",
  className,
}: AppIconProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  const imageSizes = {
    sm: 40,
    md: 64,
    lg: 80,
  };

  const initial = name.charAt(0).toUpperCase();

  // If we have a real logo, use it
  if (logoPath) {
    return (
      <div
        className={cn(
          "rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white",
          sizeClasses[size],
          className
        )}
        style={{
          boxShadow: `0 0 0 2px ${lightColor}`,
        }}
      >
        <Image
          src={logoPath}
          alt={`${name} logo`}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="object-contain w-full h-full p-1"
        />
      </div>
    );
  }

  // Fallback to placeholder initials
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white shrink-0",
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
