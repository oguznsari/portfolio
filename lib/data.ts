import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ozbnbImg from "@/public/ozbnb.png";
import geniusImg from "@/public/genius.png";
import eCommerceImg from "@/public/ecommerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// as const is a TS feature to be a little more precise it will be these strings
// but not any other string

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Genius",
    description:
      "I made subscription-based AI tool offering Conversation, Image, Video, Music Generation, and Code Generation capabilities.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    imageUrl: geniusImg,
    link: "https://github.com/oguznsari/nextjs-ai-platform",
  },
  {
    title: "E-commerce Application",
    description:
      "I made an all-inclusive e-commerce application with a wide range of features designed to meet the needs of both Admin and Store components.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    imageUrl: eCommerceImg,
    link: "https://github.com/oguznsari/nextjs-e-commerce",
  },
  {
    title: "OzyBnb",
    description:
      "I created an Airbnb clone with features like adding places, booking, authentication, and API documentation.",
    tags: ["JavaScript", "NodeJS", "Express", "MongoDB", "tailwindCSS"],
    imageUrl: ozbnbImg,
    link: "https://github.com/oguznsari/booking",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "MongoDB",
  "Express",
  "Linux",
  "PHP",
  "MySQL",
  "Prisma",
  "Docker",
  "Redis",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "Jira",
] as const;