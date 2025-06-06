import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  spread?: number;
  glow?: boolean;
  proximity?: number;
  borderWidth?: number;
}

export const GlowingCard = ({ 
  children, 
  className, 
  spread = 40, 
  glow = true, 
  proximity = 64, 
  borderWidth = 2 
}: GlowingCardProps) => {
  return (
    <div className={cn("relative rounded-xl border border-white/10", className)}>
      <GlowingEffect
        spread={spread}
        glow={glow}
        disabled={false}
        proximity={proximity}
        inactiveZone={0.01}
        borderWidth={borderWidth}
      />
      <div className="relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
        {children}
      </div>
    </div>
  );
};