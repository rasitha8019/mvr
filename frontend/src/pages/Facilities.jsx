import React from "react";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaFileAlt,
  FaUserFriends,
  FaLaptopCode,
  FaComments,
} from "react-icons/fa";

const facilities = [
  {
    title: "Smart Classrooms",
    icon: FaChalkboardTeacher,
    description:
      "Modern classrooms equipped with digital boards, projectors, and interactive tools for enhanced learning.",
  },
  {
    title: "Regular Practice & Mock Interviews",
    icon: FaLaptopCode,
    description:
      "Daily coding sessions, weekly assessments, and mock interviews to build real-world confidence.",
  },
  {
    title: "Internship & Placement Support",
    icon: FaUserTie,
    description:
      "Internships with partner companies and 100% placement assistance with resume reviews and referrals.",
  },
  {
    title: "Certification",
    icon: FaFileAlt,
    description:
      "Industry-recognized course completion certificates to boost your resume and credibility.",
  },
  {
    title: "Limited Batch Size",
    icon: FaUserFriends,
    description:
      "Each batch contains only 25 students for personalized attention and focused guidance.",
  },
  {
    title: "Student Counseling",
    icon: FaComments,
    description:
      "1-on-1 mentorship and career counseling to guide students through their learning path.",
  },
];

const Facilities = () => {
  return (
    <section className="pt-20 pb-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Facilities
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Discover the unique features and support systems that make MVR Soft
          Solutions the perfect place to start your IT journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="text-yellow-500 text-3xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Facilities;
