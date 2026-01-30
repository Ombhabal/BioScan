import React from "react";

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern tools and frameworks for scalability, performance,
            and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Python",
              desc: "Core ML Pipeline",
              color: "bg-green-100 text-green-800",
            },
            {
              name: "PyTorch",
              desc: "Deep Learning",
              color: "bg-emerald-100 text-emerald-800",
            },
            {
              name: "Evo2",
              desc: "Transformer Model",
              color: "bg-teal-100 text-teal-800",
            },
            {
              name: "Next.js",
              desc: "Frontend Framework",
              color: "bg-gray-100 text-gray-800",
            },
            {
              name: "Tailwind CSS",
              desc: "Styling",
              color: "bg-cyan-100 text-cyan-800",
            },
            {
              name: "Clerk",
              desc: "Authentication",
              color: "bg-lime-100 text-lime-800",
            },
            {
              name: "FastAPI",
              desc: "API Backend",
              color: "bg-emerald-100 text-emerald-800",
            },
            {
              name: "Docker",
              desc: "Containerization",
              color: "bg-teal-100 text-teal-800",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${tech.color}`}
              >
                {tech.name}
              </div>
              <p className="text-gray-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
