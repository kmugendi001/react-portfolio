import { Download, FileText, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const CVComponent = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const cvContent = `PIUS KARIUKI MUGENDI


📍 Nakuru, Kenya | 📞 +2547-956-60272 | 📧 mugendipius960@gmail.com


PROFESSIONAL SUMMARY
Recent graduate with a BSc in Computer Security & Forensics (2024) from Kabarak University. Skilled in ICT systems, database management, and secure software development, with hands-on experience in cybersecurity research, software projects, and technical support. Demonstrated ability to solve complex problems, work in teams, and adapt quickly to new environments. Seeking to contribute to KRA's digital transformation and public service mandate through the 2025 internship program.


CORE COMPETENCIES
• ICT & Systems Support (Windows/Linux, networking, troubleshooting)
• Database Management (SQL, MySQL)
• Web Application Development & Testing (HTML, CSS, JS, React, APIs)
• Programming & Scripting (Python, Java, C++, JavaScript)
• Cybersecurity Awareness & Compliance (Vulnerability testing, secure coding)
• Teamwork, Problem Solving, and Professional Communication


EDUCATION
Bachelor of Science in Computer Security & Forensics
Kabarak University — Graduated Dec 2024

Kenya Certificate of Secondary Education (KCSE)
Ciamanda Secondary School — Grade B–


EXPERIENCE
Software Development Intern – Summer 2022
   - Assisted in developing and testing web applications using HTML, CSS, and JavaScript.
   - Collaborated with developers to debug, test, and improve system performance.
   - Gained practical exposure to teamwork and ICT systems in a professional setting.

Cybersecurity Research & Bug Bounty (Freelance) – 2023–Present
   - Reported and documented vulnerabilities on international platforms (HackerOne, Bugcrowd).
   - Specialized in identifying flaws in web applications (XSS, CSRF, logic flaws).
   - Developed structured reporting and responsible disclosure skills.

Capture The Flag (CTF) Competitions – 2024–2025
   - Competed in international CTF challenges, solving problems in cryptography, reverse engineering, and web exploitation.
   - Strengthened problem-solving, persistence, and collaborative skills.


PROJECTS
• Student Management System (Java + MySQL): Automated academic records.
• Movie Recommendation System (Python): Built collaborative filtering for personalized recommendations.
• Personal Blogging Platform (HTML/CSS/JS): Developed a responsive platform for publishing content.


CERTIFICATIONS & RECOGNITION
• Introduction to Python Programming – Coursera
• HTML5 & CSS Fundamentals – Udemy
• Dean's List – Kabarak University (2019–2022)


PROFESSIONAL MEMBERSHIPS
• Association for Computing Machinery (ACM) – Member
• Institute of Electrical and Electronics Engineers (IEEE) – Member`;

  const handleViewCV = () => {
    setIsViewerOpen(true);
  };

  const handleDownloadCV = () => {
    // Create a blob with the CV content
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    
    // Create a temporary link element
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    // Set the link properties
    link.setAttribute('href', url);
    link.setAttribute('download', 'Pius_Kariuki_Mugendi_CV.txt');
    link.style.visibility = 'hidden';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div id="cv" className="py-16 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Access my complete professional profile and experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleViewCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                <Eye className="w-5 h-5" />
                View CV
              </motion.button>
              
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary border-2 border-primary/50 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Viewer Modal */}
      {isViewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsViewerOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card border border-border/30 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-border/30 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Curriculum Vitae
              </h3>
              <button
                onClick={() => setIsViewerOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="whitespace-pre-wrap text-sm md:text-base text-foreground leading-relaxed font-mono">
                {cvContent}
              </div>
            </div>

            <div className="sticky bottom-0 bg-card border-t border-border/30 p-6 flex gap-3">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
              <motion.button
                onClick={() => setIsViewerOpen(false)}
                whileHover={{ scale: 1.02 }}
                className="flex-1 px-6 py-3 bg-secondary border border-border/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CVComponent;
