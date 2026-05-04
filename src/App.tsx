import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaStar, FaShieldAlt, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiJavascript, SiLinux, SiKalilinux, SiFramer, SiThreedotjs } from 'react-icons/si';
import MatrixRain from './components/MatrixRain';
import ThreeScene from './components/ThreeScene';

const typedPhrases = [
  'CEH Certified',
  'Founder of Shop By Me',
  'Ethical Hacker',
  'Frontend Developer',
  'Security Specialist',
];

const stats = [
  { label: 'Labs Completed', value: '32+' },
  { label: 'Security Challenges', value: '18+' },
  { label: 'Projects Built', value: '12+' },
  { label: 'Network Systems', value: '9+' },
];

const skills = [
  { name: 'Kali Linux', icon: SiKalilinux, progress: 95 },
  { name: 'Ethical Hacking', icon: FaShieldAlt, progress: 92 },
  { name: 'Penetration Testing', icon: FaStar, progress: 90 },
  { name: 'Networking', icon: FaNetworkWired, progress: 88 },
  { name: 'Linux', icon: SiLinux, progress: 94 },
  { name: 'Web Development', icon: FaLaptopCode, progress: 90 },
  { name: 'React', icon: SiReact, progress: 89 },
  { name: 'JavaScript', icon: SiJavascript, progress: 91 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, progress: 86 },
  { name: 'Frontend Development', icon: FaLaptopCode, progress: 88 },
  { name: 'Cyber Security', icon: FaShieldAlt, progress: 92 },
  { name: 'System Security', icon: SiFramer, progress: 87 },
];

