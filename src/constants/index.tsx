import { rsvi, sleeksky, fsmk } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  typescript,
  reactNative,
  tailwindcss,
  cpp,
  python,
  notes,
  food,
  dog,
  work,
  airbnb,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: reactNative,
    name: "React Native",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "MUI",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "TailwindCSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Programming Language",
  },
];

export const experiences = [
  {
    title: "Software Development Intern",
    company_name: "RSVI",
    icon: rsvi,
    iconBg: "#fbc3bc",
    date: "May 2021 - Jun 2021",
    points: [
      "Software Development: Led contributions for enhanced website functionality, ensuring seamless user experiences across multiple modules.",
      "Web Design Excellence: Applied creative design principles, enhancing the company's online presence with a modern and engaging user interface.",
      "Rapid Learning Curve: Actively engaged in a dynamic project environment, accelerating personal and professional growth through continuous learning and adaptation.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "SleekSky",
    icon: sleeksky,
    iconBg: "#accbe1",
    date: "July 2021 - Jan 2022",
    points: [
      "Front-End Development: Engaged in ReactJS and Material-UI tasks at SleekSky, emphasizing continuous learning and growth.",
      "Client-Centric Communication: Enhanced skills through direct client interactions, contributing to personal and professional development.",
      "Tech Integration: Implemented Shopify and more, reinforcing a commitment to continuous learning in a dynamic environment.",
    ],
  },
  {
    title: "Software Engineer - Web & Mobile",
    company_name: "Funding Societies | FSMK",
    icon: fsmk,
    iconBg: "#b7e4c7",
    date: "Nov 2022 - Sep 2023",
    points: [
      "Versatile Technology Exposure: Swiftly adapted to diverse tech environments at Funding Societies, handling React Native for mobile and React/TS for web projects. Demonstrated adaptability and a commitment to continuous learning.",
      "Cross-Functional Collaboration: Engaged in various teams across web, mobile, and individual-led projects, emphasizing effective collaboration in a dynamic FinTech setting.",
      "Incremental Growth: Contributed to average-sized teams, fostering both technical and team dynamic growth, marking a progression from previous experiences.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Ayush-2001-Dhanraj",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ayush-d-1759461a1/",
  },
];

export const projects = [
  {
    iconUrl: work,
    theme: "bg-gradient-to-r from-blue-100 via-blue-300 to-yellow-200",
    name: "Tasks - Management App",
    description:
      "Currently under development - Project vision is to create a Jira inspired tasks managemnt app from scratch without any external packages.",
    link: "https://github.com/Ayush-2001-Dhanraj/Tasks",
  },
  {
    iconUrl: airbnb,
    theme: "bg-gradient-to-r from-blue-200 via-blue-400 to-yellow-300",
    name: "Airbnb Clone App",
    description:
      "Currently under development - landmark project showcasing Native mobile app development skills inspired from Airbnb.",
    link: "https://github.com/Ayush-2001-Dhanraj/airbnb-app",
  },
  {
    iconUrl: dog,
    theme: "bg-gradient-to-r from-blue-300 via-blue-500 to-yellow-400",
    name: "City Runner Game",
    description:
      "Mr. Doggu is here to save the day and destroy creatures of the night. Javascript Sprite aimations because super dogs are real.",
    link: "https://vercel.com/ayush-2001-dhanraj/fcc-js-game-final-project",
  },
  {
    iconUrl: food,
    theme: "bg-gradient-to-r from-blue-400 via-blue-600 to-yellow-500",
    name: "Food Recipe App",
    description:
      "Your interactive recipe booklet now in your phone. Supported by TheMealDB inspired by my passion for food.",
    link: "https://github.com/Ayush-2001-Dhanraj/food-recipe-app",
  },
  {
    iconUrl: notes,
    theme: "bg-gradient-to-r from-blue-500 via-blue-700 to-yellow-600",
    name: "Keeper App",
    description:
      "Notes app inspired by Google Keep for you all who always forget milk when shopping.",
    link: "https://keeper-app-ruby-kappa.vercel.app/",
  },
];
