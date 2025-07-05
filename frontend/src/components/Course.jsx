const Course = () => {
  const courses = [
    {
      title: "AWS with DevOps Training",
      description:
        "Gain hands-on experience with AWS services and master DevOps tools like Docker, Jenkins, Kubernetes, Git, and CI/CD pipelines for modern cloud deployments.",
    },
    {
      title: "Java Full Stack Development",
      description:
        "Learn front-end to back-end development using Java, Spring Boot, REST APIs, Hibernate, MySQL, HTML, CSS, JavaScript, and React or Angular.",
    },

    {
      title: "Python Full Stack Development",
      description:
        "Master front-end and back-end development with Python, Django, REST APIs, PostgreSQL, along with HTML, CSS, JavaScript, and React or Angular.",
    },

    {
      title: "Data Science with AI",
      description:
        "Learn how to combine data science techniques with artificial intelligence to build predictive models, automate analytics, and solve complex business problems using Python, ML, DL, and NLP.",
    },

    {
      title: "Web Development",
      description:
        "Become a professional web developer by mastering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern tools to build responsive, full-stack websites and web apps.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Courses We Offer
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
