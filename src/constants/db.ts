import joblyImage from "../assets/projects/JoblyV2Demo.webp";
import frienderImage from "../assets/projects/FrienderDemo.webp";
import warblerImage from "../assets/projects/WarblerDemo.webp";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, Flask, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, PostgreSQL, Flask, and Express. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    id: "jobly",
    title: "Jobly V2",
    image: joblyImage,
    description:
      "A fully functional job board with authentication, applications, and search features.",
    link: "https://rydel-jobly.surge.sh/",
    technologies: ["React", "Node.js", "Bootstrap", "Express"],
  },
  {
    id: "friender",
    title: "Friender",
    image: frienderImage,
    description:
      "An application for finding people with similar hobbies and interests within a geographic area.",
    link: "https://rydel-friender-demo.onrender.com/",
    technologies: ["HTML", "CSS", "Bootstrap", "Flask", "PostgreSQL"],
  },
  {
    id: "warbler",
    title: "Warbler",
    image: warblerImage,
    description:
      "A full stack social networking site from a forgotten era.",
    link: "https://rydel-warbler-demo.onrender.com/",
    technologies: ["HTML", "CSS", "Bootstrap", "Flask", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "United States",
  email: "contact@nathanrydel.dev",
};