import React from "react";
import Container from "./Container";
import SocialLink from "./SocialLink";
import Button from "./Button";
import Image from "next/image";
import "aos/dist/aos.css";


const Banner = () => {
  return (
    <Container>
      <section id="home">
        <div className="flex flex-col lg:grid lg:grid-cols-9 gap-4 lg:gap-4">
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-5 pt-8 lg:pt-20 flex justify-center lg:justify-end items-center">
            <div className="border-3 border-white rounded-full bg-amber-500 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden relative">
              <Image
                src="/person2.png"
                alt="person"
                height={600}
                width={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
          </div>

          <div  className="  order-2 lg:order-1 lg:col-span-4 mt-4 lg:mt-20 text-center lg:text-left">
            <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-500">
              Hi I am
            </h3>
            <h2 className="font-semibold uppercase text-xl sm:text-2xl lg:text-3xl text-gray-400 pt-2 lg:pt-3 pb-3 lg:pb-5">
           Zubayer Mahmud <span className="text-amber-600">Samin</span> 
            </h2>
            <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FD6F00]">
            Web  Developer
            </h1>

            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
              <SocialLink />
            </div>

            <div  className="flex  md:flex-row gap-3 md:gap-5 py-4 lg:py-5 justify-center lg:justify-start pb-10">
              <Button className="w-full md:w-auto">Hire Me</Button>
              <Button className="w-full md:w-auto">Download CV</Button>
            </div>

            <div className=" counter flex flex-col md:flex-row gap-3 sm:gap-4 px-4 sm:px-5 py-3 bg-gray-800 rounded-md w-full md:w-fit mx-auto lg:mx-0">
              <div className="border-b-2 border-gray-400 pb-3 md:pb-0 md:pr-5 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#FD6F00]">
                  5+
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300">
                  Experiences
                </p>
              </div>
              <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-400 pb-3 md:pb-0 md:pr-5 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#FD6F00]">
                  20+
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300">
Project done                </p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#FD6F00]">
            80+
                </h2>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-300">
            Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
