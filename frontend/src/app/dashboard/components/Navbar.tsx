"use client";

import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Dna } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Dna className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">BioScan</span>
          </div>

          {/* Nav links */}
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#solution" className="text-gray-600 hover:text-blue-600">
              Solution
            </a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600">
              Demo
            </a>
            <a href="#research" className="text-gray-600 hover:text-blue-600">
              Research
            </a>
            <a href="#team" className="text-gray-600 hover:text-blue-600">
              Team
            </a>

            {/* Auth-aware CTA */}
            <SignedOut>
              <Link href="/auth/sign-in">
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-4">
                <Link href="/home">
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Dashboard
                  </button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
