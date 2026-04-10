import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import burpsuiteIcon from "@/assets/icons/burpsuite.svg";
import owaspzapIcon from "@/assets/icons/owaspzap.svg";
import wiresharkIcon from "@/assets/icons/wireshark.svg";
import metasploitIcon from "@/assets/icons/metasploit.svg";
import nmapIcon from "@/assets/icons/nmap.svg";
import mobsfIcon from "@/assets/icons/mobsf.svg";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";
import javaIcon from "@/assets/icons/java.png";

const skills = [
  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express", level: 90, category: "backend", icon: "express" },
  { name: "Django", level: 85, category: "backend", icon: "python" },
  { name: "Python", level: 90, category: "backend", icon: "python" },
  { name: "MongoDB", level: 90, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 85, category: "backend", icon: "postgresql" },
  { name: "MySQL", level: 90, category: "backend", icon: "mysql" },
  { name: "SQL", level: 90, category: "backend", icon: "sql" },
  { name: "Docker", level: 85, category: "backend", icon: "docker" },
  { name: "Git", level: 90, category: "backend", icon: "git" },
  { name: "GitHub", level: 90, category: "backend", icon: "github" },
  { name: "VS Code", level: 85, category: "backend", icon: "vscode" },

  // Web Security
  { name: "Burp Suite", level: 90, category: "web-security", icon: "burpsuite" },
  { name: "OWASP ZAP", level: 85, category: "web-security", icon: "owaspzap" },
  { name: "SQLmap", level: 85, category: "web-security", icon: "sql" },
  { name: "Nmap", level: 88, category: "web-security", icon: "nmap" },

  // Application Security
  { name: "Metasploit", level: 80, category: "app-security", icon: "metasploit" },
  { name: "Wireshark", level: 85, category: "app-security", icon: "wireshark" },

  // Mobile Security
  { name: "Android Security", level: 85, category: "mobile", icon: "java" },
  { name: "MobSF", level: 85, category: "mobile", icon: "mobsf" },
];

const categories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "web-security", label: "Web Security", color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { id: "app-security", label: "Application Security", color: "bg-gradient-to-r from-fuchsia-500 to-pink-500" },
  { id: "mobile", label: "Mobile Security", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
];

const iconImages = {
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  vscode: vscodeIcon,
  burpsuite: burpsuiteIcon,
  owaspzap: owaspzapIcon,
  wireshark: wiresharkIcon,
  metasploit: metasploitIcon,
  nmap: nmapIcon,
  mobsf: mobsfIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
  java: javaIcon,
};

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${
        level > 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
        level > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 
        'bg-gradient-to-r from-red-400 to-pink-500'
      }`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      
      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div key={`${skill.name}-reverse-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Backend development, web security, application security, and mobile security
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                      <img src={iconImages[skill.icon]} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          skill.level > 75 ? 'bg-emerald-500/10 text-emerald-500' : 
                          skill.level > 50 ? 'bg-amber-500/10 text-amber-500' : 
                          'bg-pink-500/10 text-pink-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Basic</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};