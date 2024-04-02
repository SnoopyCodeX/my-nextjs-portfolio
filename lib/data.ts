import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import panguilEcoparkImg from "@/public/panguil-ecopark.png";
import kapVirtualAssistantImg from "@/public/kap-virtual-assistant.png";
import readAndLearnAppImg from "@/public/read-and-learn-app.png";
import snoopBotImg from "@/public/snoopbot-v2.png";
import lyricsFinderImg from "@/public/lyrics-finder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started learning JAVA",
    location: "Cebu, Philippines",
    description: "I started learning programming during my 2nd year high school. I started with java",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Started learning Android App Development",
    location: "Cebu, Philippines",
    description: "I started learning how to make an android application using java+xml.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2018",
  },
  {
    title: "Started learning Web Development",
    location: "Cebu, Philippines",
    description: "I started learning how to make a website using various frameworks and libraries.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Started Freelancing",
    location: "Cebu, Philippines",
    description: "I started working as freelancer with the help of my few other friends who pushed and convinced me.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "SnoopBot v2",
    description: "SnoopBot is an opensource facebook chatbot that is made using nodejs, typescript and the unofficial facebook chat api.",
    tags: ["nodejs", "typescript", "messenger", "chatbot", "facebook-chat-bot"],
    imageUrl: snoopBotImg,
  },
  {
    title: "Lyrics Finder",
    description: "A simple song lyrics finder app built with Typescript, Fetch API, Express, React+Vite, Tailwind CSS, React Query, React-Hook-Forms, Zod, and DaisyUI.",
    tags: ["reactjs-vite", "tailwindcss", "daisyui", "typescript", "zod", "express", "lyrics", "lyrics-finder"],
    imageUrl: lyricsFinderImg,
  },
  {
    title: "Panguil Ecopark Website",
    description: "A tourist management website that also features live map tracking and geofencing.",
    tags: ["Laravel", "Bootstrap", "NobleUI", "Pubnub", "PHP", "Javascript"],
    imageUrl: panguilEcoparkImg,
  },
  {
    title: "Read and Learn App",
    description: "A mobile application that makes teaching kids how to read more easier than ever. It also has various features such as calculating the kid's wpm(words per minute).",
    tags: ["Flutter", "NodeJS", "ExpressJS", "PusherJS", "Rev.ai", "Dart", "Javascript"],
    imageUrl: readAndLearnAppImg,
  },
  {
    title: "KAP Virtual Help Desk",
    description: "A web-based virtual help desk featuring a chatbot to cater baranggay-related concerns specifically for Baranggay M. Acevida, Siniloan, Laguna, Philippines",
    tags: ["PHP", "Bootstrap", "Javascript", "TailwindCSS", "Fontawesome"],
    imageUrl: kapVirtualAssistantImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Bootstrap CSS",
  "Android Studio",
  "PHP",
  "Laravel",
  "Java",
  "Flutter",
  "Express JS",
  "Axios",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;