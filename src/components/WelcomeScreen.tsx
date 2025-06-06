import { useState, useEffect } from "react";
import { Component as VapourTextEffect } from "@/components/ui/vapour-text-effect";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    // Auto-complete after 8 seconds
    const autoCompleteTimer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(autoCompleteTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Vapour Text Effect */}
      <div className="w-full h-full">
        <VapourTextEffect />
      </div>

      {/* Skip Button */}
      {showSkip && (
        <button
          onClick={handleSkip}
          className="fixed bottom-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium animate-fade-in"
        >
          Skip
        </button>
      )}

      {/* Subtle loading indicator */}
      <div className="fixed bottom-8 left-8 flex items-center gap-2 text-white/60 text-sm animate-fade-in">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        Loading experience...
      </div>
    </div>
  );
};

export default WelcomeScreen;