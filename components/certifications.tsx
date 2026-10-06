"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Certifications = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Certifications</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-gray-800 font-mono">
        {certificationsData.map((cert, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-64 flex-col items-center gap-3 rounded-xl border border-black/[0.1]
              bg-white px-5 py-5 transition hover:scale-[1.03] dark:bg-white/10 dark:text-white/80"
            >
              <FaAws
                className="h-16 w-16 shrink-0 text-[#FF9900]"
                aria-hidden
              />
              <span className="text-base leading-snug">{cert.name}</span>
              <span className="text-sm text-gray-500 dark:text-white/50">
                {cert.date}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
