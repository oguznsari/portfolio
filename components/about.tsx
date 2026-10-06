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
        Systems Engineer on the Istanbul New Airport ATC tower — installing and
        maintaining Linux servers, radars, and third-party network interfaces.
      </p>
      <p className="mb-2">
        I then moved into software as a full-stack developer, first on a{" "}
        <span className="italic font-bold">PHP</span> and{" "}
        <span className="italic font-bold">MySQL</span> telecom platform
        (including a{" "}
        <span className="italic font-bold">ClickHouse</span> analytics
        migration), then on{" "}
        <span className="italic font-bold">React, Next.js,</span> and{" "}
        <span className="italic font-bold">NestJS</span> for a product serving
        millions of users across four regions.
      </p>
      <p className="mb-2">
        I now build platforms for a{" "}
        <span className="italic font-bold">NASDAQ-listed healthcare</span>{" "}
        company, including a contact-center on{" "}
        <span className="italic font-bold">Twilio</span> and{" "}
        <span className="italic font-bold">AWS</span>
        {": "}
        <span className="italic font-bold">
          Lambda, Step Functions, event pipelines,
        </span>{" "}
        and a shared{" "}
        <span className="italic font-bold">WAF</span> service other APIs opt
        into. I am an{" "}
        <span className="italic font-bold">
          AWS Certified Solutions Architect – Associate
        </span>
        .
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
