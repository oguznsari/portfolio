"use client";

import React from 'react'
import SectionHeading from './section-heading'

import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175
            }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Electronics Engineering</span>, I worked 
                as a Systems Engineer in Istanbul New Airport's A-SMGCS project where I 
                found the chance to work with international teams and cutting-edge technology.
                I decided to pursue my passion for programming. I started coding with{" "} 
                <span className="font-medium">Python</span>{" "}
                for machine learning projects thanks to Kaggle and courses from Andrew N.G. 
                in Coursera. My first job in programming was{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                I've mainly used{" "}
                <span className="font-medium">PHP and MySQL</span>{" "}
                After 3 years of fun and coding I've changed my project and started to work
                mainly with{" "}
                <span className="font-medium">React, TypeScript, and NestJS{". "}</span>
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and jogging. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and economics</span>. I'm also
                learning the dynamics of financial markets.
            </p>
        </motion.section>
    )
}

export default About