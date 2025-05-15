
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
      <div className="container mx-auto px-4 sm:px-6 z-10 opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-medium mb-3 tracking-wider">
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="inline-block gradient-text animate-gradient-x">
              John Doe
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            AI & Machine Learning Enthusiast
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gradient-border"
              asChild
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          aria-label="Scroll Down"
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </Button>
      </div>
    </section>
  );
}
