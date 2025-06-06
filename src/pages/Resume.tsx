import Navbar from "@/components/Navbar";
import { GlowingCard } from "@/components/ui/glowing-card";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <GlowingCard className="mb-8">
            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold text-white">Resume</h1>
            </div>
          </GlowingCard>
          
          <GlowingCard className="mb-6">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-white mb-2">Kasarla Sai Siddu</h2>
              <p className="text-blue-400 text-xl mb-4">AI & Software Engineer | Class of 2025</p>
              <div className="flex flex-wrap gap-4 text-gray-300">
                <span>📞 6309732941</span>
                <span>📧 218R1A6235@gmail.com</span>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard className="mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Highly motivated and detail-oriented final-year BTech student in Computer Science and Engineering, graduating in 2025. 
                Adept at data analysis, problem-solving, and critical thinking. Proficient in Python, Java, and C++, with experience 
                in machine learning, artificial intelligence, and cloud computing. Passionate about developing innovative and scalable 
                software solutions to solve real-world problems.
              </p>
            </div>
          </GlowingCard>

          <GlowingCard className="mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-xl font-semibold text-white">CMR Engineering College</h4>
                <p className="text-blue-400">Bachelor of Technology - Computer Science & Engineering</p>
                <p className="text-gray-300">Aug 2021 - June 2025 (Graduate)</p>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard className="mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Infosys Springboard Intern | Python Developer</h4>
                  <p className="text-green-400 mb-2">Oct 2024 - Dec 2024</p>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    <li>Developed Python scripts to automate data processing tasks, reducing manual effort by 50%</li>
                    <li>Collaborated with a team to design and implement web applications using Python and Flask</li>
                    <li>Participated in code reviews and provided constructive feedback to improve code quality</li>
                    <li>Quickly adapted to new technologies such as Generative AI during internships</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-xl font-semibold text-white">Future Ready Talent Intern</h4>
                  <p className="text-purple-400 mb-2">Future Ready Talent Program</p>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    <li>Gained hands-on experience in web development, focusing on both frontend and backend technologies</li>
                    <li>Collaborated with a team to design and develop web applications with Generative AI</li>
                    <li>Contributed to the development of features and functionalities using modern web technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard className="mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">Google UX Research</h4>
                </GlowingCard>
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">Google Project Management</h4>
                </GlowingCard>
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">IBM Generative AI Fundamentals</h4>
                </GlowingCard>
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">Build Your Own Static Website</h4>
                </GlowingCard>
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">Make Your Own Responsive Website</h4>
                </GlowingCard>
                <GlowingCard className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold">Python Certification</h4>
                </GlowingCard>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard className="mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Programming Languages</h4>
                  <p className="text-gray-300">Python, Java, C++</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Web Technologies</h4>
                  <p className="text-gray-300">HTML, CSS, Bootstrap, Node.js, React.js</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Database Technologies</h4>
                  <p className="text-gray-300">SQL, MongoDB, SQLite</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Tools & Platforms</h4>
                  <p className="text-gray-300">Figma, VS Code, Git, GitHub</p>
                </div>
              </div>
            </div>
          </GlowingCard>

          <GlowingCard>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Achievements</h3>
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="text-gray-300">🏆 Won 1st prize in Poster Design Competition among 50 participants at college fest</p>
              </div>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
};

export default Resume;