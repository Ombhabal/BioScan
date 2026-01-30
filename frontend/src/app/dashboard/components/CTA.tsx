"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Play, Github } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Ready to Transform Your Research?
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-xl text-green-100">
          Join leading researchers who are using BioScan to accelerate their
          genetic variant analysis and make breakthrough discoveries.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <SignedOut>
            <Link href="/auth/sign-in">
              <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
                <Play className="h-5 w-5" />
                <span>Try BioScan Now</span>
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/home">
              <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100">
                <Play className="h-5 w-5" />
                <span>Try BioScan Now</span>
              </button>
            </Link>
          </SignedIn>

          {/* Secondary CTA */}
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-green-600"
          >
            <Github className="h-5 w-5" />
            <span>Explore GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
