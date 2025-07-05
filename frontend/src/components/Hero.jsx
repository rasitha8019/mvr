const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl text-white text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          MVR SOFT SOLUTIONS
        </h1>
        <p className="text-lg md:text-2xl">
          Empowering Future Through Quality Education
        </p>
      </div>
    </div>
  );
};

export default Hero;
