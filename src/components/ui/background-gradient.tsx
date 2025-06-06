import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  className,
  children,
  containerClassName,
  animate = true,
}: {
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
          animate && "animate-gradient-xy group-hover:animate-gradient-xy-fast",
          className
        )}
      />
      <div className="relative bg-slate-900/90 rounded-[calc(1.5rem-4px)] p-4">
        {children}
      </div>
    </div>
  );
};