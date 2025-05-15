
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: "EcoSafe: Industrial Water Effluent Monitoring",
      description: "Dashboard for monitoring industrial pollution affecting rivers. Combines IoT sensors with ML algorithms to detect contamination and provide real-time insights on water quality.",
      technologies: ["Python", "IoT", "Machine Learning", "Data Visualization"],
      githubUrl: "https://github.com/rsrujana/team_pirates_water_quality",
    },
    {
      title: "Fake News Prediction",
      description: "Machine learning model that classifies fake news using Natural Language Processing. Helps combat misinformation by analyzing text patterns and content reliability.",
      technologies: ["Python", "NLP", "TensorFlow", "Data Science"],
      githubUrl: "https://github.com/rsrujan/fake-news-prediction-",
    },
    {
      title: "Vehicle Price Prediction",
      description: "Predicts car prices based on key features using regression algorithms. Analyzes vehicle attributes to provide accurate market value estimations for buyers and sellers.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Regression Models"],
      githubUrl: "https://github.com/rsrujan/vechile-price-prediction",
    },
  ];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={projectsRef} 
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8"></div>
          <p className="text-gray-300 max-w-2xl mb-12">
            Here are some of the projects I've worked on, showcasing my skills in AI, machine learning,
            and software development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-dark-accent border-none overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gradient-border flex gap-2 w-full justify-center"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
