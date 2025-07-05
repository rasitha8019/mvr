import { assests } from "../assets/assests";
import { useNavigate } from "react-router-dom";
const Facili = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      description:
        "Digitally enabled classrooms with high-speed internet, projectors, and smart boards to enhance interactive learning.",
      image: assests.classroom,
    },

    {
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with real-world experience in cutting-edge tech.",
      image: assests.mentor,
    },
    {
      title: "Internship & Placement Support",
      description:
        "Get real-time internship opportunities and full support in placements including resume prep, mock interviews, and HR training.",
      image: assests.internship,
    },

    {
      title: "Regular Practice & Mock Interviews",
      description:
        "Daily hands-on coding sessions, weekly assessments, and structured mock interviews to boost confidence and placement success.",
      image: assests.interview,
    },

    {
      title: "Certification",
      description:
        "Industry-recognized certifications provided after course completion to boost your resume and career profile.",
      image: assests.certify,
    },
    {
      title: "Limited Batch Size",
      description:
        "Each batch is limited to only 25 students to ensure personalized attention, interaction, and better learning outcomes.",
      image: assests.limited,
    },
  ];
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/facilities");
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Facilities We Provide
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Empowering our students with top-notch infrastructure and support.
        </p>
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-col justify-between flex-grow p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={handleExplore}
                      className="text-yellow-600 font-semibold text-sm flex items-center hover:underline"
                    >
                      EXPLORE MORE
                      <span className="ml-2">➜</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facili;
