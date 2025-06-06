import Navbar from "@/components/Navbar";
import { Bot, Brain, MessageSquare, Zap } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const AIAgents = () => {
  const agents = [
    {
      name: "CodeVerse AI",
      status: "In Development",
      description: "An intelligent code generation and review assistant that helps developers write better code faster.",
      capabilities: [
        "Code generation in multiple languages",
        "Automated code review and suggestions",
        "Bug detection and fixing",
        "Documentation generation",
        "Performance optimization"
      ],
      progress: 75,
      techStack: ["Python", "Transformers", "OpenAI GPT", "FastAPI"],
      icon: <Bot className="text-blue-400" size={24} />,
      color: "blue"
    },
    {
      name: "Mindshear AI",
      status: "Planning Phase",
      description: "A cognitive AI assistant designed to enhance decision-making and strategic thinking processes.",
      capabilities: [
        "Strategic analysis and recommendations",
        "Data-driven insights generation",
        "Risk assessment and mitigation",
        "Predictive modeling",
        "Business intelligence automation"
      ],
      progress: 25,
      techStack: ["TensorFlow", "PyTorch", "LangChain", "Vector DB"],
      icon: <Brain className="text-purple-400\" size={24} />,
      color: "purple"
    },
    {
      name: "HealthGuard AI",
      status: "Research Phase",
      description: "An AI-powered health monitoring system that provides personalized medical insights and recommendations.",
      capabilities: [
        "Symptom analysis and risk assessment",
        "Personalized health recommendations",
        "Medical data interpretation",
        "Emergency alert system",
        "Integration with wearable devices"
      ],
      progress: 15,
      techStack: ["Scikit-learn", "Pandas", "FastAPI", "React"],
      icon: <MessageSquare className="text-green-400" size={24} />,
      color: "green"
    },
    {
      name: "EduMentor AI",
      status: "Concept Stage",
      description: "Personalized learning assistant that adapts to individual learning styles and provides targeted educational content.",
      capabilities: [
        "Adaptive learning pathways",
        "Personalized content recommendations",
        "Progress tracking and analytics",
        "Interactive tutoring sessions",
        "Skill gap analysis"
      ],
      progress: 10,
      techStack: ["OpenAI API", "React", "Node.js", "MongoDB"],
      icon: <Zap className="text-yellow-400\" size={24} />,
      color: "yellow"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 70) return "bg-green-500";
    if (progress >= 40) return "bg-blue-500";
    if (progress >= 20) return "bg-yellow-500";
    return "bg-purple-500";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development": return "bg-blue-500/20 text-blue-400";
      case "Planning Phase": return "bg-purple-500/20 text-purple-400";
      case "Research Phase": return "bg-green-500/20 text-green-400";
      case "Concept Stage": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <GlowingCard className="mb-8">
            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold text-white">AI Agents Portfolio</h1>
              <p className="text-gray-400 text-lg">
                Exploring the frontier of artificial intelligence through innovative agent development
              </p>
            </div>
          </GlowingCard>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <GlowingCard key={index} className="w-full">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {agent.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(agent.status)}`}>
                          {agent.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{agent.progress}%</div>
                      <div className="text-gray-400 text-sm">Progress</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{agent.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(agent.progress)} transition-all duration-500`}
                        style={{ width: `${agent.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{agent.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className={`text-${agent.color}-400 mt-1`}>•</span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    Est. completion: {agent.progress >= 70 ? "Q2 2025" : "Q3 2025"}
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;