"use client"

import * as React from "react"
import { useState } from "react"

export function SiteNav() {
  const [activeItem, setActiveItem] = useState("About")

  return (
    <nav className="-ml-2">
      <ul className="flex flex-col -space-y-2">
        <li>
          <span 
            onClick={() => setActiveItem("About")}
            className={`text-lg cursor-pointer transition-colors duration-200 ${activeItem === "About" ? 'text-black' : 'text-[#999999]'}`}
          >
            About
          </span>
        </li>
        <li>
          <span 
            onClick={() => setActiveItem("Experience")}
            className={`text-lg cursor-pointer transition-colors duration-200 ${activeItem === "Experience" ? 'text-black' : 'text-[#999999]'}`}
          >
            Experience
          </span>
        </li>
        <li>
          <span 
            onClick={() => setActiveItem("Projects")}
            className={`text-lg cursor-pointer transition-colors duration-200 ${activeItem === "Projects" ? 'text-black' : 'text-[#999999]'}`}
          >
            Projects
          </span>
        </li>
        <li>
          <span 
            onClick={() => setActiveItem("Education")}
            className={`text-lg cursor-pointer transition-colors duration-200 ${activeItem === "Education" ? 'text-black' : 'text-[#999999]'}`}
          >
            Education
          </span>
        </li>
        <li>
          <span 
            onClick={() => setActiveItem("More")}
            className={`text-lg cursor-pointer transition-colors duration-200 ${activeItem === "More" ? 'text-black' : 'text-[#999999]'}`}
          >
            More
          </span>
        </li>
      </ul>
    </nav>
  )
}
