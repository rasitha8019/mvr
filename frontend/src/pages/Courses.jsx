import React from "react";

const courses = [
  {
    title: "AWS with DevOps",
    image:
      "https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-4864.jpg",
    description:
      "Master AWS cloud and DevOps tools like Git, Jenkins, Docker, Kubernetes, and CI/CD pipelines. Learn how to deploy and manage scalable cloud infrastructure.",
  },
  {
    title: "Java Full Stack Development",
    image:
      "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    description:
      "Become a full-stack Java developer with core Java, Spring Boot, REST APIs, and front-end frameworks like React. Includes real-time project integration.",
  },
  {
    title: "Python Full Stack Development",
    image:
      "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4276.jpg",
    description:
      "Build dynamic web applications using Python, Django, HTML/CSS, JavaScript, and React. Learn both frontend and backend in one powerful stack.",
  },
  {
    title: "Data Science with AI",
    image:
      "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8639.jpg",
    description:
      "Explore data analysis, machine learning, and artificial intelligence using Python, NumPy, Pandas, Scikit-learn, and deep learning tools like TensorFlow.",
  },
  {
    title: "Web Development",
    image:
      "https://img.freepik.com/free-vector/web-development-concept-illustration_114360-4413.jpg",
    description:
      "Learn complete front-end and back-end development using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with deployment practices.",
  },
];

const Courses = () => {
  return (
    <section className="pt-20 pb-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Explore our professionally designed courses that combine practical
          experience with career-focused skills.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
