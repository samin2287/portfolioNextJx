import React from "react";
import Container from "./Container";
import { FaFigma, FaReact } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section id="services" className="mt-20">
      <Container>
        <h2 className="text-5xl text-white font-bold text-center">Services</h2>
        <p className="text-gray-400 text-center leading-6 py-5">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis <br />{" "}
          blandit felis ligula aliquam
        </p>{" "}
        <div
          className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-6 
                        md:gap-8 
                        xl:gap-10 
                        justify-items-center">
          <ServiceCard
            Icon={FaReact}
            title="React Development"
            description="Building responsive and scalable web apps with React."
          />
          <ServiceCard
            Icon={FaFigma}
            title="UI/UX Design"
            description="Designing intuitive and modern interfaces with Figma."
          />
          <ServiceCard
            Icon={FaReact}
            title="Frontend Integration"
            description="Connecting APIs and ensuring smooth UI interaction."
          />
          <ServiceCard
            Icon={FaFigma}
            title="Component Design"
            description="Reusable and optimized UI components for scalability."
          />
          <ServiceCard
            Icon={FaReact}
            title="Responsive Design"
            description="Ensuring perfect layout for all screen sizes."
          />
          <ServiceCard
            Icon={FaFigma}
            title="Prototyping"
            description="Turning ideas into interactive visual prototypes."
          />
        </div>
      </Container>
    </section>
  );
};

export default Service;
