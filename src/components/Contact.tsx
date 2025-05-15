
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:srujanr1011@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show toast notification
    toast({
      title: "Email client opened",
      description: "Please send the email from your mail client to contact me.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={contactRef} 
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out using the form below
              or connect with me on social media.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="bg-dark border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Email:</span>{" "}
                    srujanr1011@gmail.com
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Location:</span>{" "}
                    Centurion University
                  </p>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">
                      Availability:
                    </span>{" "}
                    Open to new opportunities
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="mailto:srujanr1011@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-accent rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/rsrujan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-accent rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/r-srujan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-accent rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/rsrujan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-accent rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-gray-300 mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-300 mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-gray-300 mb-2 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
