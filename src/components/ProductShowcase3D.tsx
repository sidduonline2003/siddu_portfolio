import { useState, useEffect, useRef } from "react";
import { Brain, Bot, Zap, Target, Lightbulb, Globe, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const ProductShowcase3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      name: "iImage Studio AI",
      description: "AI-powered image generation studio for unique visuals from text or images.",
      icon: <ImageIcon className="w-12 h-12 text-teal-400" />,
      color: "from-teal-400 to-cyan-500",
      status: "Launched",
      progress: 100
    },
    {
      name: "Image Studio.ai",
      description: "Best Image Generation Platform for Creatives with small prompts",
      icon: <Bot className="w-12 h-12" />,
      color: "from-red-400 to-yellow-500",
      status: "Deployed",
      progress: 100
    },
    {
      name: "Mindshear.ai",
      description: "AI-driven mental health assessment and cognitive wellness platform",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-400 to-pink-500",
      status: "In Development",
      progress: 75
    },
    {
      name: "Codeverse.ai",
      description: "Intelligent code generation and analysis platform for developers",
      icon: <Bot className="w-12 h-12" />,
      color: "from-blue-400 to-cyan-500",
      status: "Beta Testing",
      progress: 85
    },
   
    {
      name: "Helptoboost.ai",
      description: "AI-powered productivity enhancement and workflow optimization",
      icon: <Zap className="w-12 h-12" />,
      color: "from-yellow-400 to-orange-500",
      status: "Planning",
      progress: 30
    },
    {
      name: "Reresume.ai",
      description: "AI-driven resume optimization and career guidance platform",
      icon: <Target className="w-12 h-12" />,
      color: "from-green-400 to-emerald-500",
      status: "In Development",
      progress: 60
    },
    {
      name: "Ideastrome",
      description: "Creative ideation platform powered by AI for innovation",
      icon: <Lightbulb className="w-12 h-12" />,
      color: "from-orange-400 to-red-500",
      status: "Concept",
      progress: 15
    },
    {
      name: "Brain2world.ai",
      description: "Global AI platform connecting knowledge networks worldwide",
      icon: <Globe className="w-12 h-12" />,
      color: "from-cyan-400 to-blue-500",
      status: "Research",
      progress: 20
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, products.length]);

  const nextProduct = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevProduct = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToProduct = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      visible.push({
        ...products[index],
        position: i,
        index: index
      });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">AI Product Showcase</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our revolutionary AI products designed to transform industries and enhance human capabilities
          </p>
        </div>

        {/* 3D Curved Carousel */}
        <div className="relative h-96 mb-12">
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {getVisibleProducts().map((product, idx) => {
              const position = product.position;
              const isCenter = position === 0;
              const scale = isCenter ? 1 : 0.7 - Math.abs(position) * 0.1;
              const translateX = position * 200;
              const translateZ = isCenter ? 0 : -Math.abs(position) * 100;
              const rotateY = position * 25;
              const opacity = 1 - Math.abs(position) * 0.3;

              return (
                <div
                  key={product.index}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                    isCenter ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity
                  }}
                  onClick={() => goToProduct(product.index)}
                >
                  <GlowingCard className={`w-80 h-64 ${isCenter ? 'ring-4 ring-blue-400/50' : ''}`}>
                    <div className={`p-8 bg-gradient-to-br ${product.color} rounded-xl`}>
                      <div className="text-white mb-4 flex justify-center">
                        {product.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white text-center mb-3">
                        {product.name}
                      </h3>
                      <p className="text-white/90 text-center text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm bg-black/20 px-3 py-1 rounded-full">
                          {product.status}
                        </span>
                        <span className="text-white font-semibold">
                          {product.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div 
                          className="h-2 bg-white rounded-full transition-all duration-500"
                          style={{ width: `${product.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </GlowingCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <button
            onClick={prevProduct}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProduct(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextProduct}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Product Details */}
        <div className="text-center">
          <GlowingCard className="max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {products[currentIndex].name}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {products[currentIndex].description}
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Get Early Access
                </button>
              </div>
            </div>
          </GlowingCard>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <div className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;