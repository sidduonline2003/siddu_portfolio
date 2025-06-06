import { useState } from "react";
import { Brain, Zap, Eye, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const FineTunedModels = () => {
  const [currentModel, setCurrentModel] = useState(0);

  const models = [
    {
      name: "HealthBot Pro",
      description: "Fine-tuned GPT model for medical consultation and health advice",
      icon: <Brain className="w-8 h-8" />,
      accuracy: "94%",
      dataset: "Medical Q&A Dataset",
      features: ["Symptom Analysis", "Drug Interactions", "Health Recommendations"],
      color: "from-green-400 to-emerald-500",
      status: "Production Ready"
    },
    {
      name: "CodeMentor AI",
      description: "Specialized model for code review and programming assistance",
      icon: <Zap className="w-8 h-8" />,
      accuracy: "91%",
      dataset: "StackOverflow + GitHub",
      features: ["Code Review", "Bug Detection", "Optimization Tips"],
      color: "from-blue-400 to-cyan-500",
      status: "Beta Testing"
    },
    {
      name: "VisionDetect",
      description: "Custom computer vision model for object detection and classification",
      icon: <Eye className="w-8 h-8" />,
      accuracy: "96%",
      dataset: "Custom Dataset (50K images)",
      features: ["Real-time Detection", "Multi-class Classification", "Edge Deployment"],
      color: "from-purple-400 to-pink-500",
      status: "Production Ready"
    },
    {
      name: "ChatSupport Elite",
      description: "Customer service chatbot with domain-specific knowledge",
      icon: <MessageSquare className="w-8 h-8" />,
      accuracy: "89%",
      dataset: "Customer Support Logs",
      features: ["Sentiment Analysis", "Ticket Routing", "Auto-responses"],
      color: "from-orange-400 to-red-500",
      status: "In Development"
    }
  ];

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Fine-Tuned AI Models</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized AI models custom-built for specific domains and use cases
          </p>
        </div>

        <div className="relative">
          {/* Main model display */}
          <div className="flex justify-center mb-8">
            <div className={`bg-gradient-to-br ${models[currentModel].color} p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-2xl w-full`}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {models[currentModel].icon}
                    <h3 className="text-2xl font-bold">{models[currentModel].name}</h3>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {models[currentModel].status}
                  </span>
                </div>
                
                <p className="text-lg mb-6 opacity-90">{models[currentModel].description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                    <div className="text-2xl font-bold">{models[currentModel].accuracy}</div>
                    <div className="text-sm opacity-80">Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                    <div className="text-lg font-semibold">{models[currentModel].dataset}</div>
                    <div className="text-sm opacity-80">Training Data</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                    <div className="text-lg font-semibold">{models[currentModel].features.length}</div>
                    <div className="text-sm opacity-80">Key Features</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {models[currentModel].features.map((feature, index) => (
                      <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm border border-white/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <button
              onClick={prevModel}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex space-x-3">
              {models.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModel(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentModel 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextModel}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Model thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {models.map((model, index) => (
              <div
                key={index}
                onClick={() => setCurrentModel(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border ${
                  index === currentModel
                    ? 'bg-white/10 shadow-lg border-blue-500 border-2'
                    : 'bg-white/5 hover:bg-white/10 border-white/20'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${model.color} text-white`}>
                    {model.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">{model.name}</h4>
                    <p className="text-xs text-gray-400">{model.accuracy} accuracy</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FineTunedModels;