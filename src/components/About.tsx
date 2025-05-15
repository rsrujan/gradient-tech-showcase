
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={aboutRef} 
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Card className="bg-dark-accent border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">
                    Hello! I'm a passionate AI and Machine Learning enthusiast with a strong foundation in software
                    development. I specialize in building intelligent systems and applications that solve real-world problems.
                  </p>
                  <p className="text-gray-300 mb-4">
                    With a background in Computer Science from MIT, I've spent the last few years exploring the
                    intersection of artificial intelligence and practical applications. My work spans from natural language
                    processing to computer vision projects.
                  </p>
                  <p className="text-gray-300">
                    When I'm not coding, you can find me contributing to open-source projects, writing technical
                    articles, or exploring the latest advancements in the field of AI. I'm always looking for new
                    challenges and opportunities to grow.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
                <p className="text-gray-300">MSc in Artificial Intelligence, MIT (2021-2023)</p>
                <p className="text-gray-300">BSc in Computer Science, Stanford University (2017-2021)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Experience</h3>
                <p className="text-gray-300">Machine Learning Engineer at Tech Innovations (2023-Present)</p>
                <p className="text-gray-300">AI Research Intern at Google AI (Summer 2022)</p>
                <p className="text-gray-300">Software Developer at Microsoft (2021-2022)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Research Interests</h3>
                <p className="text-gray-300">Deep Learning, Computer Vision, Natural Language Processing, Reinforcement Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
