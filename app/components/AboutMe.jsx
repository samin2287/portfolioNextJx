import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
const AboutMe = () => {
  return (
    <section id="about" className="mt-10">
      {" "}
      <Container>
        <section className="pt-20 pb-20">
          <h2 className="text-6xl text-white font-bold text-center">
            About Me
          </h2>
          <p className="text-gray-400 text-center leading-6 py-5">
            User Interface and User Experience and Also video editing{" "}
          </p>
          <div className="flex flex-col md:flex-row items-center mt-10 gap-8 md:gap-12">
            {/* Image */}
            <div className="flex justify-center items-center w-full md:w-1/2">
              <Image
                src="/profile.png"
                alt="about"
                height={800}
                width={800}
                className="object-cover border-2 border-amber-500 rounded-md w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[36rem]"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12 text-center md:text-start">
              <p className="text-gray-400 leading-7 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto md:mx-0">
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions. Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
              </p>

              <div className="flex justify-center md:justify-start mt-4">
                <Button>Download CV</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutMe;
