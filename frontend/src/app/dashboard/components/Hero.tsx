"use client";
import { Brain, ChevronRight, Github, Play } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2">
              <Brain className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-700">
                AI-Powered Analysis
              </span>
            </div>
          </div>

          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-7xl">
            AI-Powered
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Variant Analysis
            </span>
            with BioScan
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Discover how BioScan uses deep learning to assess the impact of
            genetic mutations on human proteins. Our transformer-based models
            provide research-grade predictions for variant classification.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="https://youtu.be/3dCZxmd5bvs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex transform items-center space-x-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-green-700">
                <Play className="h-5 w-5" />
                <span>View Demo</span>
              </button>
            </a>
            <a href="#" target="_blank">
              <button className="flex items-center space-x-2 rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50">
                <Github className="h-5 w-5" />
                <span>Explore Code</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
