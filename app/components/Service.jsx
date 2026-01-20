import React from "react";
import Container from "./Container";
import { FaFigma, FaReact } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import "aos/dist/aos.css";

const Service = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
      className="mt-16 sm:mt-20 lg:mt-28">
      <Container>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
          Services
        </h2>

        <p className="text-gray-400 text-center leading-6 py-4 sm:py-5 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis{" "}
          <br className="hidden sm:block" />
          blandit felis ligula aliquam
        </p>

        {/* Services Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-5 sm:gap-6 md:gap-8 xl:gap-10 
            justify-items-center
            mt-8
          ">
          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-center"
            Icon={FaReact}
            title="React Development"
            description="Building responsive and scalable web apps with React."
          />

          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-anchor-placement="top-center"
            Icon={FaFigma}
            title="UI/UX Design"
            description="Designing intuitive and modern interfaces with Figma."
          />

          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-anchor-placement="top-center"
            Icon={FaReact}
            title="Frontend Integration"
            description="Connecting APIs and ensuring smooth UI interaction."
          />

          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-center"
            Icon={FaFigma}
            title="Component Design"
            description="Reusable and optimized UI components for scalability."
          />

          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="2400"
            data-aos-anchor-placement="top-center"
            Icon={FaReact}
            title="Responsive Design"
            description="Ensuring perfect layout for all screen sizes."
          />

          <ServiceCard
            data-aos="fade-up"
            data-aos-duration="2800"
            data-aos-anchor-placement="top-center"
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
