import { Award, Brain, Microscope, Quote, Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Researchers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading scientists and clinicians share their experience using
            BioScan for genetic variant analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative">
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex items-center mb-4 pt-4">
              <div className="flex text-green-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "BioScan has revolutionized our variant analysis workflow. What
              used to take days now takes minutes, and the accuracy is
              remarkable. It's become an essential tool in our cancer research
              lab."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Dr. Jennifer Walsh
                </h4>
                <p className="text-gray-600 text-sm">
                  Principal Investigator, Memorial Sloan Kettering
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative">
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex items-center mb-4 pt-4">
              <div className="flex text-teal-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "The confidence scores and detailed functional predictions from
              BioScan have significantly improved our clinical decision-making
              process. It's like having an expert geneticist available 24/7."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Prof. David Martinez
                </h4>
                <p className="text-gray-600 text-sm">
                  Director of Genomics, Mayo Clinic
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative md:col-span-2 lg:col-span-1">
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex items-center mb-4 pt-4">
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic">
              "As a computational biologist, I'm impressed by the model's
              performance on rare variants. BioScan consistently outperforms
              other tools in our benchmark studies."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Lisa Chen</h4>
                <p className="text-gray-600 text-sm">
                  Senior Scientist, Broad Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
