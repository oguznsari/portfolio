"use client";

import React from "react";
import SectionHeading from "./section-heading";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics Engineering</span>, I worked
        as a Systems Engineer for a period. However, I decided to pursue my
        passion for programming, and I began my coding journey with{" "}
        <span className="font-medium">Python</span>
        {", "}
        primarily focusing on machine learning projects through platforms like
        Kaggle and online courses such as those by Andrew Ng on Coursera. My
        initial role in programming was as a full-stack web developer, where I
        predominantly used <span className="font-medium">PHP and MySQL</span>
        {". "}
        After three years of exciting and challenging experiences, I
        transitioned to a different project, concentrating on technologies like{" "}
        <span className="font-medium">React, TypeScript, and NestJS{". "}</span>
      </p>
      <p>
        <span className="italic">My favorite aspect of programming</span> is
        problem-solving. I derive immense satisfaction from tackling complex
        issues and finding effective solutions. My core technology stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        {". "}
        Additionally, I am proficient in{" "}
        <span className="font-medium">TypeScript and Prisma.</span> I&nbsp;am
        always eager to expand my knowledge by exploring new technologies and
        learning opportunities.
      </p>
      <p>
        Outside of coding, I find enjoyment in playing video games, watching
        movies, and going for a jog. I am also passionate about continuous
        learning and am currently studying{" "}
        <span className="font-medium">
          history, economics, and the dynamics of financial markets.
        </span>
      </p>
    </motion.section>
  );
};

export default About;
