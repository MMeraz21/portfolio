"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import { SiteNav } from "../layout/site-nav";
import { ExperienceCard } from "../common/experience-card";
import { ProjectCard } from "../common/project-card";

export function HomePage() {
  return (
    <div className="flex h-[calc(100vh-72px)] flex-row items-start bg-[#fff9ea]">
      {/* Left Column */}
      <div className="flex h-full flex-1 flex-col pt-32 pl-32">
        <div>
          <h1 className="mb-4 text-6xl font-medium">Manuel Meraz</h1>
          <p className="mb-6 text-3xl">Full Stack Engineer</p>
          {/* <p className="max-w-[600px] text-xl text-gray-500">
            I build accessible, pixel-perfect digital experiences for the web.
          </p> */}
        </div>
        <div className="my-auto">
          <SiteNav />
        </div>
        <div className="mb-16 flex gap-6">
          <a
            href="https://github.com/MMeraz21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-meraz-386a27204/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/mmerazzzz21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-8 pt-32">
        {/* Right column content */}
        <div className="max-w-[600px] text-xl text-gray-500">
          Hey! I&apos;m Manuel, a recent CS grad from DePaul University who
          enjoys building cool stuff for the web and mobile. I like working
          across the stack, but I especially enjoy making things that feel fast,
          clean, and intuitive. Whether it&apos;s a weekend side project or
          something bigger, I love turning ideas into real apps. Outside of
          coding, you&apos;ll usually find me digging through online
          marketplaces for deals on clothes, playing basketball, gaming, or
          hanging out with my dog.
        </div>
        <div className="mt-16 max-w-[600px]">
          <ExperienceCard
            timePeriod="June-August 2025"
            title="Software Engineer Intern"
            description={`Implemented Google Sign In authentication and built a user dashboard for managing job applications. 
             Developed serverless backend functionality for job saving, retrieval, and session management.`}
            technologies={["JavaScript", "CSS", "HTML", "Netlify", "AirTable"]}
            companyName="jobboardai"
            companyUrl="https://jobboardai.io"
          />
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
                and a feed-based interface for browsing poems.`}
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
        </div>
      </div>
    </div>
  );
}
