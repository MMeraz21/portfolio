"use client";

import * as React from "react";
import { useState } from "react";

export function SiteNav() {
  const [activeItem, setActiveItem] = useState("About");

  return (
    <nav>
      <ul className="flex flex-col -space-y-1">
        <li>
          <span
            onClick={() => setActiveItem("About")}
            className={`cursor-pointer text-lg transition-colors duration-200 ${activeItem === "About" ? "text-black" : "text-[#999999]"}`}
          >
            About
          </span>
        </li>
        <li>
          <span
            onClick={() => setActiveItem("Experience")}
            className={`cursor-pointer text-lg transition-colors duration-200 ${activeItem === "Experience" ? "text-black" : "text-[#999999]"}`}
          >
            Experience
          </span>
        </li>
        <li>
          <span
            onClick={() => setActiveItem("Projects")}
            className={`cursor-pointer text-lg transition-colors duration-200 ${activeItem === "Projects" ? "text-black" : "text-[#999999]"}`}
          >
            Projects
          </span>
        </li>
        <li>
          <span
            onClick={() => setActiveItem("More")}
            className={`cursor-pointer text-lg transition-colors duration-200 ${activeItem === "More" ? "text-black" : "text-[#999999]"}`}
          >
            More
          </span>
        </li>
      </ul>
    </nav>
  );
}
