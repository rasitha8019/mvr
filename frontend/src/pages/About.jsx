import React from "react";
import WeFollow from "../components/WeFollow"; // TIPS section
import WhyChooseUs from "../components/Whyus"; // Features section

const About = () => {
  return (
    <section className="pt-20 min-h-screen bg-white text-gray-800">
      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About MVR Soft Solutions</h1>
        <p className="text-gray-600 text-base md:text-lg">
          At{" "}
          <span className="text-yellow-500 font-semibold">
            MVR Soft Solutions
          </span>
          , our mission is to transform aspiring individuals into skilled IT
          professionals through structured training, real-time exposure, and
          dedicated career support. We don’t just teach — we guide your journey
          from classroom to corporate success.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 mb-20">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm">
            To provide practical, project-based learning in latest technologies,
            and to bridge the gap between academics and industry needs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600 text-sm">
            To be recognized as a leading training institute producing
            confident, job-ready IT professionals who thrive in top
            organizations globally.
          </p>
        </div>
      </div>

      {/* We Follow T.I.P.S. Section */}
      <WeFollow />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </section>
  );
};

export default About;
