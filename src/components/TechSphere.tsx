import { useEffect, useRef, useState } from "react";

const TechSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techCategories = [
    {
      name: "AI & Machine Learning",
      techs: [
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
        { name: "TensorFlow", icon: "🧠", color: "from-orange-500 to-yellow-500" },
        { name: "PyTorch", icon: "🔥", color: "from-red-500 to-orange-500" },
        { name: "Scikit-learn", icon: "🤖", color: "from-blue-500 to-purple-500" },
        { name: "OpenCV", icon: "👁️", color: "from-green-500 to-blue-500" },
        { name: "Hugging Face", icon: "🤗", color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      name: "Web Development",
      techs: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
        { name: "Django", icon: "🎯", color: "from-green-500 to-teal-500" },
        { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" },
        { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" }
      ]
    },
    {
      name: "Cloud & DevOps",
      techs: [
        { name: "AWS", icon: "☁️", color: "from-yellow-400 to-orange-500" },
        { name: "Docker", icon: "🐳", color: "from-blue-500 to-indigo-600" },
        { name: "Git", icon: "🔧", color: "from-orange-400 to-red-500" },
        { name: "MongoDB", icon: "🍃", color: "from-green-400 to-lime-500" },
        { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-purple-600" },
        { name: "Azure", icon: "🌐", color: "from-blue-500 to-cyan-500" }
      ]
    },
    {
      name: "Data Science",
      techs: [
        { name: "Pandas", icon: "🐼", color: "from-purple-500 to-pink-500" },
        { name: "NumPy", icon: "🔢", color: "from-blue-500 to-teal-500" },
        { name: "Matplotlib", icon: "📊", color: "from-red-500 to-yellow-500" },
        { name: "Jupyter", icon: "📓", color: "from-orange-500 to-red-500" },
        { name: "SQL", icon: "💾", color: "from-indigo-500 to-purple-500" },
        { name: "R", icon: "📈", color: "from-blue-600 to-cyan-600" }
      ]
    }
  ];

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let autoRotateX = 0;
    let autoRotateY = 0;
    let animationId: number;

    const animate = () => {
      if (sphere && !isHovered) {
        autoRotateY += 0.3;
        autoRotateX += 0.1;
        
        sphere.style.transform = `rotateY(${autoRotateY}deg) rotateX(${autoRotateX}deg)`;
      } else if (sphere && isHovered) {
        const finalRotateY = autoRotateY + (mousePosition.x * 0.5);
        const finalRotateX = autoRotateX + (mousePosition.y * 0.5);
        
        sphere.style.transform = `rotateY(${finalRotateY}deg) rotateX(${finalRotateX}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Auto-rotate carousel
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % techCategories.length);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, mousePosition, techCategories.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) / rect.width * 100,
      y: (e.clientY - centerY) / rect.height * 100
    });
  };

  const currentTechs = techCategories[currentIndex].techs;

  // Calculate sphere positions for better distribution
  const calculateSpherePosition = (index: number, total: number) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    const radius = 180;
    
    return {
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi)
    };
  };

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Technology Universe
        </h2>
        
        <div className="mb-8">
          <div className="text-2xl font-semibold text-blue-400 mb-4 animate-fade-in">
            {techCategories[currentIndex].name}
          </div>
          <div className="flex justify-center space-x-3 mb-6">
            {techCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125 shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-500/50 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div
            className="relative w-[500px] h-[500px] mx-auto cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <div
              ref={sphereRef}
              className="relative w-full h-full"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {currentTechs.map((tech, index) => {
                const position = calculateSpherePosition(index, currentTechs.length);
                
                return (
                  <div
                    key={`${tech.name}-${currentIndex}`}
                    className={`absolute w-20 h-20 bg-gradient-to-br ${tech.color} backdrop-blur-md rounded-2xl flex items-center justify-center text-xl font-semibold text-white hover:scale-125 transition-all duration-500 hover:rotate-12 border border-white/20 shadow-2xl hover:shadow-blue-500/30 animate-fade-in`}
                    style={{
                      transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`,
                      left: "50%",
                      top: "50%",
                      marginLeft: "-40px",
                      marginTop: "-40px",
                      animationDelay: `${index * 0.1}s`
                    }}
                    title={tech.name}
                  >
                    <div className="relative flex flex-col items-center">
                      <span className="text-2xl mb-1">{tech.icon}</span>
                      <span className="text-xs font-medium text-center leading-tight">
                        {tech.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
              
              {/* Enhanced Central core */}
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 -translate-y-1/2 shadow-2xl border-4 border-white/30 animate-pulse">
                <div className="text-center">
                  <span className="text-2xl block font-extrabold">SS</span>
                  <span className="text-sm opacity-90">2025</span>
                </div>
              </div>
              
              {/* Multiple orbiting rings with better visibility */}
              <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-blue-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: "20s" }}></div>
              <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-purple-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }}></div>
              <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] border border-pink-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: "40s" }}></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-8 animate-fade-in">
            Interactive 3D Sphere • Hover to control • Click dots to switch categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-all duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">{currentTechs.length}+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-gray-300 text-sm">Categories</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
              <div className="text-gray-300 text-sm">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSphere;