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
            <div className="home-img flex justify-center items-center">
              <div className="img-box p-2 md:p-3 lg:p-4">
                <div className="img-item w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 relative overflow-hidden rounded-full">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" home-info  order-2 lg:order-1 lg:col-span-4 mt-4 lg:mt-20 text-center lg:text-left">
            <h3 className="font-semibold uppercase text-xl sm:text-2xl lg:text-3xl text-gray-400 pt-2 lg:pt-3 pb-3 lg:pb-5">
              Zubayer Mahmud Samin
            </h3>

            <h2 className="text-3xl md:text-4xl text-gray-400 font-bold">
              I'm a <br />
              <span style={{ "--i": 4 }} data-text="Frontend Developer">
                Frontend Developer
              </span>
              <span style={{ "--i": 3 }} data-text="Web Designer">
                Web Designer
              </span>
              <span style={{ "--i": 2 }} data-text="You Tuber">
                You Tuber
              </span>
              <span style={{ "--i": 1 }} data-text="Blogger">
                Blogger
              </span>
            </h2>

            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
              <SocialLink />
            </div>

            <div className="flex flex-row flex-wrap gap-3 md:gap-5 py-4 lg:py-5 justify-center lg:justify-start pb-10">
              <Button className="px-5 sm:px-6 md:px-8">Hire Me</Button>
              <Button className="px-5 sm:px-6 md:px-8">Download CV</Button>
            </div>
            <div
              className="counter flex flex-row items-center justify-center 
                gap-6 
                px-4 md:px-8 py-4 bg-gray-800 rounded-xl">
              {/* Experience */}
              <div className="flex flex-col items-center md:items-start border-r-2 border-gray-600 pr-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FD6F00]">
                  5+
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-300">
                  Experiences
                </p>
              </div>

              {/* Projects */}
              <div className="flex flex-col items-center md:items-start border-r-2 border-gray-600 pr-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FD6F00]">
                  20+
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-300">
                  Projects Done
                </p>
              </div>

              {/* Clients */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FD6F00]">
                  80+
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-300">
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
