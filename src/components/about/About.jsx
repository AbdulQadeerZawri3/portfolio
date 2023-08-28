import React from "react";
import Award from "../img/award .jpeg";

function About() {
  return (
    // the top header of the card
    <div className="h-screen flex items-center max-[480px]:flex-col max-[480px]:items-center max-[480px]:mt-14 max-[480px]:justify-center ">
      {/* left part that is image with shadow */}
      <div className="flex-1  relative h-full flex items-center justify-center max-[480px]:w-full">
        {/* shadow */}
        <div className="bg-[#333] absolute w-sixty h-70vh top-14 left-14 rounded-3xl max-[480px]:hidden"></div>
        {/* image: card */}
        <div className="w-sixty h-70vh rounded-3xl relative overflow-hidden max-[480px]:h-[30vh]">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="about me"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* right part that is description of that image */}
      <div className="flex-1 max-[480px]:p-4 max-[480px]:items-center max-[480px]:justify-center max-[480px]:content-center max-[480px]:flex-col ">
        {/* Title */}
        <h1 className="text-2xl font-normal mb-5 pb-8 max-[480px]:content-center max-[480px]:w-full mx-auto ">About Me</h1>

        {/* sub-title */}
        <p className="font-medium pb-5 mb-5">
          Front-End Developer | Business Economics Student | Physics Enthusiast
        </p>

        <p className="font-light">
          A skilled Front-End Developer, I blend design finesse with coding to
          create captivating digital interfaces. As a Business Economics
          student, I analyze markets with fresh perspectives. My love for
          physics fuels an inquisitive mind, driving interdisciplinary
          connections and a commitment to excellence in all pursuits.
        </p>
        <div className="flex flex-row items-center justify-around mt-10">
          <img
            src={Award}
            alt="certificate as a leader of team"
            className="h-20 w-20 rounded-md mr-10 max-[480px]:hidden"
          />
          <div className="max-[480px]:hidden">
          <p className="text-sm font-semibold text-gray-500 ">PUCON 2023 speed programming competition</p>

          <p className="mt-2 text-sm">
            Led the PUCON 2023 speed programming team to victory, orchestrating
            seamless collaboration{" "}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
