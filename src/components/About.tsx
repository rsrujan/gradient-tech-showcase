
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={aboutRef} 
          className="opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mb-8"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative w-52 h-52 mb-4 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-md opacity-70 -z-10 animate-pulse"></div>
                <div className="w-full h-full overflow-hidden rounded-2xl border-2 border-purple-500/20 shadow-xl">
                  <img 
                    src="/lovable-uploads/8718132a-fe9c-477a-9feb-124d3f59241e.png" 
                    alt="R Srujan" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-dark-accent border border-gray-800 rounded-lg p-6 flex flex-col items-center mt-4 w-full transform hover:translate-y-[-5px] transition-transform duration-300 shadow-lg">
                <div className="w-32 h-32 mb-4">
                  <img 
                    src="https://developers.google.com/static/profile/badges/community/innovators/cloud/2023/badge.svg" 
                    alt="Google Cloud Innovators Badge" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-center text-sm text-gray-400">Google Cloud Innovators Program Member</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="bg-dark-accent border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-dark-accent to-gray-900/80">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I am a B.Tech CSE student from Centurion University (Class of 2026), passionate about machine learning, artificial intelligence, and contributing to open source projects. I enjoy solving complex problems and building applications that make a positive impact on society. My focus is on developing AI solutions that address real-world challenges in areas such as healthcare, environment, and education.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Through continuous learning and experimentation, I strive to stay at the forefront of AI technology trends and best practices. I am committed to creating ethical and responsible AI systems that are both innovative and accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
