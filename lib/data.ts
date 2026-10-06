import React from "react";
import { FaDatabase, FaHeadset, FaPlaneDeparture, FaReact, FaServer } from "react-icons/fa";
import geniusImg from "@/public/genius.png";
import eCommerceImg from "@/public/ecommerce.png";
import ozbnbImg from "@/public/ozbnb.png";

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
    title: "Software Engineer · Orion Innovation",
    location: "Istanbul, Turkey",
    description:
      "Serverless contact-center for a NASDAQ-listed healthcare company, on Twilio and AWS: Node.js/TypeScript Lambda services and 13 Step Functions workflows (SMS, voice, email, fax, live chat), a CDC mesh (Kinesis → FIFO SQS with DLQs → Kafka) with per-entity ordering and DynamoDB idempotency, a shared CDK WAF (tag-based discovery, fail-on-zero, count-then-block), a Do-Not-Contact service, and React Flex UI.",
    icon: React.createElement(FaHeadset),
    date: "Mar 2025 – Present",
  },
  {
    title: "Software Engineer · Orion Innovation",
    location: "Istanbul, Turkey",
    description:
      "Patient portal for a NASDAQ-listed healthcare company, with React, Node.js, MySQL, and Kafka. Improved notification-queue throughput by ~13x and scaled containers from 14 to 8 with no performance loss.",
    icon: React.createElement(FaReact),
    date: "May 2024 – Mar 2025",
  },
  {
    title: "Software Engineer · Orion Innovation",
    location: "Istanbul, Turkey",
    description:
      "Telecom provisioning platform for millions of users across 4 regions. Led full-stack CDR features (Next.js, NestJS, PostgreSQL), implemented soft delete that saved ~$20,000 in the first month, cut compute by 60%, and reduced report-generation CPU by 50% with MySQL index and join refactors.",
    icon: React.createElement(FaServer),
    date: "Mar 2021 – Apr 2024",
  },
  {
    title: "Software Engineer · Netaş – NetRD",
    location: "Istanbul, Turkey",
    description:
      "LAMP-stack telecom provisioning. Built a SIP analytics pipeline and migrated storage from MongoDB to columnar ClickHouse, cutting query latency by 50%.",
    icon: React.createElement(FaDatabase),
    date: "Aug 2020 – Mar 2021",
  },
  {
    title: "Systems Engineer · Cengiz & Saab J.V.",
    location: "Istanbul, Turkey",
    description:
      "I worked as A-SMGCS Systems Engineer in Istanbul New Airport project. Installation and maintenance of Linux servers and workstations on ATC tower. 3rd party system integrations and admin responsibilities.",
    icon: React.createElement(FaPlaneDeparture),
    date: "Jun 2017 – Aug 2020",
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
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "NestJS",
  "Express",
  "AWS Lambda",
  "Step Functions",
  "SQS",
  "EventBridge",
  "Kinesis",
  "DynamoDB",
  "AWS CDK",
  "AWS SAM",
  "Kafka",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Datadog",
  "GitLab CI/CD",
  "Docker",
  "Linux",
  "Git",
  "Tailwind",
] as const;

export const certificationsData = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    date: "May 2025",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ad9b482e83704ad5b47ef5bb101bdde1",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    date: "August 2024",
    url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ad9b482e83704ad5b47ef5bb101bdde1",
  },
] as const;