const projects = [
  {
    title: 'Shop By Me',
    description: 'Modern online booking and digital commerce platform.',
    tags: ['React', 'Tailwind', 'Security'],
    demo: '#projects',
    github: 'https://github.com/',
  },
  {
    title: 'Kariakoo Booking App',
    description: 'Smart online booking application with modern UI.',
    tags: ['React', 'API', 'UX'],
    demo: '#projects',
    github: 'https://github.com/',
  },
  {
    title: 'Network Configuration System',
    description: 'Networking systems and IP camera configuration platform.',
    tags: ['Network', 'Linux', 'Ops'],
    demo: '#projects',
    github: 'https://github.com/',
  },
  {
    title: 'Cybersecurity Dashboard',
    description: 'Hacker-style security monitoring interface.',
    tags: ['Three.js', 'Dashboard', 'Realtime'],
    demo: '#projects',
    github: 'https://github.com/',
  },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1800);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const phrase = typedPhrases[typedIndex];
    const interval = window.setInterval(() => {
      if (charIndex <= phrase.length) {
        setVisibleText(phrase.slice(0, charIndex));
        charIndex += 1;
      } else {
        window.setTimeout(() => {
          setVisibleText('');
          setTypedIndex((prev) => (prev + 1) % typedPhrases.length);
        }, 1200);
        window.clearInterval(interval);
      }
    }, 110);

    return () => window.clearInterval(interval);
  }, [typedIndex]);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const skillRows = useMemo(() => {
    return skills.map((skill) => {
      const Icon = skill.icon;
      return (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-5 text-left shadow-cyber backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-500/20">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">{skill.name}</h3>
              <p className="mt-1 text-sm text-slate-400">Progress</p>
            </div>
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-900/90">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            />
          </div>
          <span className="mt-3 block text-sm font-medium text-slate-300">{skill.progress}%</span>
        </motion.div>
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cyber-900 text-slate-100">
      <MatrixRain />
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-900/95 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyber-800 shadow-glow">
              <FaShieldAlt className="h-10 w-10 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Initializing Security Core</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Loading Adolph Mlasani</h1>
            </div>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_20%)]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.38),rgba(15,23,42,0.82))]"
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed top-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-70" />
      <div className="pointer-events-none fixed bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 opacity-60" />

      <nav className="sticky top-0 z-40 border-b border-white/5 bg-cyber-900/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-300 sm:px-8">
          <a href="#home" className="font-semibold tracking-[0.2em] text-cyan-300">ADOLPH</a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3 text-cyan-300"> 
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="transition hover:text-white"> <FaLinkedin /> </a>
            <a href="https://github.com/" aria-label="GitHub" className="transition hover:text-white"> <FaGithub /> </a>
            <a href="mailto:adolphmlasani29@gmail.com" aria-label="Email" className="transition hover:text-white"> <FaEnvelope /> </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8">
        <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden py-16">
          <div className="absolute inset-0 opacity-20">
            <ThreeScene />
          </div>
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 shadow-cyber backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                Cyberpunk Command Center Online
              </div>
              <div className="space-y-4">
                <p className="text-lg uppercase tracking-[0.35em] text-cyan-300/80">Hi, I&rsquo;m</p>
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">ADOLPH MLASANI</h1>
                <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
                  Cyber Security Engineer & Frontend Developer building secure, futuristic digital experiences with neon precision.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-cyan-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/5 px-3 py-2 text-sm backdrop-blur-xl">
                    <FaShieldAlt /> CEH Certified
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-3 py-2 text-sm backdrop-blur-xl">
                    <FaNetworkWired /> Shop By Me Founder
                  </span>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-cyber backdrop-blur-xl">
                <p className="mb-3 uppercase tracking-[0.28em] text-cyan-300/80">Status</p>
                <div className="flex flex-wrap items-center gap-3 text-2xl font-semibold text-white">
                  <span className="text-cyan-300">{visibleText}</span>
                  <span className="animate-pulse text-cyan-400">|</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="rounded-3xl border border-cyan-300/20 bg-cyan-500/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 transition duration-200 hover:bg-cyan-500/20 hover:text-white">
                  View Projects
                </a>
                <a href="#contact" className="rounded-3xl border border-purple-300/20 bg-purple-500/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-200 transition duration-200 hover:bg-purple-500/20 hover:text-white">
                  Contact Me
                </a>
                <a href="/resume.pdf" className="rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition duration-200 hover:brightness-110">
                  <FaDownload className="mr-2 inline-block" /> Download CV
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-950/60 p-1 shadow-cyber"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition duration-300 rounded-full" />
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <img 
                    src="/images/profile.png" 
                    alt="Adolph Mlasani - Cyber Security Engineer & Frontend Developer"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </motion.div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-950/60 p-6 shadow-cyber backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-80" />
                <div className="relative space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: FaLinkedin, label: 'LinkedIn', value: 'Adolph_mlasani', href: 'https://linkedin.com/' },
                      { icon: FaGithub, label: 'GitHub', value: 'github.com/adolph', href: 'https://github.com/' },
                      { icon: FaEnvelope, label: 'Email', value: 'adolphmlasani29@gmail.com', href: 'mailto:adolphmlasani29@gmail.com' },
                      { icon: FaWhatsapp, label: 'WhatsApp', value: '+255624667100', href: 'https://wa.me/255624667100' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-3xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 transition duration-200 hover:border-cyan-300/40 hover:bg-cyan-500/10">
                          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/20">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm text-slate-400">{item.label}</p>
                            <p className="font-medium text-white">{item.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-cyan-400/10 bg-slate-950/80 p-5 shadow-glow backdrop-blur-xl">
                    <div className="text-sm uppercase tracking-[0.23em] text-cyan-300/80">{stat.label}</div>
                    <div className="mt-3 text-3xl font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">About</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Futuristic Glassmorphism Profile</h2>
            </div>
            <div className="rounded-full border border-cyan-400/10 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl">
              Cyber Security Engineer + Frontend Developer
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/70 p-8 shadow-cyber backdrop-blur-2xl">
              <div className="space-y-6">
                <p className="text-lg leading-8 text-slate-300">
                  Adolph Mlasani is a Cyber Security Engineer and Frontend Developer passionate about cybersecurity, ethical hacking, networking, and futuristic web experiences. Founder of Shop By Me and Certified Ethical Hacker (CEH), he has performed multiple cybersecurity labs, penetration testing exercises, and technical security challenges while building modern responsive interfaces and secure digital systems.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cyan-400/15 bg-cyber-800/85 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Certification</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Certified Ethical Hacker</h3>
                  </div>
                  <div className="rounded-3xl border border-purple-400/15 bg-cyber-800/85 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-purple-300/70">Achievement</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">Real-world Security Challenges</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/70 p-6 shadow-cyber backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-white">Highlights</h3>
                <ul className="mt-4 space-y-3 text-slate-400">
                  <li>• Founder of Shop By Me, building secure commerce workflows.</li>
                  <li>• CEH certified with strong practical penetration testing experience.</li>
                  <li>• Experienced in cybersecurity labs, networking, and secure frontend design.</li>
                  <li>• Passionate about modern technology, security, and immersive digital experiences.</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-cyan-400/15 bg-cyan-500/10 p-6 shadow-glow backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-white">Cybersecurity Achievement</h3>
                <p className="mt-3 text-slate-300">Built an advanced hacker dashboard aesthetic with a cohesive command center vibe, blending neon pulse glow and matrix-inspired motion.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Skills</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Cyberpunk Skill Set</h2>
            </div>
            <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-200 backdrop-blur-xl">
              Animated progress & interactive glow
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{skillRows}</div>
        </section>

        <section id="projects" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Hacker-Style Portfolio Showcase</h2>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl">
              Neon border glow & live demo UI
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-2xl"
              >
                <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_20%)] opacity-70" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Project</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-sm text-blue-200">Active</div>
                  </div>
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2">{tag}</span>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a href={project.demo} className="inline-flex items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white">
                      Live Demo
                    </a>
                    <a href={project.github} className="inline-flex items-center justify-center rounded-3xl border border-purple-300/20 bg-purple-500/10 px-4 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20 hover:text-white">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Experience</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Secure Systems & Certifications</h2>
            </div>
            <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-200 backdrop-blur-xl">
              Terminal-inspired command logs
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Certification</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Certified Ethical Hacker (CEH)</h3>
              <p className="mt-3 text-slate-400">Global certification for ethical hackers and security specialists focused on attack strategies and defense techniques.</p>
            </div>
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Experience</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Cybersecurity Labs</h3>
              <p className="mt-3 text-slate-400">Hands-on lab exercises in penetration testing, network defense, system hardening, and secure application workflows.</p>
            </div>
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Specialties</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Networking & Frontend</h3>
              <p className="mt-3 text-slate-400">Practical experience with networking architecture, IP camera systems, secure web interfaces, and responsive UI engineering.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Cyberpunk Communication Panel</h2>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl">
              Neon glowing inputs & send action
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-8 shadow-cyber backdrop-blur-xl">
              <div className="space-y-5">
                <p className="text-slate-300">Reach out through encrypted channels and futuristic UI interactions. Available for cybersecurity engagements, frontend collaborations, and high-impact security projects.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">WhatsApp</p>
                    <p className="mt-2 text-lg text-white">+255624667100</p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">Email</p>
                    <p className="mt-2 text-lg text-white">adolphmlasani29@gmail.com</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">LinkedIn</p>
                  <p className="mt-2 text-lg text-white">Adolph_mlasani</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80">Name</label>
                  <input className="w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80">Email</label>
                  <input className="w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20" placeholder="Your email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80">Message</label>
                  <textarea rows={5} className="w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20" placeholder="Tell me about your project" />
                </div>
                <button type="button" className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-glow transition hover:brightness-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <div className="pointer-events-none fixed left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/75 bg-cyan-400/20 blur-xl" style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }} />
    </div>
  );
}

export default App;
