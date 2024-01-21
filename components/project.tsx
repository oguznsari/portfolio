"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "./ui/separator";

export enum Size {
  SM = "sm",
  MD = "md",
}

type ProjectProps = (typeof projectsData)[number] & { size: Size };

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  link,
  size,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.11 1"],
  });

  const resizeUpTo = size === "sm" ? 0.75 : 1;
  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, resizeUpTo]
  );
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, resizeUpTo]
  );

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0 md:max-w-2xl"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <a href={link} target="_blank">
        <section
          className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden 
                sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8
                rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
        >
          <div
            className="sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
                pt-4 pb-7 px-5 sm:group-even:ml-[18rem]"
          >
            <h3 className="text-2xl font-semibold font-mono">{title}</h3>
            <p className="my-2 leading-relaxed dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-gray-900 px-3 py-1 uppercase text-[0.7rem] tracking-wider 
                  text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                group-even:right-[initial] group-even:-left-40 
                transition group-hover:scale-105
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3 
                group-even:group-hover:-translate-y-3 
                group-even:group-hover:rotate-2"
          />
        </section>
      </a>
    </motion.div>
  );
};

export default Project;
