"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import linkedIn from "@/public/linkedin.svg";
import github from "@/public/github.svg";
import { HiDownload } from "react-icons/hi";

import myImage from "@/public/formal.jpeg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const thisYear = new Date().getFullYear();
const yearsOfExperience = thisYear - 2018;

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              src={myImage}
              alt="Oğuzhan SARI portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-30 object-cover rounded-full
              border-[0.15rem] border-yellow-100 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-2xl absolute bottom-2 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.75,
            }}
          >
            💻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Oğuzhan.</span> I&apos;m a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">{yearsOfExperience} years</span> of
        experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center
            gap-5 px-6 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white
                    px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
                    active:scale-105 transition font-mono"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110
                    active:scale-105 transition cursor-pointer border border-black/10
                    dark:bg-white/10 font-mono"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition
                    cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 group"
          href="https://www.linkedin.com/in/oguznsari"
          target="_blank"
        >
          <Image
            className="group-focus:scale-[1.5] group-hover:scale-[1.5]"
            src={linkedIn}
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition
                    cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 group"
          href="https://github.com/oguznsari"
          target="_blank"
        >
          <Image
            className="group-focus:scale-[1.5] group-hover:scale-[1.5]"
            src={github}
            alt="GitHub"
            width={20}
            height={20}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
