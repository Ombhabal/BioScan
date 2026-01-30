import { Brain, Code, TrendingUp } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How BioScan Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process that transforms genetic variant data
            into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Input Sequence
            </h3>
            <p className="text-gray-600">
              Upload your DNA sequence or variant information. Our system
              accepts multiple formats including VCF, FASTA, and raw sequence
              data.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Analysis
            </h3>
            <p className="text-gray-600">
              Our Evo2-based transformer model analyzes the sequence,
              considering evolutionary conservation and protein structure
              predictions.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Results & Insights
            </h3>
            <p className="text-gray-600">
              Receive detailed predictions with confidence scores, pathogenicity
              classifications, and functional impact assessments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
