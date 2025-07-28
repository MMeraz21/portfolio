"use client"

import { Github, Linkedin, Instagram } from "lucide-react"
import { SiteNav } from "../layout/site-nav"
import { ExperienceCard } from "../common/experience-card"

export function HomePage() {
    return (
        <div className="flex flex-row items-start bg-[#fbfbf3] h-[calc(100vh-72px)]">
            {/* Left Column */}
            <div className="flex-1 pt-32 pl-32 flex flex-col h-full">
                <div>
                    <h1 className="text-6xl font-medium mb-4">Manuel Meraz</h1>
                    <p className="text-3xl mb-6">Full Stack Engineer</p>
                    <p className="text-xl text-gray-500 max-w-[600px]">
                        I build accessible, pixel-perfect digital experiences for the web.
                    </p>
                </div>
                <div className="my-auto">
                    <SiteNav />
                </div>
                <div className="mb-16 flex gap-6">
                    <a href="https://github.com/MMeraz21" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/manuel-meraz-386a27204/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/mmerazzzz21/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <Instagram size={24} />
                    </a>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="flex-1 p-8 pt-32">
                {/* Right column content */}
                <div className="text-xl text-gray-500 max-w-[600px]">
                    Hey! I&apos;m Manuel, a recent CS grad from DePaul University who enjoys building cool stuff for the web and mobile. I like working across the stack, but I especially enjoy making things that feel fast, clean, and intuitive. Whether it&apos;s a weekend side project or something bigger, I love turning ideas into real apps.
                    Outside of coding, you&apos;ll usually find me digging through online marketplaces for deals on clothes, playing basketball, gaming, or hanging out with my dog.
                </div>
                <div className="mt-16">
                    <ExperienceCard 
                        timePeriod="June-August 2025"
                        title="Software Engineer Intern"
                        description="Implemented Google Sign In for authentication and authorization, enabling secure user access."
                        technologies={["JavaScript", "CSS", "HTML", "Netlify", "AirTable"]}
                    />
                </div>
            </div>
        </div>
    )
}