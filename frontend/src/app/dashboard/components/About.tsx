import {
  Brain,
  Code,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Users,
} from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Development Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate team of developers, researchers, and bioinformatics
            experts dedicated to advancing genomic medicine through AI
            innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Alex Chen
            </h3>
            <p className="text-green-600 font-medium mb-2">Lead AI Engineer</p>
            <p className="text-gray-600 text-sm mb-4">
              Specializes in transformer architectures and genomic data
              processing. PhD in Computational Biology.
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sarah Rodriguez
            </h3>
            <p className="text-teal-600 font-medium mb-2">
              ML Research Scientist
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Expert in protein structure prediction and variant effect
              modeling. Former researcher at DeepMind.
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dr. Michael Kim
            </h3>
            <p className="text-emerald-600 font-medium mb-2">
              Bioinformatics Lead
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Clinical geneticist with 10+ years in variant interpretation.
              MD/PhD from Stanford University.
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl border border-lime-100 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Emma Thompson
            </h3>
            <p className="text-lime-600 font-medium mb-2">
              Full-Stack Developer
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Frontend and backend specialist focused on creating intuitive
              scientific interfaces and APIs.
            </p>
            <div className="flex justify-center space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-lime-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
