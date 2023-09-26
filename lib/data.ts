import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPlaneDeparture, FaReact, FaServer } from "react-icons/fa";
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
    title: "Systems Engineer",
    location: "Istanbul, Turkey",
    description:
      "I worked as A-SMGCS Systems Engineer in Istanbul New Airport project. Installation and maintenance of Linux servers and workstations on ATC tower. 3rd party system integrations and admin responsibilities.",
    icon: React.createElement(FaPlaneDeparture),
    date: "2017 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Istanbul, Turkey",
    description:
      "I worked as a full-stack developer for 3 years with LAMP stack. Mainly worked on features & performance improvements with PHP and MySQL on backend features beside UI features.",
    icon: React.createElement(FaServer),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Istanbul, Turkey",
    description:
      "Working as a full-stack developer with expertise in React, Next.js, TypeScript, Tailwind CSS, Prisma, and MongoDB. Currently employed and open to new opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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