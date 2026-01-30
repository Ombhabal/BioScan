import { ArrowDown, ArrowRight, Brain, CheckCircle, Zap } from "lucide-react";
import React from "react";

const Solution = () => {
  return (
    <section
      id="solution"
      className="bg-gradient-to-br from-green-50 to-emerald-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            BioScan's AI Solution
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our transformer-based architecture leverages the power of Evo2
            models to provide accurate, fast, and reliable genetic variant
            analysis.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Advanced Transformer Architecture
                  </h3>
                  <p className="text-gray-600">
                    Built on Evo2, our model understands protein sequences at a
                    molecular level, providing unprecedented accuracy in variant
                    effect prediction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Real-time Processing
                  </h3>
                  <p className="text-gray-600">
                    Process thousands of variants in seconds, not hours. Our
                    optimized inference pipeline delivers results with
                    confidence scores instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Research-Grade Accuracy
                  </h3>
                  <p className="text-gray-600">
                    Validated against established benchmarks with superior
                    performance in pathogenicity prediction and functional
                    impact assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Model Architecture
              </h4>
              <p className="text-gray-600">Evo2 Transformer Pipeline</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 rounded-lg bg-green-50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
                  1
                </div>
                <span className="text-gray-700">DNA Sequence Input</span>
              </div>
              <ArrowDown className="mx-auto h-5 w-5 text-gray-400" />
              <div className="flex items-center space-x-3 rounded-lg bg-teal-50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
                  2
                </div>
                <span className="text-gray-700">Transformer Processing</span>
              </div>
              <ArrowDown className="mx-auto h-5 w-5 text-gray-400" />
              <div className="flex items-center space-x-3 rounded-lg bg-emerald-50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                  3
                </div>
                <span className="text-gray-700">Pathogenicity Prediction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
