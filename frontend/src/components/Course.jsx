import React from "react";
import { assests } from "../assets/assests";

const courses = [
  {
    title: "AWS with DevOps Training",
    description:
      "Gain hands-on experience with AWS services and master DevOps tools like Docker, Jenkins, Kubernetes, Git, and CI/CD pipelines for modern cloud deployments.",
    image: assests.aws,
  },
  {
    title: "Java Full Stack Development",
    description:
      "Learn front-end to back-end development using Java, Spring Boot, REST APIs, Hibernate, MySQL, HTML, CSS, JavaScript, and React or Angular.",
    image: assests.java,
  },
  {
    title: "Python Full Stack Development",
    description:
      "Master front-end and back-end development with Python, Django, REST APIs, PostgreSQL, along with HTML, CSS, JavaScript, and React or Angular.",
    image: assests.python,
  },
  {
    title: "Data Science with AI",
    description:
      "Learn how to combine data science techniques with artificial intelligence to build predictive models, automate analytics, and solve complex business problems using Python, ML, DL, and NLP.",
    image: assests.dataScience,
  },
  {
    title: "Web Development",
    description:
      "Become a professional web developer by mastering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern tools to build responsive, full-stack websites and web apps.",
    image: assests.web,
  },
];

const Course = () => {
  return (
    <div className="pt-20 pb-16 px-4 md:px-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Courses We Offer
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
