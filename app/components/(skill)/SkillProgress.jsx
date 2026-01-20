import React from "react";
import SkillProgressCard from "./SkillProgressCard";
import Container from "../Container";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const SkillProgress = () => {
  const skills = [
    { icon: <SiHtml5 />, percentage: 90, title: "HTML5" },
    { icon: <SiCss3 />, percentage: 85, title: "CSS3" },
    { icon: <SiJavascript />, percentage: 80, title: "JavaScript" },
    { icon: <SiBootstrap />, percentage: 60, title: "Bootstrap" },
    { icon: <SiReact />, percentage: 70, title: "React" },
    { icon: <SiTailwindcss />, percentage: 75, title: "Tailwind CSS" },
    { icon: <SiExpress />, percentage: 70, title: "Express" },
    { icon: <SiNodedotjs />, percentage: 70, title: "Node.js" },
    { icon: <SiMongodb />, percentage: 70, title: "MongoDB" },
  ];

  return (
    <section id="skills">
      <Container className="py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
          Skills
        </h2>

        <p className="text-gray-400 text-center leading-6 py-4 sm:py-5 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis{" "}
          <br className="hidden sm:block" />
          blandit felis ligula aliquam
        </p>

        {/* Responsive Grid */}
        <div
          className="
    bg-gray-900 text-white text-md 
    grid grid-cols-2 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-4 sm:gap-6 mt-8
  ">
          {skills.map((skill, i) => (
            <SkillProgressCard
              key={i}
              icon={skill.icon}
              percentage={skill.percentage}
              title={skill.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillProgress;
