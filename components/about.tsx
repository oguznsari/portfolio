"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2">
        After graduating with a degree in Electronics Engineering, I worked as a
        Systems Engineer for a period. However, I decided to pursue my passion
        for programming, embarking on my coding journey with{" "}
        <span className="italic font-bold">Python</span>. I primarily focused on
        machine learning projects through platforms like Kaggle and completed
        online courses, including those by Andrew Ng on Coursera.
      </p>
      <p className="mb-2">
        In my initial role as a full-stack web developer, I predominantly used{" "}
        <span className="italic font-bold">PHP</span> and&nbsp;
        <span className="italic font-bold">MySQL</span>. After three years of
        exciting and challenging experiences, I transitioned to a different
        project, concentrating on technologies like{" "}
        <span className="italic font-bold">React, TypeScript,</span> and&nbsp;
        <span className="italic font-bold">NestJS</span>.
      </p>
      <p className="mb-2">
        My favorite aspect of programming is problem-solving. I derive immense
        satisfaction from tackling complex issues and finding effective
        solutions. My core technology stack includes{" "}
        <span className="italic font-bold">React, Next.js, Node.js,</span>{" "}
        and&nbsp;
        <span className="italic font-bold">MongoDB</span>
        {". "}
        Additionally, I am proficient in{" "}
        <span className="italic font-bold">TypeScript</span> and&nbsp;
        <span className="italic font-bold">Prisma.</span> I&nbsp;am always eager
        to expand my knowledge by exploring new technologies and learning
        opportunities.
      </p>
      <p className="mb-2">
        Outside of coding, I find enjoyment in playing video games, watching
        movies, and going for a jog. I am also passionate about continuous
        learning and am currently studying{" "}
        <span className="italic">
          history, economics, and the dynamics of financial markets.
        </span>
      </p>
    </motion.section>
  );
};

export default About;
