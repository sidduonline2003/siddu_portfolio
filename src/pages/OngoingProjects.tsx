import Navbar from "@/components/Navbar";
import { Calendar, Users, GitBranch, AlertCircle, CheckCircle } from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";

const OngoingProjects = () => {
  const ongoingProjects = [
    {
      title: "Quantum ML Framework",
      description: "Developing a machine learning framework optimized for quantum computing applications.",
      progress: 65,
      priority: "High",
      startDate: "Jan 2025",
      expectedCompletion: "Jun 2025",
      team: ["Sai Siddu", "Research Team"],
      milestones: [
        { name: "Research Phase", status: "completed", date: "Jan 2025" },
        { name: "Core Architecture", status: "in-progress", date: "Mar 2025" },
        { name: "Testing & Optimization", status: "pending", date: "May 2025" },
        { name: "Documentation", status: "pending", date: "Jun 2025" }
      ],
      technologies: ["Python", "Qiskit", "TensorFlow Quantum", "NumPy"],
      challenges: ["Quantum noise handling", "Classical-quantum integration"],
      nextMilestone: "Complete core architecture implementation"
    },
    {
      title: "Neural Code Optimizer",
      description: "AI-powered tool that automatically optimizes code performance and suggests improvements.",
      progress: 45,
      priority: "Medium",
      startDate: "Feb 2025",
      expectedCompletion: "Aug 2025",
      team: ["Sai Siddu", "AI Team"],
      milestones: [
        { name: "Algorithm Design", status: "completed", date: "Feb 2025" },
        { name: "Model Training", status: "in-progress", date: "Apr 2025" },
        { name: "Integration Testing", status: "pending", date: "Jun 2025" },
        { name: "Production Release", status: "pending", date: "Aug 2025" }
      ],
      technologies: ["PyTorch", "LLVM", "AST", "Docker"],
      challenges: ["Code pattern recognition", "Performance metric validation"],
      nextMilestone: "Complete model training phase"
    },
    {
      title: "Blockchain Data Analytics",
      description: "Real-time analytics platform for blockchain transactions and smart contract monitoring.",
      progress: 30,
      priority: "Medium",
      startDate: "Mar 2025",
      expectedCompletion: "Sep 2025",
      team: ["Sai Siddu", "Blockchain Team"],
      milestones: [
        { name: "Data Pipeline Setup", status: "completed", date: "Mar 2025" },
        { name: "Analytics Engine", status: "in-progress", date: "May 2025" },
        { name: "Dashboard Development", status: "pending", date: "Jul 2025" },
        { name: "Security Audit", status: "pending", date: "Sep 2025" }
      ],
      technologies: ["Web3.py", "Ethereum", "React", "PostgreSQL"],
      challenges: ["Real-time data processing", "Scalability optimization"],
      nextMilestone: "Build analytics engine core"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/20 text-red-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400";
      case "Low": return "bg-green-500/20 text-green-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="text-green-400" size={16} />;
      case "in-progress": return <AlertCircle className="text-yellow-400" size={16} />;
      case "pending": return <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <GlowingCard className="mb-8">
            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold text-white">Ongoing Projects</h1>
              <p className="text-gray-400 text-lg">
                Current developments and active research initiatives - Updated in real-time
              </p>
            </div>
          </GlowingCard>
          
          {/* Project Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-white font-semibold">Active Projects</div>
                <div className="text-gray-400 text-sm">In Development</div>
              </div>
            </GlowingCard>
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">47%</div>
                <div className="text-white font-semibold">Average Progress</div>
                <div className="text-gray-400 text-sm">Across All Projects</div>
              </div>
            </GlowingCard>
            <GlowingCard className="text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-white font-semibold">Months</div>
                <div className="text-gray-400 text-sm">Average Timeline</div>
              </div>
            </GlowingCard>
          </div>
          
          {/* Detailed Project Cards */}
          <div className="space-y-8">
            {ongoingProjects.map((project, index) => (
              <GlowingCard key={index}>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(project.priority)}`}>
                          {project.priority} Priority
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="text-right lg:ml-6">
                      <div className="text-3xl font-bold text-white mb-1">{project.progress}%</div>
                      <div className="text-gray-400 text-sm">Complete</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Timeline */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Calendar size={16} />
                        Timeline
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="text-gray-300">Started: {project.startDate}</div>
                        <div className="text-gray-300">Expected: {project.expectedCompletion}</div>
                      </div>
                    </div>
                    
                    {/* Team */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Users size={16} />
                        Team
                      </h4>
                      <div className="space-y-1">
                        {project.team.map((member, idx) => (
                          <div key={idx} className="text-gray-300 text-sm">{member}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Next Milestone */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <GitBranch size={16} />
                        Next Milestone
                      </h4>
                      <div className="text-gray-300 text-sm">{project.nextMilestone}</div>
                    </div>
                  </div>
                  
                  {/* Milestones */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Project Milestones</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          {getStatusIcon(milestone.status)}
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{milestone.name}</div>
                            <div className="text-gray-400 text-xs">{milestone.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies & Challenges */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Challenges</h4>
                      <ul className="space-y-1">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>
          
          {/* Call to Action */}
          <GlowingCard className="mt-12 text-center">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Want to Collaborate?</h2>
              <p className="text-gray-300 mb-6">
                These projects are actively seeking collaborators, beta testers, and feedback from the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  Join as Collaborator
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Weekly Updates
                </button>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;