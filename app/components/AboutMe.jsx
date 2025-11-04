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
          <div className="flex flex-col md:flex-row items-center mt-10">
            <div className="flex justify-center items-center w-full mb-8 md:mb-12">
              <Image
                src="/person2.png"
                alt="about"
                height={800}
                width={800}
                className="object-cover overflow-hidden border-2 border-amber-500 rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              />
            </div>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center md:text-start">
              <p className="text-gray-400 text-center md:text-start leading-7 max-w-4xl mx-auto">
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.{" "}
              </p>

              <div className="flex justify-center mt-2">
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
