"use client";

import React, { useEffect, useState } from "react";
import IconCloud from "./Magicui/icon-cloud";
import { useTheme } from "next-themes";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mongodb",
  "mongoose",
  "cloudinary",
  "wordpress",
  "axios",
  "vercel",
  "firebase",
  "github",
  "visualstudiocode",
  "figma",
  "reactrouter",
  "java",
  "leetcode",
];



export function TechStack() {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    setBgColor(theme === "dark" ? "#333333" : "#f5f5f5");
  }, [theme]);

  return (
    <div className="relative flex items-center justify-center" >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default TechStack;
