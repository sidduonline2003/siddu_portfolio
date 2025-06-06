import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { GlowingCard } from "@/components/ui/glowing-card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'm always excited to work on challenging problems and create impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <GlowingCard>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:218R1A6235@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        218R1A6235@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+916309732941" className="text-white hover:text-green-400 transition-colors">
                        +91 6309732941
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowingCard>

            <GlowingCard>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sidduonline2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-600/20 rounded-lg flex items-center justify-center hover:bg-gray-600/30 transition-colors group"
                  >
                    <Github className="text-gray-400 group-hover:text-white" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saisiddu-kasarla-502660280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors group"
                  >
                    <Linkedin className="text-blue-400 group-hover:text-blue-300" size={20} />
                  </a>
                </div>
              </div>
            </GlowingCard>

            {/* Quick stats */}
            <GlowingCard>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">15+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">3+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">90%</div>
                    <div className="text-gray-400 text-sm">ML Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">5+</div>
                    <div className="text-gray-400 text-sm">Tech Stacks</div>
                  </div>
                </div>
              </div>
            </GlowingCard>
          </div>

          {/* Contact Form */}
          <GlowingCard>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Project collaboration, job opportunity, etc."
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;