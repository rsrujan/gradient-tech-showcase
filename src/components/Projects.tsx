
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: "Neural Network Visualizer",
      description:
        "A web-based tool for visualizing and understanding neural network architectures. Users can create, customize, and export network diagrams.",
      image: "https://via.placeholder.com/600x400?text=Neural+Network+Visualizer",
      technologies: ["React", "D3.js", "TensorFlow.js", "Node.js"],
      githubUrl: "https://github.com/username/neural-network-visualizer",
      demoUrl: "https://neural-network-visualizer.demo",
    },
    {
      title: "Sentiment Analysis API",
      description:
        "A machine learning API that performs sentiment analysis on text data. Classifies text as positive, negative, or neutral with detailed confidence scores.",
      image: "https://via.placeholder.com/600x400?text=Sentiment+Analysis+API",
      technologies: ["Python", "Flask", "BERT", "Docker"],
      githubUrl: "https://github.com/username/sentiment-analysis-api",
      demoUrl: "https://sentiment-analysis-api.demo",
    },
    {
      title: "Smart Home Dashboard",
      description:
        "A dashboard for monitoring and controlling smart home devices. Features real-time analytics and automated routines based on user behavior.",
      image: "https://via.placeholder.com/600x400?text=Smart+Home+Dashboard",
      technologies: ["React", "Node.js", "MongoDB", "MQTT"],
      githubUrl: "https://github.com/username/smart-home-dashboard",
      demoUrl: "https://smart-home-dashboard.demo",
    },
    {
      title: "AI Image Generator",
      description:
        "An application that generates unique images based on text prompts using deep learning models. Includes style transfer and image manipulation features.",
      image: "https://via.placeholder.com/600x400?text=AI+Image+Generator",
      technologies: ["Python", "PyTorch", "GAN", "FastAPI"],
      githubUrl: "https://github.com/username/ai-image-generator",
      demoUrl: "https://ai-image-generator.demo",
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
            Here are some of the projects I've worked on recently. Each project represents a unique
            challenge and showcases different aspects of my technical skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-dark-accent border-none overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
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
                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gradient-border flex gap-2"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity flex gap-2"
                    asChild
                  >
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
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
