import { motion } from 'framer-motion';
import { FaDownload, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

interface CVSectionProps {
  onDownload: () => void;
}

export const CVSection: React.FC<CVSectionProps> = ({ onDownload }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8 py-16"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Professional</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Curriculum Vitae</h2>
        </div>
        <button
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-glow transition hover:brightness-110"
        >
          <FaDownload /> Download PDF
        </button>
      </div>

      {/* CV Content */}
      <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-8 shadow-cyber backdrop-blur-2xl">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h1 className="text-4xl font-bold text-white">ADOLPH MLASANI</h1>
          <p className="mt-2 text-xl text-cyan-300">Cyber Security Engineer & Frontend Developer</p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Tanzania</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-cyan-400" />
              <a href="tel:+255624667100" className="hover:text-cyan-300">+255 624 667 100</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              <a href="mailto:adolphmlasani29@gmail.com" className="hover:text-cyan-300">adolphmlasani29@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-cyan-400" />
              <span>Adolph_mlasani</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-cyan-400" />
              <span>github.com/adolph</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h3 className="mb-3 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Professional Summary</h3>
          <p className="leading-7 text-slate-300">
            Certified Ethical Hacker (CEH) and Frontend Developer with proven expertise in cybersecurity, ethical hacking, penetration testing, and secure web development. Founder of Shop By Me and CEO of AL-ODEM Enterprises. Committed to building secure, high-performance digital systems with futuristic user experiences. Strong background in networking systems, security labs, and modern web technologies. Passionate about bridging cybersecurity and cutting-edge frontend design.
          </p>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h3 className="mb-4 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Certifications & Achievements</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/5 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white">Certified Ethical Hacker (CEH)</h4>
                  <p className="mt-1 text-sm text-slate-400">International certification for ethical hackers</p>
                  <p className="mt-1 text-xs text-cyan-300">✓ Attack strategies and defense techniques</p>
                  <p className="text-xs text-cyan-300">✓ Penetration testing methodologies</p>
                  <p className="text-xs text-cyan-300">✓ Security assessment frameworks</p>
                </div>
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <div className="rounded-xl border border-purple-400/20 bg-purple-500/5 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white">Security Challenge Winner</h4>
                  <p className="mt-1 text-sm text-slate-400">Completed 18+ real-world security challenges</p>
                  <p className="mt-1 text-xs text-purple-300">✓ Vulnerability assessment expertise</p>
                  <p className="text-xs text-purple-300">✓ Incident response experience</p>
                  <p className="text-xs text-purple-300">✓ Security hardening techniques</p>
                </div>
                <FaStar className="text-yellow-400" />
              </div>
            </div>
            <div className="rounded-xl border border-blue-400/20 bg-blue-500/5 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-white">Business Founder & CEO</h4>
                  <p className="mt-1 text-sm text-slate-400">Shop By Me & AL-ODEM Enterprises</p>
                  <p className="mt-1 text-xs text-blue-300">✓ Built secure e-commerce platforms</p>
                  <p className="text-xs text-blue-300">✓ Implemented frontend best practices</p>
                  <p className="text-xs text-blue-300">✓ Led technology initiatives</p>
                </div>
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h3 className="mb-4 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Professional Experience</h3>
          <div className="space-y-5">
            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Founder & CEO</h4>
                  <p className="text-sm text-cyan-300">Shop By Me & AL-ODEM Enterprises</p>
                  <p className="mt-2 text-xs text-slate-400">Ongoing</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Designed and built secure e-commerce platform with modern tech stack</li>
                <li>• Implemented cybersecurity best practices in business operations</li>
                <li>• Developed responsive frontend interfaces with advanced user experience</li>
                <li>• Managed 12+ technical projects and security initiatives</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Cybersecurity Labs & Challenges</h4>
                  <p className="text-sm text-cyan-300">Security Research & Development</p>
                  <p className="mt-2 text-xs text-slate-400">Ongoing</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Completed 32+ hands-on cybersecurity laboratory exercises</li>
                <li>• Performed penetration testing and vulnerability assessments</li>
                <li>• Studied network architecture, system hardening, and security protocols</li>
                <li>• Documented and analyzed security findings and threat models</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Network Systems Engineer</h4>
                  <p className="text-sm text-cyan-300">Infrastructure & IP Configuration</p>
                  <p className="mt-2 text-xs text-slate-400">Ongoing</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Configured and managed 9+ network systems and architectures</li>
                <li>• Implemented IP camera systems and surveillance networks</li>
                <li>• Designed secure network infrastructure with access controls</li>
                <li>• Troubleshot network issues and optimized performance</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Frontend Developer</h4>
                  <p className="text-sm text-cyan-300">Web Technologies & UI/UX</p>
                  <p className="mt-2 text-xs text-slate-400">Ongoing</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Built 12+ responsive web applications and digital experiences</li>
                <li>• Mastered React, JavaScript, Tailwind CSS, and modern frameworks</li>
                <li>• Implemented advanced animations, glassmorphism, and cyberpunk aesthetics</li>
                <li>• Focused on performance optimization and accessibility standards</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h3 className="mb-4 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Education</h3>
          <div className="space-y-5">
            <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-cyan-300">St Joseph University</p>
                  <p className="mt-2 text-xs text-slate-400">Major: Computer Science, Networking & Cybersecurity</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>✓ Advanced networking protocols and architecture</li>
                <li>✓ Software development and programming principles</li>
                <li>✓ Database management and system design</li>
                <li>✓ Cybersecurity fundamentals and ethical hacking</li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Advanced Level (A Level) Certificate</h4>
                  <p className="text-sm text-purple-300">St Amedeus High School</p>
                  <p className="mt-2 text-xs text-slate-400">Specialization: Science & Technology</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>✓ Advanced Mathematics and Physics</li>
                <li>✓ Information Communication Technology (ICT)</li>
                <li>✓ Science & Technology fundamentals</li>
                <li>✓ Critical thinking and analytical skills</li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-400/20 bg-slate-900/50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Ordinary Level (O Level) Certificate</h4>
                  <p className="text-sm text-blue-300">St Thomas Secondary School</p>
                  <p className="mt-2 text-xs text-slate-400">Foundation: Science, Mathematics, English</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>✓ Core Mathematics and English subjects</li>
                <li>✓ General Science and Technology</li>
                <li>✓ Communication and problem-solving skills</li>
                <li>✓ Foundation in STEM disciplines</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants} className="mb-8 border-b border-cyan-400/20 pb-8">
          <h3 className="mb-4 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Technical Skills</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-4">
              <h4 className="mb-2 font-semibold text-cyan-300">Cybersecurity</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Penetration Testing</li>
                <li>• Vulnerability Analysis</li>
                <li>• Kali Linux Pro</li>
                <li>• Ethical Hacking</li>
              </ul>
            </div>
            <div className="rounded-lg border border-violet-400/20 bg-violet-500/5 p-4">
              <h4 className="mb-2 font-semibold text-violet-300">Networking</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Network Architecture</li>
                <li>• TCP/IP Protocols</li>
                <li>• IP Configuration</li>
                <li>• Linux Networking</li>
              </ul>
            </div>
            <div className="rounded-lg border border-purple-400/20 bg-purple-500/5 p-4">
              <h4 className="mb-2 font-semibold text-purple-300">Frontend Dev</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• React & TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript Advanced</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Languages & Additional */}
        <motion.div variants={itemVariants}>
          <h3 className="mb-4 text-xl font-semibold text-cyan-300 uppercase tracking-[0.2em]">Additional Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-4">
              <h4 className="mb-2 font-semibold text-white">Languages</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• English (Fluent)</li>
                <li>• Swahili (Native)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-4">
              <h4 className="mb-2 font-semibold text-white">Key Attributes</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Certified Professional</li>
                <li>• Continuous Learner</li>
                <li>• Problem Solver</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
