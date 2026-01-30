"use client";

import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Demo = () => {
  return (
    <section id="demo" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Interactive Demo
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            See BioScan in action with a sample BRCA1 variant analysis.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
            <h3 className="mb-2 text-xl font-semibold text-white">
              Sample Analysis: BRCA1 c.68_69delAG
            </h3>
            <p className="text-green-100">
              Frameshift variant in BRCA1 gene associated with breast cancer
              risk
            </p>
          </div>

          <div className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Input Sequence
                </h4>
                <div className="overflow-x-auto rounded-lg bg-gray-100 p-4 font-mono text-sm">
                  <p>ATGGATTTATCTGCTCTTCGCGTTGAAGAAGTACAAAATGTCATTAAT...</p>
                  <p className="text-red-600">
                    GCAGAAGAAACCTTGAGAGGT[AG]AAGAAGCCTCTGTGA...
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900">
                    Analysis Parameters
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Model:</span>
                      <span className="font-medium text-gray-900">
                        Evo2-Large
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Confidence Threshold:
                      </span>
                      <span className="font-medium text-gray-900">0.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Time:</span>
                      <span className="font-medium text-gray-900">1.2s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Prediction Results
                </h4>

                <div className="space-y-4">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-red-800">
                        Pathogenic
                      </span>
                      <span className="font-mono text-red-600">95.7%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-red-200">
                      <div
                        className="h-2 rounded-full bg-red-600"
                        style={{ width: "95.7%" }}
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <h5 className="mb-2 font-semibold text-green-800">
                      Functional Impact
                    </h5>
                    <ul className="space-y-1 text-green-700">
                      <li>• Frameshift causes protein truncation</li>
                      <li>• Loss of C-terminal BRCT domains</li>
                      <li>• Disrupted DNA repair function</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
                    <h5 className="mb-2 font-semibold text-teal-800">
                      Clinical Significance
                    </h5>
                    <p className="text-teal-700">
                      Strong evidence for pathogenicity. Associated with
                      hereditary breast and ovarian cancer syndrome.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth-aware CTA */}
            <div className="mt-8 text-center">
              <SignedOut>
                <Link href="/sign-in">
                  <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700">
                    Try Your Own Variant
                  </button>
                </Link>
              </SignedOut>

              <SignedIn>
                <Link href="/home">
                  <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700">
                    Try Your Own Variant
                  </button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
