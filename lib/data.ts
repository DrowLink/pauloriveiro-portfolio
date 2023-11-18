import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

// export const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ] as const;

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Acerca",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Advanced English Program",
    location: "Puerto La Cruz, Venezuela",
    description:
      "Universidad Metropolitana",
    icon: React.createElement(FaReact),
    date: "2018 - 2021",
  },
  {
    title: "Systems Engineering",
    location: "Puerto La Cruz, Venezuela",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Graduated bootcamp",
    location: "Venezuela",
    description:
      "I graduated on 4geeksAcademy",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

// export const projectsData = [
//   {
//     title: "Buscatalento",
//     description:
//       "Web app focused on trade between users theirs skills, where they will be learning each other.",
//     tags: ["React", "Flask", "SQLAlchemy", "Bootstrap", "Figma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "Django WeatherApp",
//     description:
//       "Weather app comparator between different cities, django app driven with third api and server logical.",
//     tags: ["Django", "Python", "React", "Tailwind"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Django React NoteApp",
//     description:
//       "A django server app powered with ReactJS for design. Simple Notepad with list and crud activities.",
//     tags: ["React", "Django", "SQL", "Tailwind"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const projectsData = [
  {
    title: "Buscatalento",
    description:
      "Web app focused enfocada en el intercambio de habilidades entre usuarios, donde ellos aprenderan entre sí mismos.",
    tags: ["React", "Flask", "SQLAlchemy", "Bootstrap", "Figma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Django WeatherApp",
    description:
      "Aplicacion de clima comparadora entre diferentes ciudades del mundo, Aplicación en Django manejada con lógica usando una api tercera.",
    tags: ["Django", "Python", "React", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Django React NoteApp",
    description:
      "Aplicacion en Django alimentada con ReactJS para diseño. Bloc de notas minimalista con operaciones CRUD y lista general.",
    tags: ["React", "Django", "SQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
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
  "Tailwind",
  "Redux",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Flask",
  "FastAPI",
  "PHP",
  "Laravel",
  "MySQL",
  "SSH",
  "FTP"
] as const;