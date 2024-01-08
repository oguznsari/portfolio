"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project, { Size } from "./project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  let width: Size = Size.MD;
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount
  width = windowWidth < 600 ? Size.SM : Size.MD;

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <Carousel
        orientation="horizontal"
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-2xl mt-20"
      >
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem key={index} className="mb-2">
              <Project {...project} size={width as Size} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
