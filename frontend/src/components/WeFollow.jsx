import React from "react";

const tipsItems = [
  {
    letter: "T",
    title: "Training",
    description:
      "Industry-relevant training with real-time projects and mentorship.",
    color: "bg-yellow-400",
  },
  {
    letter: "I",
    title: "Internship",
    description:
      "Hands-on internship programs to bridge the gap between learning and working.",
    color: "bg-blue-500",
  },
  {
    letter: "P",
    title: "Placements",
    description: "End-to-end placement support from resume to referrals.",
    color: "bg-green-500",
  },
  {
    letter: "S",
    title: "Success",
    description: "We aim to turn every learner into a success story.",
    color: "bg-purple-500",
  },
];

const WeFollow = () => {
  return (
    <section className="py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">We Follow T.I.P.S</h2>
        <p className="text-gray-600 text-base md:text-lg mt-2">
          A step-by-step model to shape your success journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {tipsItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 ${item.color}`}
            >
              {item.letter}
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeFollow;
