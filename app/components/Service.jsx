import React from "react";
import Container from "./Container";
import { FaFigma } from "react-icons/fa6";

const Service = () => {
  return (
    <Container>
     <section className="pt-20">

   <h2 className="text-6xl text-white font-bold text-center">Services</h2>
        <p className="text-gray-400 text-center leading-6 py-5">
           Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
          </p>
      <div className="grid grid-cols-3 gap-6 mt-20">
     
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">App Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

      
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">Web Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

      
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">UI/UX Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">UI/UX Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">UI/UX Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-10 rounded-2xl">
          <FaFigma className="text-amber-600 text-8xl font-bold" />
          <h2 className="text-amber-600 text-4xl font-bold py-5">UI/UX Design</h2>
          <p className="text-gray-400 text-center leading-6">
            Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

     </section>
    </Container>
  );
};

export default Service;
