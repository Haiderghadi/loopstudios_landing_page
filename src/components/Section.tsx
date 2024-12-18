const Section = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 py-20 lg:py-28 gap-10">
      {/* Image Container */}
      <div className="w-full lg:w-[50%]">
        <img
          src="images/desktop/image-interactive.jpg"
          alt="interactive VR"
          className="w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="bg-white text-black w-full lg:w-[50%] flex flex-col justify-center items-start px-6 lg:px-12 py-10 lg:py-0">
        <h1 className="uppercase text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
          the leader in interactive vr
        </h1>
        <p className="text-sm lg:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          libero consectetur maxime quas praesentium fugit rerum aperiam
          reprehenderit accusamus iure? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempora, placeat!
        </p>
      </div>
    </div>
  );
};

export default Section;
