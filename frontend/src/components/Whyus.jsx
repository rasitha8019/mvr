import React from "react";
import {
  FaBookOpen,
  FaTools,
  FaChalkboardTeacher,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const reasons = [
  {
    title: "Industry-Standard Curriculum",
    description:
      "Our courses are designed with the latest technologies and trends to match the real-world industry needs.",
    icon: <FaBookOpen className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Hands-On Real-Time Projects",
    description:
      "Students work on real-world projects to gain practical experience and apply their skills effectively.",
    icon: <FaTools className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Expert Trainers",
    description:
      "Learn from experienced industry professionals who bring practical knowledge and mentorship.",
    icon: <FaChalkboardTeacher className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Resume Building",
    description:
      "We help you craft a professional resume that highlights your technical strengths and project experience.",
    icon: <FaFileAlt className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Interview Preparation",
    description:
      "Dedicated sessions for mock interviews, technical rounds, and soft skill enhancement to boost confidence.",
    icon: <FaComments className="text-yellow-400 text-3xl" />,
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-2">
          What makes MVR Soft Solutions stand out from the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition duration-300"
          >
            <div>{item.icon}</div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
