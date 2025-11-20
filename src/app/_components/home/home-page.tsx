"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { SiteNav } from "../layout/site-nav";
import { ExperienceCard } from "../common/experience-card";
import { ProjectCard } from "../common/project-card";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");

    const handleWheel = (e: WheelEvent) => {
      // Check if we're on desktop (lg breakpoint is 1024px)
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && scrollContainer) {
        // Desktop: scroll the container
        e.preventDefault();
        scrollContainer.scrollTop += e.deltaY;
      }
      // Mobile: let the default scroll behavior work (don't prevent default)
    };

    // Add wheel event listener to the entire document
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="flex h-screen min-h-screen flex-col items-start bg-[#f4efdc] lg:flex-row">
      {/* Left Column */}
      <div className="flex h-auto flex-1 flex-col pt-16 pl-8 lg:h-full lg:pt-32 lg:pl-64">
        <div>
          <h1 className="mb-4 text-4xl font-medium lg:text-6xl">
            Manuel Meraz
          </h1>
          <p className="mb-6 text-2xl lg:text-3xl">Full Stack Engineer</p>
        </div>
        <div className="my-4 hidden lg:my-auto lg:block">
          <SiteNav />
        </div>
        <div className="mb-8 flex gap-6 lg:mb-16">
          <a
            href="https://github.com/MMeraz21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#2a4433]"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-meraz-386a27204/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#2a4433]"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/mmerazzzz21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#2a4433]"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="h-auto flex-1 overflow-y-visible p-8 pt-8 lg:h-full lg:overflow-y-auto lg:pt-32 lg:pr-64"
        id="scrollContainer"
      >
        {/* About Section */}
        <div id="about">
          <h2 className="mb-6 text-2xl font-medium lg:hidden">About</h2>
          <div className="text-xl text-black">
            Hey! I&apos;m Manuel, a recent CS grad from DePaul University who
            enjoys building cool stuff for the web and mobile. I like working
            across the stack, but I especially enjoy making things that feel
            fast, clean, and intuitive. Whether it&apos;s a weekend side project
            or something bigger, I love turning ideas into real apps. Outside of
            coding, you&apos;ll usually find me digging through online
            marketplaces for deals on clothes, playing basketball, gaming, or
            hanging out with my dog.
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mt-16">
          <h2 className="mb-6 text-2xl font-medium lg:hidden">Experience</h2>
          <ExperienceCard
            timePeriod="June-October 2025"
            title="Software Engineer Intern"
            description={`Migrated the codebase to Next.js, TypeScript, and Tailwind CSS. Implemented Google Sign In authentication and built a user dashboard for managing job applications with serverless backend functionality.`}
            technologies={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "Netlify",
              "AirTable",
            ]}
            companyName="jobboardai"
            companyUrl="https://jobboardai.io"
          />

          {/* Projects Section */}
          <div id="projects" className="mt-16">
            <h2 className="mb-6 text-2xl font-medium lg:hidden">Projects</h2>
            <ProjectCard
              title="Echo"
              description={`A video chat app that auto-transcribes conversations and translates them in real-time, 
            enabling communication across language barriers.`}
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn/ui",
                "Azure",
              ]}
              demoUrl="https://echo-rho-two.vercel.app/"
              githubUrl="https://github.com/MMeraz21/Echo"
              year="2025"
            />
            <ProjectCard
              title="Spear"
              description={`A TikTok-inspired mobile app for sharing and discovering poetry. Features Google Sign In authentication 
                and a feed-based interface for browsing poems instead of videos.`}
              technologies={[
                "React Native",
                "TypeScript",
                "Expo",
                "Spring Boot",
                "Java",
              ]}
              githubUrl="https://github.com/MMeraz21/Spear"
              year="2024"
            />
            <ProjectCard
              title="HealthBuddy"
              description={`A mobile app that allows users to track their health metrics and receive personalized recommendations for improving their health.`}
              technologies={["Swift", "SwiftUI"]}
              githubUrl="https://github.com/MMeraz21/HealthBuddy"
              year="2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
