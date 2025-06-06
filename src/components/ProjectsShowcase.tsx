import { useState } from "react";
import { Calendar, Github, ExternalLink, Clock, Users, Star } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "codeverse-ai",
      title: "CodeVerse AI",
      status: "In Development",
      category: "AI/ML",
      progress: 85,
      description: "Advanced AI-powered code generation and analysis platform using machine learning to assist developers in writing better code.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      expectedCompletion: "March 2025",
      features: [
        "Intelligent code completion",
        "Bug detection and fixes",
        "Code optimization suggestions",
        "Multi-language support"
      ],
      demoLink: "#",
      githubLink: "https://github.com/sidduonline2003",
      teamSize: 3,
      lastUpdate: "2 days ago"
    },
    {
      id: "mindshear-ai",
      title: "Mindshear AI",
      status: "Development Phase",
      category: "AI/ML",
      progress: 60,
      description: "Revolutionary AI-driven mental health assessment tool providing personalized insights and recommendations.",
      technologies: ["Python", "Django", "React", "PostgreSQL", "TensorFlow"],
      expectedCompletion: "May 2025",
      features: [
        "Mental health screening",
        "Personalized recommendations",
        "Progress tracking",
        "Healthcare provider integration"
      ],
      demoLink: "#",
      githubLink: "https://github.com/sidduonline2003",
      teamSize: 2,
      lastUpdate: "1 week ago"
    },
    {
      id: "heart-risk-tool",
      title: "Heart Risk Assessment Tool",
      status: "Completed",
      category: "Healthcare",
      progress: 100,
      description: "ML-powered cardiovascular disease risk prediction with 90% accuracy using CatBoost and Gemini AI integration.",
      technologies: ["Python", "Django", "CatBoost", "Gemini AI", "SQLite"],
      expectedCompletion: "Completed",
      features: [
        "90% prediction accuracy",
        "Real-time chatbot",
        "Hospital locator",
        "Personalized health recommendations"
      ],
      demoLink: "#",
      githubLink: "https://github.com/sidduonline2003",
      teamSize: 1,
      lastUpdate: "Completed"
    },
    {
      id: "dress-swap-ai",
      title: "AI-Powered Dress-Swap Tool",
      status: "Completed",
      category: "Computer Vision",
      progress: 100,
      description: "Advanced computer vision tool using Kolors model for intelligent clothing replacement in images.",
      technologies: ["Python", "Hugging Face", "Computer Vision", "Deep Learning"],
      expectedCompletion: "Completed",
      features: [
        "Realistic image generation",
        "Intelligent clothing detection",
        "User-friendly interface",
        "Real-time processing"
      ],
      demoLink: "#",
      githubLink: "https://github.com/sidduonline2003",
      teamSize: 1,
      lastUpdate: "Completed"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ["all", "AI/ML", "Healthcare", "Computer Vision"];

  return (
    <section id="projects" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Active Projects Showcase</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my current and completed projects showcasing AI, machine learning, and full-stack development expertise.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <GlowingCard key={project.id} className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === "Completed" 
                        ? "bg-green-500" 
                        : project.status === "In Development" 
                          ? "bg-blue-500" 
                          : "bg-yellow-500"
                    }`}></div>
                    <span className="text-sm text-gray-400">{project.status}</span>
                  </div>
                  <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project stats */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{project.teamSize} {project.teamSize === 1 ? 'member' : 'members'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{project.lastUpdate}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.demoLink}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-white/10 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <Github size={14} />
                  </a>
                </div>

                {/* Expandable details */}
                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="w-full mt-3 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  {selectedProject === project.id ? "Hide Details" : "Learn More"}
                </button>

                {selectedProject === project.id && (
                  <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10 animate-fade-in">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 mb-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star size={12} className="text-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      <span>Expected completion: {project.expectedCompletion}</span>
                    </div>
                  </div>
                )}
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Newsletter signup */}
        <GlowingCard className="mt-16 text-center">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get notified about new projects and development updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};

export default ProjectsShowcase;