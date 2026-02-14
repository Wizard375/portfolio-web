import React, { useState } from "react";
import { cn } from "../libs/utils";

const skills = [
  // Languages
  { name: "JavaScript (ES6+)", level: 90, category: "language" },
  { name: "TypeScript", level: 80, category: "language" },
  { name: "Java", level: 75, category: "language" },
  { name: "C", level: 70, category: "language" },
  { name: "C++", level: 75, category: "language" },
  { name: "Python", level: 80, category: "language" },
  { name: "SQL", level: 85, category: "language" },

  // Frameworks & Libraries
  { name: "React.js", level: 90, category: "frontend" },
  { name: "React Native", level: 80, category: "frontend" },
  { name: "Redux Toolkit", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 95, category: "frontend" },
  { name: "Node.js", level: 65, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },

  // Databases
  { name: "MongoDB", level: 80, category: "database" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "Firebase", level: 75, category: "database" },

  // Tools & Platforms
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = [
  "all",
  "language",
  "frontend",
  "backend",
  "database",
  "tools",
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkill = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkill.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-muted-background">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
