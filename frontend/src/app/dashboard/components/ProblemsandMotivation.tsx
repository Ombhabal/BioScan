import { Microscope, Shield, TrendingUp } from "lucide-react";
import React from "react";

const ProblemsandMotivation = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Challenge in Genomic Medicine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding genetic variants is crucial for precision medicine,
            but current methods are time-consuming and often lack accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Complex Analysis
            </h3>
            <p className="text-gray-600">
              Traditional methods require extensive manual analysis and expert
              interpretation, leading to bottlenecks in research and clinical
              applications.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Growing Data Volume
            </h3>
            <p className="text-gray-600">
              With millions of genetic variants discovered annually, researchers
              need scalable solutions to process and interpret this data
              efficiently.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Clinical Impact
            </h3>
            <p className="text-gray-600">
              Accurate variant classification is essential for cancer research,
              rare disease diagnosis, and personalized treatment strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsandMotivation;
