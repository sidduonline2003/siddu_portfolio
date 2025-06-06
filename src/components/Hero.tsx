
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Building AI Solutions",
    "Full-Stack Development", 
    "Machine Learning Innovation",
    "Cloud Computing Expert"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Dark gradient background with floating particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          {/* 3D Floating Badge */}
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-3">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Class of 2025 Graduate
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight transform hover:scale-105 transition-transform duration-500">
            Kasarla <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sai Siddu</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 font-light">
            AI & Software Engineer
          </h2>
          
          <div className="text-2xl md:text-3xl text-blue-400 mb-12 h-8">
            <span className="font-mono">{currentText}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate final-year BTech student graduating in 2025, specializing in AI, machine learning, and full-stack development. 
            Building innovative solutions that bridge the gap between cutting-edge technology and real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
