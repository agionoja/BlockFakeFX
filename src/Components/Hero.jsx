import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center bg-white items-center min-h-screen">
      <div
        className="bg-[#3498DB] text-white flex  flex-col  px-40 lg:px-20 xl:px-80
      md:py-40 sm:py-40 py-10 lg:py-40 rounded-xl"
      >
        <div className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-center">
          Verify your Meds instantly! <br />
          Your Health our Priority
        </div>
        <h1 className="mt-4 md:text-2xl">
          Empowering Nigerians with instant assurance: scan, Verify, Thrive.
          Your Wellness, Our Commitment.
        </h1>
        <div className="max-w-md mx-auto  rounded-lg overflow-hidden p-4">
          <div className="flex items-center">
            <input
              type="text"
              className="flex-1 py-2 px-20 text-gray-700 leading-tight focus:outline-none border rounded-full 
               mr-2"
              placeholder="Enter drug secure digit"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
