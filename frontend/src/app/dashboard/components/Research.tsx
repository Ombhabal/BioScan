import { BookOpen, ExternalLink, Github, Youtube } from "lucide-react";
import React from "react";

const Research = () => {
  return (
    <section id="research" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Research Foundation
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            BioScan is built on cutting-edge research and validated against
            established benchmarks.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
              <div className="mb-4 flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Featured Research
                </h3>
              </div>

              <blockquote className="mb-4 text-gray-700 italic">
                "Transformer-based models show remarkable performance in
                predicting the functional effects of genetic variants, achieving
                state-of-the-art accuracy across multiple benchmark datasets."
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-green-600" />
                  <a
                    href="https://www.biorxiv.org/content/10.1101/2025.02.18.638918v1"
                    className="font-medium text-green-600 hover:text-green-700"
                  >
                    Read Paper
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-4 w-4 text-gray-600" />
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-700"
                  >
                    Source Code
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Youtube className="h-4 w-4 text-red-600" />
                  <a
                    href="https://youtu.be/3dCZxmd5bvs"
                    className="font-medium text-red-600 hover:text-red-700"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <h4 className="mb-2 text-lg font-semibold text-emerald-800">
                Benchmark Performance
              </h4>
              <p className="text-emerald-700">
                Achieved 94.2% accuracy on ClinVar pathogenic variants
              </p>
              <div className="mt-2 h-2 w-full rounded-full bg-emerald-200">
                <div
                  className="h-2 rounded-full bg-emerald-600"
                  style={{ width: "94.2%" }}
                ></div>
              </div>
            </div>

            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
              <h4 className="mb-2 text-lg font-semibold text-teal-800">
                Validation Dataset
              </h4>
              <p className="text-teal-700">
                Tested on 50,000+ variants from multiple disease categories
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h4 className="mb-2 text-lg font-semibold text-green-800">
                Clinical Applications
              </h4>
              <p className="text-green-700">
                Validated for cancer predisposition and rare disease analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
