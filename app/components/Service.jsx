import React from "react";
import Container from "./Container";
import { FaFigma } from "react-icons/fa6";

const Service = () => {
  return (
    <section id="services" className="mt-20">
      {" "}
      <Container>
        <section className="pt-20">
          <h2 className="text-6xl text-white font-bold text-center">
            Services
          </h2>
          <p className="text-gray-400 text-center leading-6 py-5">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis <br />{" "}
            blandit felis ligula aliquam
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                App Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                Web Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                UI/UX Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                UI/UX Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                UI/UX Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 md:p-8 lg:p-10 rounded-2xl">
              <FaFigma className="text-amber-600 text-6xl md:text-7xl lg:text-8xl font-bold" />
              <h2 className="text-amber-600 text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-5">
                UI/UX Design
              </h2>
              <p className="text-gray-400 text-center text-sm md:text-base leading-6">
                Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Service;
