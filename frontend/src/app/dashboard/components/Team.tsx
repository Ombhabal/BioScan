import { Shield, TrendingUp, Users } from "lucide-react";
import React from "react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to democratizing access to advanced genomic analysis
            tools and accelerating scientific discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Scientific Rigor
            </h3>
            <p className="text-gray-600">
              Every model is validated against established benchmarks and
              peer-reviewed research standards.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Open Science
            </h3>
            <p className="text-gray-600">
              We believe in transparent, reproducible research that benefits the
              entire scientific community.
            </p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              Continuously pushing the boundaries of what's possible in
              computational genomics and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
