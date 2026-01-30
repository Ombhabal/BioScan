import CTA from "./components/CTA";
import Demo from "./components/Demo";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ProblemsandMotivation from "./components/ProblemsandMotivation";
import Research from "./components/Research";
import Solution from "./components/Solution";
import Team from "./components/Team";
import TechStack from "./components/TechStack";
import Testimonial from "./components/Testimonial";
import About from "./components/About";

function App() {
  return (
    <div className="font-inter min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      <br />
      <br />

      {/* Hero Section */}
      <Hero />

      {/* Problem & Motivation */}
      <ProblemsandMotivation />

      {/* Solution */}
      <Solution />

      {/* How It Works */}
      <HowItWorks />
      {/* Demo Section */}
      <Demo />

      {/* Research Backing */}
      <Research />

      {/* Tech Stack */}
      <TechStack />

      {/* About Us */}
      <About />

      {/* Testimonials */}
      <Testimonial />
      {/* Team */}
      <Team />

      {/* CTA */}
      <CTA />
      {/* Footer */}
    </div>
  );
}

export default App;
