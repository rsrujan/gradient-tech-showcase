
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center"
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-accent opacity-40 z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/10 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl mx-auto text-center">
          <Avatar className="h-28 w-28 mx-auto mb-6 ring-2 ring-purple-500/30 ring-offset-2 ring-offset-background animate-pulse">
            <AvatarImage src="/lovable-uploads/bb7104f0-1d76-4755-b362-eacf4d81221a.png" alt="R Srujan" className="object-cover" />
            <AvatarFallback className="text-lg font-medium">RS</AvatarFallback>
          </Avatar>
          <p className="text-blue-400 font-medium mb-3 tracking-wider">
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="inline-block gradient-text animate-gradient-x">
              R Srujan
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            AI Developer & Machine Learning Enthusiast
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Passionate about artificial intelligence, machine learning, and contributing to open source projects. 
            Building innovative solutions to real-world problems through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity flex gap-2 transform hover:scale-105 transition-transform duration-300 shadow-lg"
              asChild
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gradient-border flex gap-2 transform hover:scale-105 transition-transform duration-300 shadow-lg"
              asChild
            >
              <a
                href="https://github.com/rsrujan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                Visit GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-purple-500/10 hover:bg-purple-500/20 backdrop-blur-sm"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          aria-label="Scroll Down"
        >
          <ArrowDown className="h-6 w-6 text-gray-300" />
        </Button>
      </div>
    </section>
  );
}
