"use client"

import { Badge } from "../../common/badge"

export function Experience() {
    return (
        <section className="min-h-screen bg-[#161616] text-[#fbfbf3] flex items-center">
            {/* Left side content */}
            <article className="w-[45%] pl-8 space-y-6"> 
                <header className="space-y-2">
                    <h2 className="text-2xl font-bold">jobboardai</h2>
                    <h3 className="text-md">Software Engineer Intern</h3>
                    <time className="text-md block">June-August 2025</time>
                </header>

                <div className="space-y-4">
                    <p className="text-md">Implemented Google Sign In for authentication and authorization, enabling secure user access.</p>
                    <p className="text-md">Built the user dashboard interface, allowing users to view and manage their job applications.</p>
                    <p className="text-md">Developed corresponding backend functionality in a serverless architecture to support job saving, retreival, and user session management.</p>
                </div>

                <footer className="pt-4">
                    <div className="flex flex-row gap-2 flex-wrap">
                        <Badge>JavaScript</Badge>
                        <Badge>CSS</Badge>
                        <Badge>HTML</Badge>
                        <Badge>Netlify</Badge>
                        <Badge>AirTable</Badge>
                    </div>
                </footer>
            </article>
            
            {/* Right side - for future slider */}
            <div className="w-1/2">
                {/* Your slider will go here */}
            </div>
        </section>
    )
}