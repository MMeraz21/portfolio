"use client";

import * as React from "react";
import { useState } from "react";

export function SiteNav() {
  const [activeItem, setActiveItem] = useState("About");

  const scrollToSection = (sectionId: string, itemName: string) => {
    setActiveItem(itemName);
    const container = document.getElementById("scrollContainer");
    const section = document.getElementById(sectionId);

    if (container && section) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const targetScrollTop =
        scrollTop + sectionRect.top - containerRect.top - 32; // 32px offset

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul className="flex flex-col -space-y-1">
        <li>
          <span
            onClick={() => scrollToSection("about", "About")}
            className={`cursor-pointer text-lg transition-colors duration-300 hover:text-black ${activeItem === "About" ? "text-black" : "text-[#999999]"}`}
          >
            About
          </span>
        </li>
        <li>
          <span
            onClick={() => scrollToSection("experience", "Experience")}
            className={`cursor-pointer text-lg transition-colors duration-300 hover:text-black ${activeItem === "Experience" ? "text-black" : "text-[#999999]"}`}
          >
            Experience
          </span>
        </li>
        <li>
          <span
            onClick={() => scrollToSection("projects", "Projects")}
            className={`cursor-pointer text-lg transition-colors duration-300 hover:text-black ${activeItem === "Projects" ? "text-black" : "text-[#999999]"}`}
          >
            Projects
          </span>
        </li>
        <li>
          <span
            onClick={() => setActiveItem("More")}
            className={`cursor-pointer text-lg transition-colors duration-300 hover:text-black ${activeItem === "More" ? "text-black" : "text-[#999999]"}`}
          >
            More
          </span>
        </li>
      </ul>
    </nav>
  );
}
