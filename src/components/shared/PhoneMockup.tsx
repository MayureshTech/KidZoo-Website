"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function PhoneMockup({
  src,
  alt,
  className,
  width = 260,
  height = 530,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "phone-mockup relative mx-auto animate-float",
        className
      )}
      style={{ width, height }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 260px, 320px"
        />
      </div>
    </div>
  );
}
