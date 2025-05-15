
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-center md:text-right">
              <span className="gradient-text">Built with passion</span> —
              Always learning, always growing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
