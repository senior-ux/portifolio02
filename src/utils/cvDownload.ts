/**
 * CV Download Utility
 * Generates a professional PDF CV and triggers download
 */

export const downloadCVPDF = () => {
  const cvContent = `
ADOLPH MLASANI
Cyber Security Engineer & Frontend Developer

═════════════════════════════════════════════════════════════════════════════════

CONTACT INFORMATION
──────────────────────────────────────────────────────────────────────────────────
Location:        Tanzania
Phone:           +255 624 667 100
Email:           adolphmlasani29@gmail.com
LinkedIn:        Adolph_mlasani
GitHub:          github.com/adolph


PROFESSIONAL SUMMARY
──────────────────────────────────────────────────────────────────────────────────
Certified Ethical Hacker (CEH) and Frontend Developer with proven expertise in
cybersecurity, ethical hacking, penetration testing, and secure web development.
Founder of Shop By Me and CEO of AL-ODEM Enterprises. Committed to building
secure, high-performance digital systems with futuristic user experiences.
Strong background in networking systems, security labs, and modern web
technologies. Passionate about bridging cybersecurity and cutting-edge
frontend design.


CERTIFICATIONS & ACHIEVEMENTS
──────────────────────────────────────────────────────────────────────────────────

★ Certified Ethical Hacker (CEH)
  International certification for ethical hackers and security specialists
  • Attack strategies and defense techniques
  • Penetration testing methodologies
  • Security assessment frameworks
  • Real-world threat analysis

★ Security Challenge Winner
  Completed 18+ real-world security challenges
  • Vulnerability assessment expertise
  • Incident response experience
  • Security hardening techniques
  • Advanced threat detection

★ Business Founder & CEO
  Shop By Me & AL-ODEM Enterprises
  • Built secure e-commerce platforms
  • Implemented frontend best practices
  • Led technology initiatives
  • Managed successful digital transformations


PROFESSIONAL EXPERIENCE
──────────────────────────────────────────────────────────────────────────────────

FOUNDER & CEO
Shop By Me & AL-ODEM Enterprises | Ongoing

• Designed and built secure e-commerce platform with modern tech stack
• Implemented cybersecurity best practices in business operations
• Developed responsive frontend interfaces with advanced user experience
• Managed 12+ technical projects and security initiatives
• Established brand identity and market presence


CYBERSECURITY LABS & CHALLENGES
Security Research & Development | Ongoing

• Completed 32+ hands-on cybersecurity laboratory exercises
• Performed penetration testing and vulnerability assessments
• Studied network architecture, system hardening, and security protocols
• Documented and analyzed security findings and threat models
• Participated in capture-the-flag (CTF) competition exercises


NETWORK SYSTEMS ENGINEER
Infrastructure & IP Configuration | Ongoing

• Configured and managed 9+ network systems and architectures
• Implemented IP camera systems and surveillance networks
• Designed secure network infrastructure with access controls
• Troubleshot network issues and optimized performance
• Implemented network monitoring and logging systems


FRONTEND DEVELOPER
Web Technologies & UI/UX | Ongoing

• Built 12+ responsive web applications and digital experiences
• Mastered React, JavaScript, Tailwind CSS, and modern frameworks
• Implemented advanced animations, glassmorphism, and cyberpunk aesthetics
• Focused on performance optimization and accessibility standards
• Created reusable component libraries and design systems


EDUCATION
──────────────────────────────────────────────────────────────────────────────────

BACHELOR OF SCIENCE IN COMPUTER SCIENCE
St Joseph University

Major: Computer Science, Networking & Cybersecurity
• Advanced networking protocols and architecture
• Software development and programming principles
• Database management and system design
• Cybersecurity fundamentals and ethical hacking
• Mobile and web application development


ADVANCED LEVEL (A LEVEL) CERTIFICATE
St Amedeus High School

Specialization: Science & Technology
• Advanced Mathematics and Physics
• Information Communication Technology (ICT)
• Science & Technology fundamentals
• Critical thinking and analytical skills


ORDINARY LEVEL (O LEVEL) CERTIFICATE
St Thomas Secondary School

Foundation: Science, Mathematics, English
• Core Mathematics and English subjects
• General Science and Technology
• Communication and problem-solving skills
• Foundation in STEM disciplines


TECHNICAL SKILLS
──────────────────────────────────────────────────────────────────────────────────

CYBERSECURITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Penetration Testing          ✓ Security Audits
✓ Vulnerability Assessment     ✓ Incident Response
✓ Kali Linux (Advanced)        ✓ Threat Analysis
✓ Ethical Hacking              ✓ Security Hardening
✓ Network Defense              ✓ Malware Analysis
✓ System Security              ✓ Compliance Standards

NETWORKING & INFRASTRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Network Architecture          ✓ TCP/IP Protocols
✓ System Administration         ✓ VPN & Firewall Config
✓ IP Camera Systems            ✓ Network Monitoring
✓ Linux Administration         ✓ Bandwidth Optimization

FRONTEND DEVELOPMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ React & TypeScript           ✓ Framer Motion
✓ JavaScript (Advanced)        ✓ Three.js
✓ Tailwind CSS                 ✓ UI/UX Design
✓ HTML5 & CSS3                 ✓ Responsive Design
✓ State Management             ✓ API Integration

TOOLS & PLATFORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Kali Linux                   ✓ Git & GitHub
✓ Burp Suite                   ✓ VS Code
✓ Metasploit Framework         ✓ Docker
✓ Wireshark                    ✓ Vite & Node.js


KEY STATISTICS
──────────────────────────────────────────────────────────────────────────────────
▪ Cybersecurity Labs Completed:      32+
▪ Security Challenges:               18+
▪ Projects Built:                    12+
▪ Network Systems Managed:           9+
▪ Years in Tech:                     5+
▪ Professional Certifications:       1 (CEH)
▪ Business Ventures:                 2 (Shop By Me, AL-ODEM)


LANGUAGES & ADDITIONAL
──────────────────────────────────────────────────────────────────────────────────
Languages:       English (Fluent), Swahili (Native)
Key Attributes:  Certified Professional, Continuous Learner, Problem Solver
Availability:    Available for cybersecurity engagements, frontend projects


═════════════════════════════════════════════════════════════════════════════════
Generated: ${new Date().toLocaleDateString()}
Portfolio: https://adolph-portfolio.com
═════════════════════════════════════════════════════════════════════════════════
`;

  // Create blob from content
  const blob = new Blob([cvContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Adolph_Mlasani_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Alternative: Download as HTML formatted CV
 */
export const downloadCVHTML = () => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adolph Mlasani - CV</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #00d4ff;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 { color: #00d4ff; font-size: 32px; }
        .header p { color: #666; font-size: 18px; margin-top: 5px; }
        .contact {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 10px;
            font-size: 13px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #00d4ff;
            font-size: 18px;
            border-bottom: 2px solid #00d4ff;
            padding-bottom: 8px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .entry {
            margin-bottom: 15px;
            padding: 0 0 15px 0;
            border-bottom: 1px solid #eee;
        }
        .entry:last-child { border-bottom: none; }
        .entry-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 5px;
        }
        .entry-title {
            color: #222;
            font-weight: 600;
            font-size: 15px;
        }
        .entry-org {
            color: #00d4ff;
            font-size: 14px;
        }
        .entry-date {
            color: #999;
            font-size: 13px;
        }
        .entry-details {
            color: #666;
            font-size: 13px;
            margin-bottom: 8px;
        }
        ul {
            margin-left: 20px;
            color: #555;
            font-size: 13px;
        }
        li { margin-bottom: 5px; }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .skill-box {
            background: #f9f9f9;
            padding: 12px;
            border-left: 3px solid #00d4ff;
            border-radius: 4px;
        }
        .skill-box strong { color: #00d4ff; }
        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            background: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
        }
        .stat { text-align: center; }
        .stat-number { font-size: 24px; color: #00d4ff; font-weight: bold; }
        .stat-label { font-size: 12px; color: #666; text-transform: uppercase; }
        @media print {
            body { background: white; padding: 0; }
            .container { box-shadow: none; max-width: 100%; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>ADOLPH MLASANI</h1>
            <p>Cyber Security Engineer & Frontend Developer</p>
            <div class="contact">
                <span>📱 +255 624 667 100</span>
                <span>📧 adolphmlasani29@gmail.com</span>
                <span>📍 Tanzania</span>
                <span>💼 Adolph_mlasani</span>
            </div>
        </div>

        <div class="section">
            <h2>Professional Summary</h2>
            <p style="color: #555; margin-bottom: 10px;">Certified Ethical Hacker (CEH) and Frontend Developer with proven expertise in cybersecurity, ethical hacking, penetration testing, and secure web development. Founder of Shop By Me and CEO of AL-ODEM Enterprises. Committed to building secure, high-performance digital systems with futuristic user experiences.</p>
        </div>

        <div class="section">
            <h2>Certifications</h2>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">★ Certified Ethical Hacker (CEH)</span>
                </div>
                <div>International certification for ethical hackers and security specialists</div>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">★ Security Challenge Winner</span>
                </div>
                <div>Completed 18+ real-world security challenges</div>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">★ Business Founder & CEO</span>
                </div>
                <div>Shop By Me & AL-ODEM Enterprises</div>
            </div>
        </div>

        <div class="section">
            <h2>Professional Experience</h2>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Founder & CEO</span>
                    <span class="entry-date">Ongoing</span>
                </div>
                <div class="entry-org">Shop By Me & AL-ODEM Enterprises</div>
                <ul>
                    <li>Designed and built secure e-commerce platform</li>
                    <li>Implemented cybersecurity best practices</li>
                    <li>Managed 12+ technical projects</li>
                </ul>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Cybersecurity Labs & Challenges</span>
                    <span class="entry-date">Ongoing</span>
                </div>
                <div class="entry-org">Security Research & Development</div>
                <ul>
                    <li>Completed 32+ cybersecurity laboratory exercises</li>
                    <li>Performed penetration testing and vulnerability assessments</li>
                    <li>Studied network architecture and security protocols</li>
                </ul>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Network Systems Engineer</span>
                    <span class="entry-date">Ongoing</span>
                </div>
                <div class="entry-org">Infrastructure & IP Configuration</div>
                <ul>
                    <li>Configured and managed 9+ network systems</li>
                    <li>Implemented IP camera systems</li>
                    <li>Designed secure network infrastructure</li>
                </ul>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Frontend Developer</span>
                    <span class="entry-date">Ongoing</span>
                </div>
                <div class="entry-org">Web Technologies & UI/UX</div>
                <ul>
                    <li>Built 12+ responsive web applications</li>
                    <li>Mastered React, JavaScript, Tailwind CSS</li>
                    <li>Implemented advanced animations and UI effects</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2>Education</h2>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Bachelor of Science in Computer Science</span>
                </div>
                <div class="entry-org">St Joseph University</div>
                <div class="entry-details">Major: Computer Science, Networking & Cybersecurity</div>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Advanced Level (A Level) Certificate</span>
                </div>
                <div class="entry-org">St Amedeus High School</div>
                <div class="entry-details">Specialization: Science & Technology</div>
            </div>
            <div class="entry">
                <div class="entry-header">
                    <span class="entry-title">Ordinary Level (O Level) Certificate</span>
                </div>
                <div class="entry-org">St Thomas Secondary School</div>
                <div class="entry-details">Foundation: Science, Mathematics, English</div>
            </div>
        </div>

        <div class="section">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-box">
                    <strong>Cybersecurity</strong>
                    <ul style="margin-left: 15px;">
                        <li>Penetration Testing</li>
                        <li>Vulnerability Assessment</li>
                        <li>Kali Linux Pro</li>
                        <li>Ethical Hacking</li>
                    </ul>
                </div>
                <div class="skill-box">
                    <strong>Networking</strong>
                    <ul style="margin-left: 15px;">
                        <li>Network Architecture</li>
                        <li>TCP/IP Protocols</li>
                        <li>IP Configuration</li>
                        <li>Linux Networking</li>
                    </ul>
                </div>
                <div class="skill-box">
                    <strong>Frontend Development</strong>
                    <ul style="margin-left: 15px;">
                        <li>React & TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript Advanced</li>
                        <li>Framer Motion</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Key Statistics</h2>
            <div class="stat-grid">
                <div class="stat">
                    <div class="stat-number">32+</div>
                    <div class="stat-label">Labs Completed</div>
                </div>
                <div class="stat">
                    <div class="stat-number">18+</div>
                    <div class="stat-label">Security Challenges</div>
                </div>
                <div class="stat">
                    <div class="stat-number">12+</div>
                    <div class="stat-label">Projects Built</div>
                </div>
                <div class="stat">
                    <div class="stat-number">9+</div>
                    <div class="stat-label">Network Systems</div>
                </div>
            </div>
        </div>

        <div class="section" style="text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
            <p>Generated: ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Adolph_Mlasani_CV.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
