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
} from "react-icons/si";

const SkillProgress = () => {
  const skills = [
    { icon: <SiHtml5 />, percentage: 90, title: "HTML5" },
    { icon: <SiCss3 />, percentage: 85, title: "CSS3" },
    { icon: <SiJavascript />, percentage: 80, title: "JavaScript" },
    {
      icon: <SiBootstrap />,
      percentage: 60,
      title: "React Bootstrap",
    },
    { icon: <SiReact />, percentage: 70, title: "React" },
    { icon: <SiTailwindcss />, percentage: 75, title: "Tailwind CSS" },
  ];

  return (
    <section id="skills">
      <Container className="py-20">
        <div className=" bg-gray-900 text-white flex flex-wrap justify-between items-center gap-6">
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
