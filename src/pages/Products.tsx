import Navbar from "@/components/Navbar";
import { ExternalLink, Github, Calendar, Code, Brain, Bot, Zap, Target, Lightbulb, Globe } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const Products = () => {
  const products = [
    {
      title: "Mindshear.ai",
      category: "AI Assistant",
      status: "In Development",
      description: "Revolutionary AI-driven mental health assessment tool providing personalized insights and recommendations for cognitive wellness.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      features: [
        "Advanced cognitive assessment algorithms",
        "Personalized mental health insights",
        "Real-time mood tracking and analysis",
        "Integration with healthcare providers",
        "Privacy-first data handling"
      ],
      completion: "75%",
      timeline: "Q2 2025",
      icon: <Brain className="text-purple-400" size={32} />,
      color: "purple",
      pricing: "Freemium"
    },
    {
      title: "Codeverse.ai",
      category: "Developer Tools",
      status: "Beta Testing",
      description: "Intelligent code generation and analysis platform using machine learning to assist developers in writing better code.",
      technologies: ["Python", "OpenAI GPT", "React", "Node.js", "MongoDB"],
      features: [
        "AI-powered code generation",
        "Intelligent code review and suggestions",
        "Multi-language support",
        "Real-time collaboration features",
        "Performance optimization recommendations"
      ],
      completion: "85%",
      timeline: "Q1 2025",
      icon: <Bot className="text-blue-400\" size={32} />,
      color: "blue",
      pricing: "Subscription"
    },
    {
      title: "Helptoboost.ai",
      category: "Productivity",
      status: "Planning",
      description: "AI-powered productivity enhancement platform that optimizes workflows and boosts team efficiency.",
      technologies: ["React", "Python", "FastAPI", "Redis", "PostgreSQL"],
      features: [
        "Workflow optimization algorithms",
        "Team productivity analytics",
        "Automated task prioritization",
        "Integration with popular tools",
        "Performance tracking dashboards"
      ],
      completion: "30%",
      timeline: "Q3 2025",
      icon: <Zap className="text-yellow-400" size={32} />,
      color: "yellow",
      pricing: "Enterprise"
    },
    {
      title: "Reresume.ai",
      category: "Career Tools",
      status: "In Development",
      description: "AI-driven resume optimization and career guidance platform that helps professionals advance their careers.",
      technologies: ["Python", "NLP", "React", "Django", "SQLite"],
      features: [
        "AI-powered resume optimization",
        "ATS compatibility checking",
        "Career path recommendations",
        "Interview preparation assistance",
        "Industry-specific templates"
      ],
      completion: "60%",
      timeline: "Q2 2025",
      icon: <Target className="text-green-400\" size={32} />,
      color: "green",
      pricing: "Freemium"
    },
    {
      title: "Ideastrome",
      category: "Innovation",
      status: "Concept",
      description: "Creative ideation platform powered by AI to generate, refine, and validate innovative business ideas.",
      technologies: ["React", "Python", "OpenAI", "FastAPI", "MongoDB"],
      features: [
        "AI-powered idea generation",
        "Market validation algorithms",
        "Collaborative brainstorming tools",
        "Trend analysis and insights",
        "Business model canvas generation"
      ],
      completion: "15%",
      timeline: "Q4 2025",
      icon: <Lightbulb className="text-orange-400" size={32} />,
      color: "orange",
      pricing: "Subscription"
    },
    {
      title: "Brain2world.ai",
      category: "Global AI",
      status: "Research",
      description: "Advanced AI platform connecting global knowledge networks to solve complex worldwide challenges.",
      technologies: ["Python", "TensorFlow", "React", "Kubernetes", "GraphQL"],
      features: [
        "Global knowledge graph integration",
        "Multi-language AI processing",
        "Cross-cultural insight generation",
        "Collaborative problem-solving",
        "Real-time global data analysis"
      ],
      completion: "20%",
      timeline: "2026",
      icon: <Globe className="text-cyan-400\" size={32} />,
      color: "cyan",
      pricing: "Enterprise"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta Testing": return "bg-green-500/20 text-green-400";
      case "In Development": return "bg-blue-500/20 text-blue-400";
      case "Planning": return "bg-yellow-500/20 text-yellow-400";
      case "Concept": return "bg-purple-500/20 text-purple-400";
      case "Research": return "bg-cyan-500/20 text-cyan-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Freemium": return "bg-green-500/20 text-green-400";
      case "Subscription": return "bg-blue-500/20 text-blue-400";
      case "Enterprise": return "bg-purple-500/20 text-purple-400";
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
              <h1 className="text-4xl font-bold text-white">AI Products Portfolio</h1>
              <p className="text-gray-400 text-lg">
                Innovative AI solutions designed to transform industries and enhance human capabilities
              </p>
            </div>
          </GlowingCard>
          
          {/* Product Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
                <div className="text-white font-semibold">AI Products</div>
                <div className="text-gray-400 text-sm">In Development</div>
              </div>
            </GlowingCard>
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                <div className="text-white font-semibold">Ready Soon</div>
                <div className="text-gray-400 text-sm">Q1-Q2 2025</div>
              </div>
            </GlowingCard>
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                <div className="text-white font-semibold">Categories</div>
                <div className="text-gray-400 text-sm">Different Domains</div>
              </div>
            </GlowingCard>
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">AI</div>
                <div className="text-white font-semibold">Powered</div>
                <div className="text-gray-400 text-sm">All Products</div>
              </div>
            </GlowingCard>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <GlowingCard key={index} className="w-full">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {product.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm ${getPricingColor(product.pricing)}`}>
                            {product.pricing}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{product.completion}</div>
                      <div className="text-gray-400 text-sm">Complete</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 transition-all duration-500`}
                        style={{ width: `${parseInt(product.completion)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className={`text-${product.color}-400 mt-1`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Launch: {product.timeline}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <Github size={16} />
                        Code
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>

          {/* Call to Action */}
          <GlowingCard className="mt-12 text-center">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Interested in Early Access?</h2>
              <p className="text-gray-300 mb-6">
                Be among the first to experience these revolutionary AI products. Join our beta program and shape the future of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  Join Beta Program
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Get Notified
                </button>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
};

export default Products;