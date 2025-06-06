import Navbar from "@/components/Navbar";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const Projects = () => {
  const projects = [
    {
      title: "Heart Risk Assessment Tool",
      category: "Academic",
      status: "Completed",
      description: "A web-based tool using Python, Django, and CatBoost, achieving 90% accuracy in predicting cardiovascular disease risk.",
      technologies: ["Python", "Django", "CatBoost", "Gemini AI", "Google Maps API", "SQLite"],
      features: [
        "90% accuracy in cardiovascular risk prediction",
        "Integrated Gemini AI for personalized recommendations",
        "Real-time chatbot with Gemini Flash 1.5",
        "Google Maps API for hospital locator",
        "Secure SQLite data management"
      ],
      completion: "100%",
      timeline: "6 months"
    },
    {
      title: "AI-Powered Dress-Swap Tool",
      category: "Professional",
      status: "Completed",
      description: "Advanced AI-driven tool using the Kolors model to intelligently replace clothing in user-uploaded images.",
      technologies: ["Python", "Hugging Face", "Computer Vision", "Deep Learning"],
      features: [
        "Kolors model integration from Hugging Face",
        "Realistic image generation and alignment",
        "Advanced computer vision techniques",
        "Optimized AI model accuracy"
      ],
      completion: "100%",
      timeline: "4 months"
    },
    {
      title: "Speaking AI Assistant",
      category: "Professional",
      status: "Completed",
      description: "Interactive voice-based AI assistant with natural language understanding and speech synthesis.",
      technologies: ["Python", "SpeechRecognition", "gTTS", "pyttsx3"],
      features: [
        "Natural language understanding",
        "Speech recognition capabilities",
        "Text-to-speech functionality",
        "Real-time user interaction",
        "Expense tracking and reporting"
      ],
      completion: "100%",
      timeline: "3 months"
    },
    {
      title: "Expense Tracker Website",
      category: "Professional",
      status: "Completed",
      description: "Comprehensive expense tracking and analysis web application using the MERN stack.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Expense tracking and categorization",
        "Report generation and data visualization",
        "Chart-based analytics",
        "Responsive and user-friendly design",
        "UX/UI design principles implementation"
      ],
      completion: "100%",
      timeline: "5 months"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <GlowingCard className="mb-8">
            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold text-white">My Projects</h1>
              <p className="text-gray-400 text-lg">
                A showcase of my technical expertise and innovative solutions
              </p>
            </div>
          </GlowingCard>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlowingCard key={index} className="w-full">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          project.category === 'Academic' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/20 text-emerald-400">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{project.completion}</div>
                      <div className="text-gray-400 text-sm">Complete</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Code size={16} />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Timeline: {project.timeline}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <Github size={16} />
                        Code
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                        Demo
                      </button>
                    </div>
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

export default Projects;