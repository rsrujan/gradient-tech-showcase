
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "programming" | "frameworks" | "tools" | "other";
}

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skills] = React.useState<Skill[]>([
    { name: "Python", level: 95, category: "programming" },
    { name: "TensorFlow", level: 90, category: "frameworks" },
    { name: "Java", level: 80, category: "programming" },
    { name: "HTML/CSS", level: 85, category: "programming" },
    { name: "MySQL", level: 80, category: "programming" },
    { name: "Google Cloud", level: 75, category: "tools" },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories: Record<string, string> = {
    programming: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Platforms",
    other: "Other Skills",
  };

  return (
    <section id="skills" className="py-20 bg-dark-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={skillsRef} 
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's an overview of my technical skills and expertise across various domains of software development,
              machine learning, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.keys(categories).map(
              (category) =>
                skills.some((skill) => skill.category === category) && (
                  <Card key={category} className="bg-dark border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        {categories[category]}
                      </h3>
                      <div className="space-y-4">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-gray-300">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                              </div>
                              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
